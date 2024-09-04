export const htmlAttributeAnchorTarget = ['_self', '_blank', '_parent', '_top'] as const;
export type HTMLAttributeAnchorTarget = (typeof htmlAttributeAnchorTarget)[number];

export const shape = ['rounded'] as const;
export type Shape = (typeof shape)[number];

export const sizes = ['x-small', 'small', 'medium', 'large', 'x-large'] as const;
export type Size = (typeof sizes)[number];

export const themes = ['primary', 'secondary', 'tertiary', 'text'] as const;
export type Theme = (typeof themes)[number];

export const layout = ['centered', 'fullscreen', 'padded'] as const;
export type Layout = (typeof layout)[number];

export type ButtonOption = {
  type: 'button' | 'submit' | 'reset';
  shape: Shape;
  size: Size;
  theme: Theme;
  label: string;
  loading: boolean;
  disabled: boolean;
  href: string;
  target: HTMLAttributeAnchorTarget;
  rel: string;
  icon: IconSource;
  color: string;
  background: string[] | string;
  handler: () => void;
};

export type IconSource = { src: string; width: number; height: number };
