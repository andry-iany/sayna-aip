import { useTranslation as useNextTranslation } from "next-i18next";

const useTranslation = () => {
  const { t } = useNextTranslation("common");
  return t;
};

export default useTranslation;
