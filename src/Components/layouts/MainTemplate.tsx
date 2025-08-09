import type React from "react";
import { Menu } from "./Header";
import { Footer } from "./Footer";

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
