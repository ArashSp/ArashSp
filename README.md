# webHookie-vue3-migrate

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

the built source will be in the dist folder

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### How to add to Document Menu

if you are Adding to an existing category just simply add

```
  <li class="pb-3">
     <a href="{{your link}}">
            {{your header here}}
     </a>
  </li>
```

if u want to add a new category u should add the code below 

```
  <li>
    <details class="btn btn-transparent rounded text-white fw-normal display-6">
      <summary>
         {{Your category Name}}
      </summary>
        <ul class="pb-1 fw-lighter display-7 noStyle text-listtext">
          <li class="py-2">
            <a href="{{your link here}}">
               {{your header here}}
            </a>
          </li>
        </ul>
    </details>
  </li>
```