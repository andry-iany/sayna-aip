import type { NextPage } from "next";
import Head from "next/head";
import ProgramsComponent from "../components/Programs";

const Programs: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Programs | AIP</title>
        <meta name="description" content="Programs offered by AIP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProgramsComponent />
    </div>
  );
};

export default Programs;
