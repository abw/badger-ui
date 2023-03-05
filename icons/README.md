# Icons

The files in this directory are used to generate a custom icon library using
icons from the free [Fontawesome](https://fontawesome.com/) collection.  This
is used by the `Icon` component to render icons and by various other components
(e.g. `Alert`, `Button`, `Checkbox`, etc) which include icons.

Fontawesome has 3 free sets: the `solid` icons, the `regular` icons (which
more accurately should be called the `outline` icons) and the `brands`.
Icons can be included from either of those sets.

It is also possible to add custom SVG icons that will be included in the
generated icon library.

The `badger-ui` library defines its own small set of core icons.  You can
extend this with additional icons for other projects which use the `badger-ui`
library.

As of March 2023, the icons library is built using the
[svg-icon-librarian](https://www.npmjs.com/package/@abw/svg-icon-librarian).

See the documentation for that module to understand how everything works.

## Configuration File

The `config.yaml` file defines the icons that should be included in the icon
library.

### Solid and Regular Icons

The `solid` and `regular` configuration items should list the names of the icons
from the solid and regular sets which should be included.

```yaml
sets:
  solid:
    - arrow-up
    - arrow-down
  regular:
    - check-circle
    - check-square
```

### Custom Icons

You can add custom SVG icons by adding them to the `custom` directory.

Each of the files in the `custom` directory will be added as an icon
using the filename (without the `.svg` extension) as the name for the
icon.

### Icon Aliases

There is also an `icons` mapping in the configuration file which allows
you to create aliases to other icons.  For example, you can create `warning`
as an alias for the `exclamation-triangle` icon in the `solid` set.  This
is ideal for forgetful people who can't remember long names like
`exclamation-triangle` and for lazy people who can't be bothered to type them.

Aliases are also useful for "semantic" naming.  For example, you could define
the `portfolio` icon as an alias to the `briefcase` icon in the solid set.

```yaml
alias:
  portfolio: solid:briefcase
```

If at some point in the future you decide to use a different icon to
represent portfolios then you only need to update the alias here and
then all references to the `portfolio` icon in your code will result
in the new icon being used.

There's another reason why aliases are awesome.  That's because they
eliminate the need to specify which icons have come from the `regular`
icon set.  When you're including an icon using the `Icon` component you
can specify the name of a `solid` icon or an alias to an icon using just the
`name` property.

```jsx
<Icon name="arrow-up"/>   // solid icon
<Icon name="warning"/>    // icon alias
```

## Build Script

In the `badger-ui` library you can rebuild the icons library as:

```sh
pnpm icons
```

### Adding More Icons to Your Project

The `badger-ui` library only defines a small core set of icons that are used by
the `badger-ui` components.  When you incorporate the `badger-ui` library into another
project you can use the same script to add further icons that are specific
to your project.

See the documentation for
[svg-icon-librarian](https://www.npmjs.com/package/@abw/svg-icon-librarian)
for further details.

