import { layout } from '$lib';
import Modal from '$lib/Modal.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: 'Component/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    open: {
      description: 'bind로 전달하면 양방향 바인딩됩니다.'
    },
    toast: {
      description: 'toast 모드로 노출합니다.'
    },
    keepDialog: {
      description: 'X(닫기) 버튼이나 외부 영역 클릭 시 dialog 요소를 닫지 않습니다.'
    },
    footers: {
      description:
        '하단 버튼 영역을 정의합니다. handler prop으로 이벤트를 전달합니다. 빈 배열로 전달하면 영역이 노출되지 않습니다.',
      table: {
        type: {
          summary: 'string[] | undefined'
        }
      }
    },
    isVerticalLayout: {
      description: '하단 버튼 영역의 레이아웃을 결정합니다. 기본은 가로 배열(수평)입니다.'
    },
    layout: {
      table: {
        type: {
          summary: layout.join(' | ')
        }
      },
      control: 'select',
      options: layout
    },
    showCloseButton: {
      // description: 'layout이 fullscreen인 경우에는 기본 값이 false입니다.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: 'true' }
      }
    },
    background: {
      table: {
        type: {
          summary: 'string'
        }
      },
      control: 'color'
    },
    icon: {
      description: 'IconSource type',
      table: {
        type: {
          summary: '{ src: string, width: number, height: number }'
        }
      }
    },
    class: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      story: {
        height: '400px'
      }
    },
    layout: 'fullscreen'
  }
} satisfies Meta<Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const basic: Story = {
  args: {
    open: true,
    title: '發生未知錯誤。',
    content:
      '如果問題持續存在，請不要猶豫，立即聯繫我們的客戶服務中心。 我們的專業團隊隨時準備幫助您解決任何問題，確保您獲得最佳的使用體驗。',
    footers: [
      {
        label: '聯繫我們',
        theme: 'secondary',
        handler: () => alert('Clicked')
      },
      {
        label: '確認',
        handler: () => alert('Clicked')
      }
    ]
  }
};

export const fullscreen = {
  args: {
    ...basic.args,
    layout: 'fullscreen'
  }
};
