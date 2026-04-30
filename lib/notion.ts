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

export const getPosts = async (): Promise<Posts[]> => {
  const databaseId = process.env.NOTION_POSTS_DATABASE_ID!;
  // @ts-ignore - latest client uses dataSources.query
  const response = await (notion as any).dataSources.query({
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

  return response.results.map((page: any) => {
    const props = page.properties;
    return {
      id: page.id,
      title: props.title?.title?.map((t: any) => t.plain_text).join("") || "",
      slug: props.slug?.rich_text?.[0]?.plain_text || "",
      published: props.published?.checkbox || false,
      tags: props.tags?.multi_select?.map((tag: any) => tag.name) || [],
      thumbnail:
        props.thumbnail?.files?.map((file: any) => ({
          name: file.name,
          url: file.type === "external" ? file.external.url : file.file.url,
        })) || [],
      date: props.date?.date?.start || "",
    };
  });
};

export const getProjects = async (): Promise<Project[]> => {
  const databaseId = process.env.NOTION_PROJECTS_DATABASE_ID!;
  // @ts-ignore - latest client uses dataSources.query
  const response = await (notion as any).dataSources.query({
    data_source_id: databaseId,
  });

  return response.results.map((page: any) => {
    const props = page.properties;
    // console.log(`Mapping Project: ${props.Name?.title?.[0]?.plain_text}, Link prop:`, props.link);
    return {
      id: page.id,
      Name: props.Name?.title?.[0]?.plain_text || "",
      description: props.description?.rich_text?.map((t: any) => t.plain_text).join("") || "",
      link:
        props.link?.url ||
        props.Link?.url ||
        props.link?.rich_text?.[0]?.plain_text ||
        props.Link?.rich_text?.[0]?.plain_text ||
        "",
      image:
        props.image?.files?.map((file: any) => ({
          name: file.name,
          url: file.type === "external" ? file.external.url : file.file.url,
        })) || [],
    };
  });
};
