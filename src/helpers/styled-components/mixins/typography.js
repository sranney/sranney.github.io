export const fontSize = ({ size }) => {
    if(size) {
        return `var(--font-size-${size})`;
    } else {
        return "var(--font-size-base)";
    }
    
};