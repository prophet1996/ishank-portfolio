import React from "react";
import BackButton from "../shared/BackButton";
import { CODE_SANDBOX_SHOWCASE } from "../../constants";
import { ShowcaseWrapper } from "./_styles";

const Showcase = (props) => {
  return (
    <ShowcaseWrapper>
      <BackButton />
      {CODE_SANDBOX_SHOWCASE[0].link}
    </ShowcaseWrapper>
  );
};
export default Showcase;
