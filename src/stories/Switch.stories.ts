import type { Meta, StoryObj } from '@storybook/svelte';

import Switch from '$lib/Switch.svelte';

const meta = {
	title: 'Component/Switch',
	component: Switch,
	tags: ['autodocs'],
	argTypes: {
		checked: {
			control: 'boolean'
		},
		disabled: {
			control: 'boolean'
		}
	}
} satisfies Meta<Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const basic: Story = {};

export const checked: Story = {
	args: {
		checked: true
	}
};

export const disabled: Story = {
	args: {
		disabled: true
	}
};
