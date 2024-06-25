import type { Meta, StoryObj } from '@storybook/svelte';
import Icons from './Icons.svelte';
import { Icon, svgs, type IconName } from '$lib';

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
			description: 'ic/{타입}/{이름} 형식으로 입력합니다.',
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

export const outline = {
	parameters: {
		docs: {
			source: {
				code: null
			}
		},
		layout: 'fullscreen'
	},
	render: () => ({
		Component: Icons,
		props: {
			list: Object.keys(svgs).filter((src) => src.startsWith('ic/outline')) as IconName[]
		}
	})
};
