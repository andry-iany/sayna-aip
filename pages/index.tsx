import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import HomeComponent from "../components/Home";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "../hooks";

const Home: NextPage = () => {
  const t = useTranslation();

  return (
    <div>
      <Head>
        <title>Home | AIP</title>
        <meta name="description" content={t("meta.description_home")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeComponent />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale = "fr" } = context;

  const localizedData = await serverSideTranslations(locale, ["common"]);

  return {
    props: {
      ...localizedData,
    },
  };
};

export default Home;
