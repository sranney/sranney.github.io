export const fontSize = ({ size }) => {
    if(size) {
        return `var(--font-size-${size})`;
    }
    return "var(--font-size-base)";
};