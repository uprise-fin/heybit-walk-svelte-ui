export const htmlAttributeAnchorTarget = ['_self', '_blank', '_parent', '_top'] as const;
export type HTMLAttributeAnchorTarget = (typeof htmlAttributeAnchorTarget)[number];

export const sizes = ['x-small', 'small', 'medium', 'large', 'x-large'] as const;
export type Size = (typeof sizes)[number];

export const themes = ['primary', 'secondary', 'tertiary', 'text'] as const;
export type Theme = (typeof themes)[number];

export const layout = ['centered', 'fullscreen', 'padded'] as const;
export type Layout = (typeof layout)[number];

export type ButtonOption = {
	theme: Theme;
	label: string;
	disabled: boolean;
	loading: boolean;
	href: string;
	target: HTMLAttributeAnchorTarget;
	rel: string;
	handler: () => void;
};

export type IconSource = { src: string; width: string; height: string };
