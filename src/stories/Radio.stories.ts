import type { Meta, StoryObj } from '@storybook/svelte';

import Radio from '$lib/input/Radio.svelte';

const meta = {
  title: 'Component/Input/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    }
  }
} satisfies Meta<Radio>;

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
