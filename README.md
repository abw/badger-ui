# Badger-UI

![badger-ui](public/badger-ui-2.svg)

The `badger-ui` library contains React components and corresponding
styles for rendering various user interface components.  It was
written by Andy Wardley and evolved over a number of years as he
developed web site components for various customers.

You are welcome to use it, but be warned that it is not an officially
released UI library and it comes with no warranty, no support and no
guarantees that it will be maintained in the future.  It was released
as a public NPM repository simply to make it easier for him to include
it in other projects.

## Storybook

See the [Storybook](https://abw.github.io/badger-ui/storybook-static/) for
examples of the UI components.

## Using the `badger-ui` Library

Add the `badger-ui` library to your project.

> **NOTE:**  These examples assume you're using `pnpm` but the equivalent using `npm` will also work.

```sh
cd your-project
pnpm add @abw/badger-ui
```

Then you can import `badger-ui` components into your React components.

```jsx
import { Button } from '@abw/badger-ui'

export const ShowButton = () =>
  <Button text="Hello World" color="red" solid/>
```

You will also need to import the `badger-ui` CSS file or
build your own custom stylesheet version using SASS.

### Importing CSS

To use the default CSS styles import the main CSS file into
one of the top-level files for you project:

```jsx
import '@abw/badger-ui/dist/styles/badger-ui.css'
```

### Customising Styles Using SASS

You can customise the styles using SASS.

Create your own stylesheet
and define variables to override the default values (sorry, these
aren't documented anywhere yet so you'll need to dig through the
files in `src/styles/config` and `src/styles/components` to see what
they are). Then import the `badger-ui` styles.

```scss
    // custom configuration variables
    $orange: #FF7F00;
    $alert-radius: 10px;
    $checkbox-padding: 2px 4px;

    // import badger-ui styles
    @import "@abw/badger-ui/dist/styles/badger-ui.scss";
```

You should then import this custom stylesheet into your application.

### Custom Icons

The `badger-ui` library uses a number of icons from the [Fontawesome](https://fontawesome.com/) collection.

You will almost certainly want to add further icons to this
collection, either incorporating addition Fontawesome icons
or custom SVG icons.  See the [README](./icons/README.md) file
in the [icons](./icons) directory for further information.

## Updating the `badger-ui` Library

Follow these steps if you're amending or extending the `badger-ui`
library.  These instruction are for the benefit of the author and
not intended for end users.

First install all the dependencies.

```sh
pnpm install
```

Build the library using the following command.  Output files
will be written to the `dist` directory.

```sh
pnpm build
```

Run the following command to view the [Storybook](https://storybook.js.org/) showing
examples of the components in action.

```sh
pnpm storybook
```

To check the source code for potential errors, run `eslint`
using this command.

```sh
pnpm lint
```

If you want to delete the `dist` build directory you can run
this command.

```sh
pnpm clean
```

Note that this happens automatically when you run `pnpm build`.

# Author

Andy Wardley <abw@wardley.org> 2018 to 2022
