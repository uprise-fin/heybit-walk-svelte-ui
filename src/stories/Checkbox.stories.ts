import type { Meta, StoryObj } from '@storybook/svelte';

import Checkbox from '$lib/form/Checkbox.svelte';

const meta = {
  title: 'Component/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean'
    },
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
