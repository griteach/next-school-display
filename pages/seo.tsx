import Head from "next/head";

interface ISeoProps {
  title: string;
}

export default function Seo({ title }: ISeoProps) {
  return (
    <Head>
      <title>{title} | Next display</title>
    </Head>
  );
}
