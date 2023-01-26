import Head from "next/head";

interface ISeoProps {
  title: string;
}

export default function Seo({ title }: ISeoProps) {
  const titleMessage = `${title} | Next display`;
  return (
    <Head>
      <title>{titleMessage}</title>
    </Head>
  );
}
