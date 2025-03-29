import { ReactNode } from "react";
import Header from "../Header/Header";
import PageWrapper from "../PageWrapper/PageWrapper";
import Footer from "../Footer/Footer";

const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />

      <PageWrapper>{children}</PageWrapper>

      <Footer />
    </>
  );
};

export default PageLayout;
