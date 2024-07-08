import type { Meta, StoryObj } from '@storybook/svelte';

import Checkbox from '$lib/input/Checkbox.svelte';

const meta = {
  title: 'Component/Input/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean'
    }
  }
} satisfies Meta<Checkbox>;

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
