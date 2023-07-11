export interface Img {
  name: string;
  url: string;
}

export interface Posts {
  id: string;
  title: string;
  slug: string;
  published: true | false;
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

export interface Img {
  name: string;
  url: string;
  rawUrl: string;
}

export const getPosts = async <Posts>(): Promise<Posts> => {
  return await fetch(
    `https://notion-api.splitbee.io/v1/table/9c5d8f90ad5f46b1907d9bc391dd24b9`
  ).then((res) => res.json());
};

export const getProjects = async (): Promise<Project[]> => {
  return await fetch(
    `https://notion-api.splitbee.io/v1/table/c31313219755407fa446d178459cd848`
  ).then((res) => res.json());
};
