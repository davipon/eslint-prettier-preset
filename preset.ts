import { NodePackageManager } from '@preset/core'

export default definePreset({
  name: 'eslint-prettier-preset',
  options: {
    package: <NodePackageManager>'npm'
  },
  postInstall: ({ hl }) => [
    `This preset has added/ updated ${hl('package.json')} & ${hl(
      '.husky'
    )} (also lock file depends on your package manager)`,
    ``,
    `These files had been extracted to your project root folder:`,
    `${hl('.eslintignore')}, ${hl('.eslintrc')}, ${hl('.lintstagedrc')}, ${hl(
      '.prettierignore'
    )}, ${hl('.prettierrc')}`,
    ``,
    `Make sure to ${hl('git add')} them before making a new commit.`,
    ``,
    `Since we activated ${hl('.husky/pre-commit')}, ${hl(
      'lint-staged'
    )} (run eslint & prettier) will be triggered after every commit.`
  ],
  handler: async (context) => {
    await extractTemplates({
      title: 'Extract config files',
			extractDotFiles: true
    })
    await installPackages({
      title: 'Installing packages',
      for: 'node',
      packages: [
        '@typescript-eslint/eslint-plugin',
        '@typescript-eslint/parser',
        'eslint',
        'eslint-config-prettier',
        'eslint-plugin-prettier',
        'husky',
        'lint-staged',
        'prettier',
        'typescript'
      ],
      packageManager: context.options.package,
      dev: true
    })
    await editFiles({
      title: 'Add "format" & "lint" to "scripts" in package.json',
      files: 'package.json',
      operations: {
        type: 'edit-json',
        replace: (json, _omit) => ({
          ...json,
          scripts: {
            ...json.scripts,
            format: 'prettier --write .',
            lint: 'prettier --check . && eslint .'
          }
        })
      }
    })
    await executeCommand({
      title: 'Activate git hook',
      command: 'npx',
      arguments: ['husky', 'install']
    })
    await executeCommand({
      title: 'Add pre-commit git hook',
      command: 'npx',
      arguments: ['husky', 'add', '.husky/pre-commit', 'npx lint-staged']
    })
  }
})
