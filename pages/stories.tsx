import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import StoriesComponent from "../components/Stories";
import { useTranslation } from "../hooks";

const Stories: NextPage = () => {
  const t = useTranslation();

  return (
    <div>
      <Head>
        <title>Stories | AIP</title>
        <meta name="description" content={t("meta.description_stories")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StoriesComponent />
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

export default Stories;
