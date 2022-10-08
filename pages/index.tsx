import type { NextPage } from "next";
import Head from "next/head";
import TopNavbar from "../components/TopNavbar";

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
      <TopNavbar />
      <main>hello world</main>
    </div>
  );
};

export default Home;
