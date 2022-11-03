import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import ProgramsComponent from "../components/Programs";
import { useTranslation } from "../hooks";

const Programs: NextPage = () => {
  const t = useTranslation();

  return (
    <div>
      <Head>
        <title>Programs | AIP</title>
        <meta name="description" content={t("meta.description_programs")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProgramsComponent />
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

export default Programs;
