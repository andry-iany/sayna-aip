import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import HomeComponent from "../components/Home";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "../hooks";
import api from "../services/apiService";
import { createContext } from "react";
import { Blog } from "../components/Stories/Blog";

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

  const homeContentRes = await api.get<any>(
    `/home?populate=deep&locale=${locale}`
  );
  const homeContent = homeContentRes.data?.data?.attributes;

  const blogsRes = await api.get<any>(
    `/articles?populate=deep&locale=${locale}&sort=updatedAt:desc&pagination[limit]=3`
  );
  const blogs = blogsRes.data?.data?.map((blog: any) => ({
    createdAt: blog.attributes?.createdAt,
    id: blog.id,
    img: blog.attributes?.image?.data?.attributes?.url ?? "",
    title: blog.attributes?.title ?? "",
  }));

  return {
    props: {
      ...localizedData,
      data: { ...homeContent, blogs },
    },
  };
};

export default Home;
