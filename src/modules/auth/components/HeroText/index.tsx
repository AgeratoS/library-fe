import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

const HeroHelperSpan = styled('span')`
    font-family: Poppins;
    font-weight: 400;
    size: 40px;
`;

function HeroText(props: PropsWithChildren) {

    const { children } = props;

    return (
        <HeroHelperSpan>{children}</HeroHelperSpan>
    );
}

export default HeroText;