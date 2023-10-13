import { Layout } from "antd";
import styled, { css } from "styled-components";

import { FOOTER_IMAGE } from "src/assets/images";

import ResponsiveUI, { SIZE, SIZEH } from "src/constants/responsive";

const navBarResponsive = css`
  ${ResponsiveUI.lessThanH(SIZEH.PAD3)} {
    content: "PAD3";
    ${ResponsiveUI.lessThan(SIZE.XXL2)} {
      content: "PAD3 - XXL2";
    }
    ${ResponsiveUI.lessThan(SIZE.XXL)} {
      content: "PAD3 - XXL";
    }
    ${ResponsiveUI.lessThan(SIZE.XL2)} {
      content: "PAD3 - XL2";
    }
    ${ResponsiveUI.lessThan(SIZE.XL1)} {
      content: "PAD3 - XL1";
    }
    ${ResponsiveUI.lessThan(SIZE.XL)} {
      content: "PAD3 - XL";
    }
    ${ResponsiveUI.lessThan(SIZE.LG)} {
      content: "PAD3 - LG";
    }
    ${ResponsiveUI.lessThan(SIZE.MD)} {
      content: "PAD3 - MD";
    }
    ${ResponsiveUI.lessThan(SIZE.SM)} {
      content: "PAD3 - SM";
    }
    ${ResponsiveUI.lessThan(SIZE.XS)} {
      content: "PAD3 - XS";
    }
  }
  ${ResponsiveUI.lessThanH(SIZEH.PAD2)} {
    content: "PAD2";
    ${ResponsiveUI.lessThan(SIZE.XXL2)} {
      content: "PAD2 - XXL2";
    }
    ${ResponsiveUI.lessThan(SIZE.XXL)} {
      content: "PAD2 - XXL";
    }
    ${ResponsiveUI.lessThan(SIZE.XL2)} {
      content: "PAD2 - XL2";
    }
    ${ResponsiveUI.lessThan(SIZE.XL1)} {
      content: "PAD2 - XL1";
    }
    ${ResponsiveUI.lessThan(SIZE.XL)} {
      content: "PAD2 - XL";
    }
    ${ResponsiveUI.lessThan(SIZE.LG)} {
      content: "PAD2 - LG";
    }
    ${ResponsiveUI.lessThan(SIZE.MD)} {
      content: "PAD2 - MD";
    }
    ${ResponsiveUI.lessThan(SIZE.SM)} {
      content: "PAD2 - SM";
    }
    ${ResponsiveUI.lessThan(SIZE.XS)} {
      content: "PAD2 - XS";
    }
  }
  ${ResponsiveUI.lessThanH(SIZEH.PAD1)} {
    content: "PAD1";
    ${ResponsiveUI.lessThan(SIZE.XXL2)} {
      content: "PAD1 - XXL2";
    }
    ${ResponsiveUI.lessThan(SIZE.XXL)} {
      content: "PAD1 - XXL";
    }
    ${ResponsiveUI.lessThan(SIZE.XL2)} {
      content: "PAD1 - XL2";
    }
    ${ResponsiveUI.lessThan(SIZE.XL1)} {
      content: "PAD1 - XL1";
    }
    ${ResponsiveUI.lessThan(SIZE.XL)} {
      content: "PAD1 - XL";
    }
    ${ResponsiveUI.lessThan(SIZE.LG)} {
      content: "PAD1 - LG";
    }
    ${ResponsiveUI.lessThan(SIZE.MD)} {
      content: "PAD1 - MD";
    }
    ${ResponsiveUI.lessThan(SIZE.SM)} {
    }
    ${ResponsiveUI.lessThan(SIZE.XS)} {
      content: "PAD1 - XS";
    }
  }
  ${ResponsiveUI.lessThanH(SIZEH.MAC16)} {
    content: "MAC16";
    ${ResponsiveUI.lessThan(SIZE.XXL2)} {
      content: "MAC16 - XXL2";
    }
    ${ResponsiveUI.lessThan(SIZE.XXL)} {
      content: "MAC16 - XXL";
    }
    ${ResponsiveUI.lessThan(SIZE.XL2)} {
      content: "MAC16 - XL2";
    }
    ${ResponsiveUI.lessThan(SIZE.XL1)} {
      content: "MAC16 - XL1";
    }
    ${ResponsiveUI.lessThan(SIZE.XL)} {
      content: "MAC16 - XL";
    }
    ${ResponsiveUI.lessThan(SIZE.LG)} {
      content: "MAC16 - LG";
    }
    ${ResponsiveUI.lessThan(SIZE.MD)} {
      content: "MAC16 - MD";
    }
    ${ResponsiveUI.lessThan(SIZE.SM)} {
      content: "MAC16 - SM";
    }
    ${ResponsiveUI.lessThan(SIZE.XS)} {
      content: "MAC16 - XS";
    }
  }
  ${ResponsiveUI.lessThanH(SIZEH.MAC14)} {
    content: "MAC14";
    ${ResponsiveUI.lessThan(SIZE.XXL2)} {
      content: "MAC14 - XXL2";
    }
    ${ResponsiveUI.lessThan(SIZE.XXL)} {
      content: "MAC14 - XXL";
    }
    ${ResponsiveUI.lessThan(SIZE.XL2)} {
      content: "MAC14 - XL2";
    }
    ${ResponsiveUI.lessThan(SIZE.XL1)} {
      content: "MAC14 - XL1";
    }
    ${ResponsiveUI.lessThan(SIZE.XL)} {
      content: "MAC14 - XL";
    }
    ${ResponsiveUI.lessThan(SIZE.LG)} {
      content: "MAC14 - LG";
    }
    ${ResponsiveUI.lessThan(SIZE.MD)} {
      content: "MAC14 - MD";
    }
    ${ResponsiveUI.lessThan(SIZE.SM)} {
      content: "MAC14 - SM";
    }
    ${ResponsiveUI.lessThan(SIZE.XS)} {
      content: "MAC14 - XS";
    }
  }
  ${ResponsiveUI.lessThanH(SIZEH.MAC13)} {
    content: "MAC13";
    ${ResponsiveUI.lessThan(SIZE.XXL2)} {
      content: "MAC13 - XXL2";
    }
    ${ResponsiveUI.lessThan(SIZE.XXL)} {
      content: "MAC13 - XXL";
    }
    ${ResponsiveUI.lessThan(SIZE.XL2)} {
      content: "MAC13 - XL2";
    }
    ${ResponsiveUI.lessThan(SIZE.XL1)} {
      content: "MAC13 - XL1";
    }
    ${ResponsiveUI.lessThan(SIZE.XL)} {
      content: "MAC13 - XL";
    }
    ${ResponsiveUI.lessThan(SIZE.LG)} {
      content: "MAC13 - LG";
    }
    ${ResponsiveUI.lessThan(SIZE.MD)} {
      content: "MAC13 - MD";
    }
    ${ResponsiveUI.lessThan(SIZE.SM)} {
      content: "MAC13 - SM";
    }
    ${ResponsiveUI.lessThan(SIZE.XS)} {
      content: "MAC13 - XS";
    }
  }
`;

export const PublicLayoutStyle = styled(Layout)`
  min-height: 100vh;
  background: transparent;

  .ant-layout-header {
    border-bottom: 1px solid;
    background-color: #ffffff;
  }

  .ant-layout-content {
    background-color: #ffffff;
  }

  .ant-layout-footer {
    background-image: url(${FOOTER_IMAGE});
    background-repeat: repeat;
    background-position: center center;
    background-size: auto;
    background-attachment: scroll;
    color: #ffffff;
  }

  .coppy-right {
    background-color: rgb(37, 45, 60);
    height: 70px;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: normal;
    font-family: Mulish, sans-serif;
    line-height: 1.5;
  }

  ${navBarResponsive}
`;
