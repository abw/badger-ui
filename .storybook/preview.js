import '../src/styles/badger-ui.scss'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        'Introduction',
        'Styles', ['Typography', 'Boxes', 'Colors', 'Breakpoints', 'Grid', 'Layout'],
        'Components', ['Fields', 'Inputs'],
        'Theming', ['Introduction'],
        'Test'
      ],
    },
  }
}
