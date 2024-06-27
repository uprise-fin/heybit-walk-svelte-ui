import { Icon, svgs, type IconName } from '$lib';
import type { Meta, StoryObj } from '@storybook/svelte';
import Icons from './Icons.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const iconSource = Object.keys(svgs);
const meta = {
	title: 'Assets/Icons',
	component: Icon,
	tags: ['autodocs'],
	argTypes: {
		size: {
			table: {
				disable: true,
				type: { summary: 'small 18*18 | medium 24*24 | large 32*32' }
			},
			options: ['small', 'medium', 'large'],
			control: { type: 'select' }
		},
		color: {
			description: '디자인 토큰 사용을 권장합니다.',
			control: { type: 'color' }
		},
		src: {
			table: {
				type: { summary: 'string' }
			},
			options: iconSource,
			control: { type: 'select' }
		}
	}
} satisfies Meta<Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	args: {
		src: 'ic/outline/arrow-right'
	}
};

export const img_fill = {
	parameters: {
		docs: {
			source: {
				code: null
			}
		}
	},
	render: () => ({
		Component: Icons,
		props: {
			list: Object.keys(svgs).filter((src) => src.startsWith('img/fill')) as IconName[]
		}
	})
};

export const ic_outline = {
	parameters: {
		docs: {
			source: {
				code: null
			}
		}
	},
	render: () => ({
		Component: Icons,
		props: {
			list: Object.keys(svgs).filter((src) => src.startsWith('ic/outline')) as IconName[]
		}
	})
};
