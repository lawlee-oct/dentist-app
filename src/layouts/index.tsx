import React from "react";
import { Footer, Header } from "antd/es/layout/layout";

import Content from "./content";

import { PublicLayoutStyle } from "./style";
import { Row } from "antd";

const PublicLayout: React.FC = () => {
  return (
    <PublicLayoutStyle>
      <Header>Header</Header>

      <Content />

      <Footer>Footer</Footer>
      <Row className="coppy-right">
        Copyright © 2023 By LTG, All Rights Reserved.
      </Row>
    </PublicLayoutStyle>
  );
};

export default PublicLayout;
