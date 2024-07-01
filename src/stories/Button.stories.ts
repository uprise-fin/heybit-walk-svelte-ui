import type { Meta, StoryObj } from '@storybook/svelte';

import { sizes, themes as walkButtonThemes } from '$lib';
import Button from '$lib/Button.svelte';
import Buttons from './Buttons.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'Component/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		shape: {
			table: {
				disable: true
			}
		},
		walkButtonShapes: {
			table: {
				disable: true
			}
		},
		size: {
			table: {
				type: { summary: sizes.join(' | ') }
			},
			control: 'select',
			options: sizes
		},
		theme: {
			table: {
				type: { summary: walkButtonThemes.join(' | ') }
			},
			control: 'select',
			options: walkButtonThemes
		},
		href: {
			table: {
				disable: true
			}
		},
		target: {
			table: {
				disable: true
			}
		},
		rel: {
			table: {
				disable: true
			}
		},
		icon: {
			description: 'IconSource type',
			table: {
				type: {
					summary: '{ src: string, width: number, height: number }'
				}
			}
		},
		color: {
			table: {
				disable: true,
				type: { summary: 'string' }
			},
			control: 'color'
		}
	}
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const primary: Story = {
	args: {
		label: 'Button'
	}
};

export const loading: Story = {
	args: {
		...primary.args,
		loading: true
	}
};

export const buttons = {
	parameters: {
		docs: {
			source: {
				code: null
			}
		}
	},
	render: () => ({
		Component: Buttons
	})
};
