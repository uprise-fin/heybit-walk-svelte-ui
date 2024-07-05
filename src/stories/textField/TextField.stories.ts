import { TextField } from '$lib';
import type { Meta, StoryObj } from '@storybook/svelte';
import Slot from './Slot.svelte';

const meta = {
  title: 'Component/Input/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    value: {
      description: 'bind로 전달하면 양방향 바인딩됩니다.'
    },
    id: {
      table: {
        disable: true
      }
    },
    clearable: {
      description: '요소 안 우측의 X버튼 노출 여부를 결정합니다.'
    }
  }
} satisfies Meta<TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const basic: Story = {
  args: {}
};

export const options: Story = {
  args: {
    label: 'label',
    disabled: false,
    placeholder: 'placeholder',
    descriptions: ['descriptions'],
    required: true
  }
};

export const disabled: Story = {
  args: {
    disabled: true,
    value: 'value'
  }
};

export const readonly: Story = {
  args: {
    readonly: true,
    value: 'value'
  }
};

export const error: Story = {
  args: {
    label: 'label',
    errorMessages: ['errorMessages']
  }
};

export const withSlot = {
  parameters: {
    docs: {
      source: {
        code: null
      }
    }
  },
  render: () => ({
    Component: Slot
  })
};
