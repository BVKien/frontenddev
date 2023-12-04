import React, { useLayoutEffect, useRef } from "react";
import { useEffect, useState, memo } from "react";
import Paragraph from "./Paragraph";

const Content = () => {
  return (
    <div>
      <Paragraph />
    </div>
  );
};

export default memo(Content);
