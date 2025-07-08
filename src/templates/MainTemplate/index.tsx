import type React from "react";
import { Menu } from "../../Components/Menu";
import { Footer } from "../../Components/Footer";

type mainTemplateProps = {
  children: React.ReactNode;
};
export function MainTemplate({ children }: mainTemplateProps) {
  return (
    <>
      <Menu />
      {children}
      <Footer />
    </>
  );
}
