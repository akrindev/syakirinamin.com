import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";

interface Books {
  readonly link: string;
  readonly title: string;
}

export default function index() {
  const books: Books[] = [
    {
      link: "/link",
      title: "linker",
    },
    {
      link: "/link",
      title: "linker",
    },
    {
      link: "/link",
      title: "linker",
    },
    {
      link: "/link",
      title: "linker",
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <div className='flex flex-col my-5 p-5'>
        <h1 className='font-extrabold text-2xl'>Blog</h1>
        <div className='text-gray-500 leading-tight'>Sharing knowledge</div>
      </div>
      <div className='mb-20 divide-y-2 divide-gray-100'>
        {books.map((book) => (
          <div
            className='flex flex-col p-4 hover:bg-gray-200 cursor-pointer'
            key={Math.random()}>
            <div className='flex'>
              <span className='px-4 py-0.5 rounded-3xl text-sm font-bold bg-rose-200 text-rose-600'>
                vue.js
              </span>
            </div>
            <Link href={book.link}>
              <h1>
                <a className='font-bold text-2xl'>{book.title}</a>
              </h1>
            </Link>
            <p className='text-gray-600 text-sm font-inter'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              aspernatur dignissimos quos quas sit velit eveniet sunt distinctio
              ipsa? Earum iusto et praesentium asperiores enim, excepturi
              tenetur accusamus eligendi facilis.
            </p>
            <div className='text-gray-400 italic font-light text-sm'>
              22 February 2012
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center py-10 text-gray-300'>
        {new Date().getFullYear()}
      </div>
    </Layout>
  );
}
