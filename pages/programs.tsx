import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { createContext } from "react";
import ProgramsComponent from "../components/Programs";
import { useTranslation } from "../hooks";
import api from "../services/apiService";

export const ContentContext = createContext({});

const Programs: NextPage = (props: any) => {
  const t = useTranslation();

  console.log(props["data"]);

  return (
    <div>
      <Head>
        <title>Programs | AIP</title>
        <meta name="description" content={t("meta.description_programs")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentContext.Provider value={props["data"]}>
        <ProgramsComponent />
      </ContentContext.Provider>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale = "fr" } = context;

  const localizedData = await serverSideTranslations(locale, ["common"]);

  const programContentRes = await api.get<any>(
    `/programme?populate=deep&locale=${locale}`
  );

  const programContent = programContentRes.data?.data?.attributes;

  return {
    props: {
      ...localizedData,
      data: programContent,
    },
  };
};

export default Programs;
