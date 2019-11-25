import styled from 'styled-components';
import { animated } from "react-spring";

import {fontColor, overlayBackgroundColor} from './mixins/themeColor';
import { fontSize } from './mixins/typography';
import { PointerCursor } from './mixins/cursors';

const Expandable = styled.div`
    color: ${fontColor};
    cursor: ${PointerCursor};
`;

export const ExpandableHeader = styled(Expandable)`
    font-size: ${fontSize};
    position: relative;
`;

export const ExpandableSectionHeader = styled(ExpandableHeader)`
    border-top: 2px solid ${fontColor};
`;

export const ExpandableProjectHeader = styled(ExpandableHeader)`
    font-style: italic;
`;

export const ExpandableBody = animated(styled(Expandable)`
    overflow-y: hidden;
    background-color: ${overlayBackgroundColor};
    cursor: auto;
`);

export const ExpandableParentBody = animated(styled(ExpandableBody)`
    background-color: transparent;
`);
