import type { NextPage } from "next";
import Head from "next/head";
import StoriesComponent from "../components/Stories";

const Stories: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Stories | AIP</title>
        <meta name="description" content="Stories of AIP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StoriesComponent />
    </div>
  );
};

export default Stories;
