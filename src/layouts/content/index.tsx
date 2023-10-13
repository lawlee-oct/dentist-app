import React from "react";
import { useOutlet } from "react-router-dom";

import { ContentStyle } from "./style";

const Content: React.FC = () => {
  const outlet = useOutlet();

  return <ContentStyle>{outlet}</ContentStyle>;
};

export default Content;
