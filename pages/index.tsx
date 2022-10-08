import type { NextPage } from "next";
import Head from "next/head";
import HomeComponent from "../components/Home";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home | AIP</title>
        <meta
          name="description"
          content="African Integration Partner homepage"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeComponent />
    </div>
  );
};

export default Home;
