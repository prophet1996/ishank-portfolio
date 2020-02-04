import React from "react";
import BackButton from "../shared/BackButton";
import { CODE_SANDBOX_SHOWCASE } from "../../constants";
import styled from "styled-components";

const ShowcaseWrapper = styled.div`
  display: flex;
  & > iframe {
  }
`;

const Showcase = props => {
  return (
    <ShowcaseWrapper>
      <BackButton />
      Showcase Page
      {CODE_SANDBOX_SHOWCASE[0].link}
    </ShowcaseWrapper>
  );
};
export default Showcase;
