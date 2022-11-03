import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import SolutionComponent from "../components/Solution";
import { useTranslation } from "../hooks";

const Solution: NextPage = () => {
  const t = useTranslation();

  return (
    <div>
      <Head>
        <title>Solution | AIP</title>
        <meta name="description" content={t("meta.description_solutions")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SolutionComponent />
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

export default Solution;
