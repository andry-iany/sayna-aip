import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import ContactComponent from "../components/Contact";
import { useTranslation } from "../hooks";

const Contact: NextPage = () => {
  const t = useTranslation();

  return (
    <div>
      <Head>
        <title>Contact | AIP</title>
        <meta name="description" content={t("meta.description_contact")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContactComponent />
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

export default Contact;
