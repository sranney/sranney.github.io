export const fontSize = ({ size }) => {
    switch (size) {
        case 'small':
            return "var(--font-size-small)";
        case 'large':
            return "var(--font-size-large)";
        default:
            return "var(--font-size-base)";
    }
};