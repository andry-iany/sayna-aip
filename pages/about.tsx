import type { NextPage } from "next";
import Head from "next/head";
import AboutComponent from "../components/About";

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>A Propos | AIP</title>
        <meta
          name="description"
          content="A propos de African Integration Partner"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutComponent />
    </div>
  );
};

export default About;
