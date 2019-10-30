//reusable mixins for color themes
export const fontColor = ({ theme: { theme } }) => theme === 'dark' ? 'var(--color-neutral-0)' : 'var(--color-primary-800)';
export const backgroundColor = ({ theme: { theme } }) => theme === 'light' ? 'var(--color-neutral-200-alpha-6)' : 'var(--color-neutral-600-alpha-6)';
