import '../src/lib/styles/index.scss';

declare const __VERSION__: string;

const version = __VERSION__;
console.log(`%cVersion: v${version}`, 'color: lightgreen;');

const preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	}
};

export default preview;
