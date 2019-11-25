import styled from 'styled-components';
import { boxShadow } from './mixins/content';
import { backgroundColor } from './mixins/themeColor';

const PostGeneral = styled.div`
    max-width: 800px;
    margin: 32px auto;
    padding: 16px 32px;
    background-color: ${backgroundColor};
    box-shadow: ${boxShadow};
`;

export const PostBody = styled(PostGeneral)`
    position: relative;
    @media(max-width: 800px) {
        margin-left: 0;
        margin-right: 0;
        margin-bottom: 0;
    }
    @media(max-width: 480px) {
        margin-top: 0;
    }
`;

export const PostCard = styled(PostGeneral)`
    width: 30%;
    padding: 50px 25px 75px;
    text-align: center;
    transition: transform 0.3s;
    &:hover {
        transform: scale(1.1);
    }
    @media(max-width: 800px) {
        min-height: 0;
        width: 100%;
        margin: 12px 0 0 0;
    }
`;

export const PostSearch = styled(PostBody)`
    padding: 32px;
`;