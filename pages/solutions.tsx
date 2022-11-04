import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { createContext } from "react";
import SolutionComponent from "../components/Solution";
import { useTranslation } from "../hooks";
import api from "../services/apiService";

export const ContentContext = createContext({});

const Solution: NextPage = (props: any) => {
  const t = useTranslation();

  console.log(props["data"]);

  return (
    <div>
      <Head>
        <title>Solution | AIP</title>
        <meta name="description" content={t("meta.description_solutions")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentContext.Provider value={props["data"]}>
        <SolutionComponent />
      </ContentContext.Provider>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale = "fr" } = context;

  const localizedData = await serverSideTranslations(locale, ["common"]);
  const aboutContentRes = await api.get<any>(
    `/solution?populate=deep&locale=${locale}`
  );

  const aboutContent = aboutContentRes.data?.data?.attributes;

  return {
    props: {
      ...localizedData,
      data: aboutContent,
    },
  };
};

export default Solution;
