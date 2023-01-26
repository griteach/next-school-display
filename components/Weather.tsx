import { IGetDustResult } from "@/modules/typeDefinition";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";
import TitleComponent from "./TitleComponent";

export default function WeatherComponent({ response }: IGetDustResult) {
  return (
    <>
      <div className="bg-white rounded-tl-lg">
        <TitleComponent title="미세먼지" />
      </div>
      <ul></ul>
    </>
  );
}
