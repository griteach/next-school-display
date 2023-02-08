import { AppProps } from "next/app";
import Head from "next/head";
import Seo from "./seo";

interface ILayoutProps {
  children: any;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen ">
        {children}
      </div>
    </>
  );
}
