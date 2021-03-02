
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
}

export const getPosts = async <Posts>(): Promise<Posts> => {
return await fetch(
`https://notion-api.splitbee.io/v1/table/9c5d8f90ad5f46b1907d9bc391dd24b9`
).then((res) => res.json());
};
export const getPostPage = async (id: string): Promise<BlockMapType> => {
return await fetch(
`https://notion-api.splitbee.io/v1/page/${id}`
).then((res) => res.json());
};
