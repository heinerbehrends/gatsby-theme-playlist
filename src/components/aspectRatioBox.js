/** @jsx jsx */
import React from "react"; // eslint-disable-line no-unused-vars
import { jsx, css } from "@emotion/core";

const AspectRatioBox = ({ aspectRatio, children }) => (
  <div
    css={css`
      position: relative;
      padding-top: ${(aspectRatio) * 100}%;
      background-position: center center;
      background-repeat: no-repeat;
      /* background-attachment: fixed; */
      background-size: cover;
    `}
  >
    {children}
  </div>
);

export default AspectRatioBox;