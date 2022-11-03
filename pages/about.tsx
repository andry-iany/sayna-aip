import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import AboutComponent from "../components/About";
import { useTranslation } from "../hooks";

const About: NextPage = () => {
  const t = useTranslation();

  return (
    <div>
      <Head>
        <title>A Propos | AIP</title>
        <meta name="description" content={t("meta.description_about")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutComponent />
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

export default About;
