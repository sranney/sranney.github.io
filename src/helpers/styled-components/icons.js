import styled from 'styled-components';
import CloseIcon from '../icons/icon-x.svg';
import MenuIcon from '../icons/icon-menu.svg';
import { PointerCursor } from "../../helpers/styled-components/mixins/cursors";
import {fontColor} from './mixins/themeColor';

export const ToggleIcon = styled.span`
    position: absolute;
    top: 50%;
    font-size: 24px;
`;

export const ToggleIconFalse = styled(ToggleIcon)`
    right: 0%;
`;

export const StyledCloseIcon = styled(CloseIcon)`
    fill: var(--color-danger-800);
`;

export const StyledModalCloseIcon = styled(CloseIcon)`
    position: absolute;
    right: 5%;
    top: 2%;
    fontsize: var(--font-size-xxlarge);
    fill: ${fontColor};
    fontweight: bold;
    cursor: ${PointerCursor};
`;

export const StyledMenuIcon = styled(MenuIcon)`
    fill: ${fontColor};
`;