import styled from "styled-components";
import ScaleLoader from '@bit/davidhu2000.react-spinners.scale-loader';

import {fontColor} from "./mixins/themeColor";

export const StyledScaleLoader = styled(ScaleLoader)`
    color: ${fontColor};
`;