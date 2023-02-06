# Webhookie Starter

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```
the built source will be in .output/public

Locally preview production build:

```bash
npm run preview
```

# Download Artifact
After push code on main branch, you can go to action tab, first workflow run, and download from artifact section

# Add article to blog
For creating a blog article
- pull repo (vs-code recommended)
- go to pages/Blog/article.json
- add item to json array
- upload pictures anywhere and copy picture URL to ArticlePics
- push repo
- download artifact