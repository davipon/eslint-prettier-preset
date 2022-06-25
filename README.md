<h1 align="center">eslint-prettier-preset</h1>
<h3 align="center">Easily add my preset of ESLint & Prettier to a TypeScript project.</h3>

### 🛠 Usage

⚠️ Make sure your repository is initialized before you start.

```bash
# In your TS project
npx @preset/cli apply davipon/eslint-prettier-preset

# If this is your first time using @preset/cli, you'd be asked to install it first.
```

> This is not a template, but a preset to add integrations to your project.



### ⚙️ Option

Default use `npm` to install the packages.

You can also specify the package manager to use:
```bash
# npm
npx @preset/cli apply @davipon/eslint-prettier-preset --package=npm

# yarn
npx @preset/cli apply @davipon/eslint-prettier-preset --package=yarn

#pnpm
npx @preset/cli apply @davipon/eslint-prettier-preset --package=pnpm
```
