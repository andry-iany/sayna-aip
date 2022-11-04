import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { createContext, useContext } from "react";
import AboutComponent from "../components/About";
import { useTranslation } from "../hooks";
import api from "../services/apiService";

export const ContentContext = createContext({});

const About: NextPage = (props: any) => {
  const t = useTranslation();

  console.log(props["data"]);

  return (
    <div>
      <Head>
        <title>A Propos | AIP</title>
        <meta name="description" content={t("meta.description_about")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentContext.Provider value={props["data"]}>
        <AboutComponent />
      </ContentContext.Provider>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale = "fr" } = context;

  const localizedData = await serverSideTranslations(locale, ["common"]);

  const aboutContentRes = await api.get<any>(
    `/about?populate=deep&locale=${locale}`
  );

  const aboutContent = aboutContentRes.data?.data?.attributes;

  return {
    props: {
      ...localizedData,
      data: aboutContent,
    },
  };
};

export default About;
