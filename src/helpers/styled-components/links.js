import styled from "styled-components";
import {Link} from "react-router-dom";

import {fontColor, backgroundColor} from "./mixins/themeColor";
import {fontSize} from "./mixins/typography";

//adding some styling to the react router Link component
export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${fontColor};
    font-size: ${fontSize};
    text-decoration: none;   
`;

//styling for external links
export const StyledAnchor = styled.a`
    color: ${fontColor};

`;

export const HeaderLink = styled(StyledLink)`
    padding: .75em;        
    margin-top: 16px;    
    background-color: ${backgroundColor};
    font-size: 2rem;
    @media (max-width: 800px) {
        font-size: 1.5rem;
    }
    @media (max-width: 480px) {
        background-color: transparent;
    }
`;

export const StyledLinkBlock = styled(StyledLink)`
    display: block;
`;

export const StyledAnchorBlock = styled(StyledAnchor)`
    display: block;
`;
