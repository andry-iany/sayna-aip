import { ReactNode } from "react";
import Footer from "../Footer";
import TopNavbar from "../TopNavbar";

type Props = {
  children: ReactNode;
};

const Layout = (props: Props) => {
  const { children } = props;

  return (
    <>
      <TopNavbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
