import { Icon, sizes, svgs, type IconName } from '$lib';
import type { Meta, StoryObj } from '@storybook/svelte';
import Icons from './Icons.svelte';
import Size from './Size.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const iconSource = Object.keys(svgs);
const meta = {
  title: 'Assets/Icon',
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
        type: { summary: sizes.join(' | ') }
      },
      options: sizes,
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

export const size = {
  parameters: {
    docs: {
      source: {
        code: null
      }
    }
  },
  render: () => ({
    Component: Size
  })
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

export const ic_fill = {
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
      list: Object.keys(svgs).filter((src) => src.startsWith('ic/fill')) as IconName[]
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
