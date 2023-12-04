import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext.js";

const Paragraph = () => {
  const context = useContext(ThemeContext);

  return <p className={context.theme}>Paragraph</p>;
};

export default Paragraph;
