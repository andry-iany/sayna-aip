import type { NextPage } from "next";
import Head from "next/head";
import SolutionComponent from "../components/Solution";

const Solution: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Solution | AIP</title>
        <meta name="description" content="Our services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SolutionComponent />
    </div>
  );
};

export default Solution;
