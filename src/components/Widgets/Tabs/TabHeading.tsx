import React from "react";
import { TabHeadingWrapper, TabHeading } from "./styles";

export default ({
  currentTabIndex,
  data,
  onTabClick,
  className
}: {
  currentTabIndex: string;
  data: string[];
  onTabClick:(index:string)=>void;
  className?:string;
}) => {

  return (
    <TabHeadingWrapper className={className} >
      {data.map((heading, index) => (
        <TabHeading currentTabIndex={currentTabIndex} key={index}  id={index.toString()} onClick={(e:any)=>onTabClick(e.target.id)}>
          {heading}
        </TabHeading>
     ))}
    </TabHeadingWrapper>
  );
};
