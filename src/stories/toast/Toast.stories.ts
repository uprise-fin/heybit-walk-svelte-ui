import type { Meta } from '@storybook/svelte';

import { Toast } from '$lib';
import Example from './Example.svelte';

const meta = {
	title: 'Component/Toast',
	component: Toast,
	tags: ['autodocs'],
	argTypes: {
		delay: {
			description: 'ms 단위이며 노출되는 시간을 결정합니다.'
		}
	},
	parameters: {
		docs: {
			description: {
				component:
					'+layout.svelte에 Toast 컴포넌트를 넣고 showToast(message, duration?) 함수를 호출하여 사용합니다.'
			}
		}
	}
} satisfies Meta<Toast>;

export default meta;

export const example = {
	parameters: {
		docs: {
			source: {
				code: null
			}
		}
	},
	render: () => ({
		Component: Example
	})
};
