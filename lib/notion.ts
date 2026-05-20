import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export interface Img {
  name: string;
  url: string;
  rawUrl?: string;
}

export interface Posts {
  id: string;
  title: string;
  slug: string;
  published: boolean;
  tags: string[];
  thumbnail: Img[];
  date?: string;
}

export interface Project {
  id: string;
  link: string;
  description: string;
  image: Img[];
  Name: string;
}

type NotionProperties = Record<string, unknown>;

interface NotionResultWithProperties {
  id: string;
  properties: NotionProperties;
}

interface RichTextItem {
  plain_text: string;
}

interface TitleProperty {
  title?: RichTextItem[];
}

interface RichTextProperty {
  rich_text?: RichTextItem[];
}

interface CheckboxProperty {
  checkbox?: boolean;
}

interface SelectOption {
  name: string;
}

interface MultiSelectProperty {
  multi_select?: SelectOption[];
}

interface DateProperty {
  date?: {
    start?: string;
  };
}

interface UrlProperty {
  url?: string;
}

interface FileProperty {
  name: string;
  type: "external" | "file";
  external?: { url?: string };
  file?: { url?: string };
}

interface FilesProperty {
  files?: FileProperty[];
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function hasProperties(value: unknown): value is NotionResultWithProperties {
  return isRecord(value) && typeof value.id === "string" && isRecord(value.properties);
}

function getPagesWithProperties(results: readonly unknown[]): NotionResultWithProperties[] {
  return results.filter(hasProperties);
}

function getTitle(property: unknown): string {
  if (!isRecord(property)) {
    return "";
  }

  const title = (property as TitleProperty).title;
  return title?.map((item) => item.plain_text).join("") ?? "";
}

function getRichText(property: unknown): string {
  if (!isRecord(property)) {
    return "";
  }

  const richText = (property as RichTextProperty).rich_text;
  return richText?.map((item) => item.plain_text).join("") ?? "";
}

function getCheckbox(property: unknown): boolean {
  if (!isRecord(property)) {
    return false;
  }

  return (property as CheckboxProperty).checkbox ?? false;
}

function getMultiSelect(property: unknown): string[] {
  if (!isRecord(property)) {
    return [];
  }

  return (property as MultiSelectProperty).multi_select?.map((tag) => tag.name) ?? [];
}

function getFiles(property: unknown): Img[] {
  if (!isRecord(property)) {
    return [];
  }

  return (
    (property as FilesProperty).files
      ?.map((file) => ({
        name: file.name,
        url: file.type === "external" ? file.external?.url || "" : file.file?.url || "",
      }))
      .filter((file) => file.url.length > 0) ?? []
  );
}

function getDateStart(property: unknown): string {
  if (!isRecord(property)) {
    return "";
  }

  return (property as DateProperty).date?.start ?? "";
}

function getUrl(property: unknown): string {
  if (!isRecord(property)) {
    return "";
  }

  return (property as UrlProperty).url ?? "";
}

export const getPosts = async (): Promise<Posts[]> => {
  const databaseId = process.env.NOTION_POSTS_DATABASE_ID!;
  const response = await notion.dataSources.query({
    data_source_id: databaseId,
    filter: {
      property: "published",
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: "date",
        direction: "descending",
      },
    ],
  });

  return getPagesWithProperties(response.results).map((page) => {
    const props = page.properties;
    return {
      id: page.id,
      title: getTitle(props.title),
      slug: getRichText(props.slug),
      published: getCheckbox(props.published),
      tags: getMultiSelect(props.tags),
      thumbnail: getFiles(props.thumbnail),
      date: getDateStart(props.date),
    };
  });
};

export const getProjects = async (): Promise<Project[]> => {
  const databaseId = process.env.NOTION_PROJECTS_DATABASE_ID!;
  const response = await notion.dataSources.query({
    data_source_id: databaseId,
  });

  return getPagesWithProperties(response.results).map((page) => {
    const props = page.properties;
    return {
      id: page.id,
      Name: getTitle(props.Name),
      description: getRichText(props.description),
      link:
        getUrl(props.link) ||
        getUrl(props.Link) ||
        getRichText(props.link) ||
        getRichText(props.Link),
      image: getFiles(props.image),
    };
  });
};
