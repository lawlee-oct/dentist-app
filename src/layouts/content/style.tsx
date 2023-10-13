import styled from "styled-components";
import { Layout } from "antd";

const { Content } = Layout;

export const ContentStyle = styled(Content)`
  margin-top: 40px;
  margin-bottom: 60px;
  min-height: calc(100% - 133px);
  color: #000000;
  padding: 0 50px;

  &.no-margin-top {
    margin-top: 0 !important;
  }
`;
