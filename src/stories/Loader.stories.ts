import type { Meta, StoryObj } from '@storybook/svelte';

import Loader from '$lib/Loader.svelte';

const meta = {
  title: 'Component/Loader',
  component: Loader,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'color'
    },
    background: {
      control: 'color'
    }
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#dee0e2' }]
    }
  }
} satisfies Meta<Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const basic: Story = {};

export const background: Story = {
  args: {
    background: 'var(--walk__black)'
  }
};
