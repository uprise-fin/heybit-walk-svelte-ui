# heybit walk svelte ui

✨ https://uprise-fin.github.io/heybit-walk-svelte-ui ✨

## Getting Started

### Install

```bash
pnpm add -D heybit-walk-svelte-ui sass
```

### Import CSS

**src/routes/+layout.svelte**

```javascript
import 'heybit-walk-svelte-ui/styles/index.scss';
```

### Basic usage

**src/routes/+page.svelte**

```javascript
import { Button } from 'heybit-walk-svelte-ui';
```

```html
<button on:click={() => alert('Hello World!')}>Button</button>
```
