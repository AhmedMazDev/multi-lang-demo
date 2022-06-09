import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

type LangSwitcherProps = {};

const LangSwitcher: React.FC<LangSwitcherProps> = () => {
  const { locale, push, reload, pathname, asPath } = useRouter();
  const nextLocale = locale === "en" ? "ar" : "en";

  const onClick = async () => {
    await push(pathname, asPath, { locale: nextLocale });
    reload();
  };
  const text = locale === "en" ? "Arabic" : "انجليزي";

  return <Button onClick={onClick}>{text} </Button>;
};
export default LangSwitcher;
