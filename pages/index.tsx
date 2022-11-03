import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import HomeComponent from "../components/Home";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "../hooks";
import api from "../services/apiService";
import { createContext } from "react";

export const ContentContext = createContext({});

const Home: NextPage = (props: any) => {
  const t = useTranslation();

  return (
    <div>
      <Head>
        <title>Home | AIP</title>
        <meta name="description" content={t("meta.description_home")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentContext.Provider value={props["data"]}>
        <HomeComponent />
      </ContentContext.Provider>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale = "fr" } = context;

  const localizedData = await serverSideTranslations(locale, ["common"]);

  const res = await api.get<any>(`/home?populate=deep&locale=${locale}`);
  const data = res.data?.data?.attributes;

  return {
    props: {
      ...localizedData,
      data,
    },
  };
};

export default Home;
