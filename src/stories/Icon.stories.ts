import { Icon, svgs, type IconName } from '$lib';
import type { Meta, StoryObj } from '@storybook/svelte';
import Icons from './Icons.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const iconSource = Object.keys(svgs);
const meta = {
	title: 'Assets/Icons',
	component: Icon,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'아이콘 테두리의 여백 포함 유무에 따라 ic 또는 img로 분류합니다. img로 분류되더라도 특성상 여백이 포함될 수 있습니다.'
			}
		}
	},
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
