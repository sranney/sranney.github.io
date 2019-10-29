import styled from "styled-components";

const themeContainerBackground = ({ theme: {theme} }) => (theme === 'light' ? 'var(--color-neutral-400-alpha-6)' : 'var(--color-neutral-600-alpha-6)');

export const FlexWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderContainer = styled(FlexWrapper)`
    padding: 0 16px;
    z-index: 100000000;
`;

export const PostBody = styled.div`
    max-width: 800px;
    margin: 32px auto;
    padding: 16px 32px;
    background-color: ${themeContainerBackground};
    box-shadow: ${({ theme }) => theme === 'light' && '0 0 10px'};
    @media(max-width: 800px) {
        margin-left: 0;
        margin-right: 0;
    }
`;