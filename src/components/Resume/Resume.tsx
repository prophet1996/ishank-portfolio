import React from "react";
import BackButton from "../shared/BackButton";
import { ResumeWrapper, ContactInfo, SummaryText, SkillWrapper, SkillBox } from "./_style";
import { ResumeHeading, Svg } from "../shared";
import { Theme } from '../../types';

export default (props: ResumeProps) => {

    return (
        <ResumeWrapper>
            <BackButton />
            <ResumeHeading
                heading={"Ishank Sharma"}
                underline
                bold
                size={5}
            ></ResumeHeading>
            <ResumeHeading
                heading={"Full Stack Developer"}
                underline={false}
                bold={false}
                size={2}
            ></ResumeHeading>
            <ContactInfo>
                <span> (+91) 938-055-6186</span>
                <span> ishank.web.dev@gmail.com</span>
                <a href="#!"><Svg height="25px" width="25px" name="github" />prophet1996/</a>
                <a href="#!"><Svg height="25px" width="25px" name="linkedIn" />ishank-web-dev/</a>
            </ContactInfo>

            <SummaryText>
                Experienced JavaScript Full Stack Developer
                with a demonstrated history of working in the
                Node.js and React.js. Skilled in UI/UX and a
                strong engineering professional.
            </SummaryText>

            <ResumeHeading
                heading={"Skills"}
                underline
                bold
                size={3}
            ></ResumeHeading>
            <SkillWrapper>
                <SkillBox><ResumeHeading
                    heading={"React.js / Redux.js"}
                    underline={false}
                    bold
                    size={2}
                ></ResumeHeading>
                    <SummaryText size={'s'}>
                        UI/UX experience with
                        focus on performance optimizations.
                </SummaryText>
                </SkillBox>
                <SkillBox>
                    <ResumeHeading
                        heading={"Node"}
                        underline={false}
                        bold
                        size={2}
                    ></ResumeHeading>
                    <SummaryText size={'s'}>
                        Server Side Development with
                        advanced profiling, debugging and web
                        server scaling.
                    </SummaryText>
                </SkillBox>
                <SkillBox>
                    <ResumeHeading
                        heading={"MongoDb"}
                        underline={false}
                        bold
                        size={2}
                    ></ResumeHeading>

                    <SummaryText size={'s'}>
                        Server Side Development with
                        advanced profiling, debugging and web
                        server scaling.
                    </SummaryText>

                </SkillBox>
                <SkillBox>
                    <ResumeHeading
                        heading={"HTML/CSS/JS"}
                        underline={false}
                        bold
                        size={2}
                    ></ResumeHeading>

                    <SummaryText size={'s'}>
                        ES6 expert, deep
                        understanding of Semantic HTML. Experienced
                        in CSS3 Grid/FlexBox and canvas
                        animations.
                    </SummaryText>

                </SkillBox>

            </SkillWrapper>
        </ResumeWrapper>
    );
};

type ResumeProps = { theme: Theme };
