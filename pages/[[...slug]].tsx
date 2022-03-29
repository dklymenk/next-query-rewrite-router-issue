import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';
import styles from '../styles/Home.module.css'

interface Params extends ParsedUrlQuery {
  slug: [string] | [];
}

interface Props {
  query?: string;
}

export const getStaticPaths: GetStaticPaths<Params> = () => {
  let paths: {params: Params}[] = [
    {params: {slug: []}}, 
    {params: {slug: ['query1']}}, 
    {params: {slug: ['query2']}}
  ];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = ({params}) => {
  const query = params?.slug?.[0];

  return {
    props: {...(query && {query})},
  };
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({query}) => {
  return (
    <div className={styles.container}>
      <h1>{query}</h1>

      <main className={styles.main}>
        <Link href="/">reset query</Link>
        <Link href="/?s=query1">query1</Link>
        <Link href="/?s=query2">query2</Link>
      </main>
    </div>
  )
}

export default Home
