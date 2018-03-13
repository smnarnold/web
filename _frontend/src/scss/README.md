# Sass Guidelines

based on the [7-1 Pattern](https://sass-guidelin.es/#the-7-1-pattern) 
from [Sass Guidelines](https://sass-guidelin.es/)

ref: _frontend/src/scss


## Import Order

~~~~
1. /vendors/bootstrap/_variables.scss
2. /abstracts/_variables.scss
3. /abstracts/**/*.scss
4. /vendors/bootstrap/mixins/*.scss
5. /vendors/bootstrap/_normalize.scss
6. /vendors/bootstrap/_reboot.scss
7. /vendors/**/*.scss
8. /**/*.scss
~~~~

ref: _frontend/src/main.scss


## Architecture

### Abstracts folder
> The abstracts/ folder gathers all Sass tools and helpers used across the project. Every global variable, function, mixin and placeholder should be put in here.
> The rule of thumb for this folder is that it should not output a single line of CSS when compiled on its own. These are nothing but Sass helpers.
> When working on a very large project with a lot of abstract utilities, it might be interesting to group them by topic rather than type, for instance typography (_typography.scss), theming (_theming.scss), etc. Each file contains all the related helpers: variables, functions, mixins and placeholders. Doing so can make the code easier to browse and maintain, especially when files are getting very long.

### Base folder
>  The base/ folder holds what we might call the boilerplate code for the project. In there, you might find the reset file, some typographic rules, and probably a stylesheet defining some standard styles for commonly used HTML elements (that I like to call _base.scss).

### Components folder
> For smaller components, there is the components/ folder. While layout/ is macro (defining the global wireframe), components/ is more focused on widgets. It contains all kind of specific modules like a slider, a loader, a widget, and basically anything along those lines. There are usually a lot of files in components/ since the whole site/application should be mostly composed of tiny modules.

### Layout folder
> The layout/ folder contains everything that takes part in laying out the site or application. This folder could have stylesheets for the main parts of the site (header, footer, navigation, sidebar…), the grid system or even CSS styles for all the forms.

### Pages folder
> If you have page-specific styles, it is better to put them in a pages/ folder, in a file named after the page. For instance, it’s not uncommon to have very specific styles for the home page hence the need for a _home.scss file in pages/.

### Themes folder
> On large sites and applications, it is not unusual to have different themes. There are certainly different ways of dealing with themes but I personally like having them all in a themes/ folder.

### Vendors folder
> And last but not least, most projects will have a vendors/ folder containing all the CSS files from external libraries and frameworks – Normalize, Bootstrap, jQueryUI, FancyCarouselSliderjQueryPowered, and so on. Putting those aside in the same folder is a good way to say “Hey, this is not from me, not my code, not my responsibility”.


## Stylelint Config

extend the [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) 
and the [stylelint-config-sass-guidelines](https://github.com/bjankord/stylelint-config-sass-guidelines)

ref: _frontend/.stylelintrc.js


## Sass Guidelines Scaffolding Example

~~~~
sass/
|
|– abstracts/
|   |– _variables.scss    # Sass Variables
|   |– _functions.scss    # Sass Functions
|   |– _mixins.scss       # Sass Mixins
|   |– _placeholders.scss # Sass Placeholders
|
|– base/
|   |– _reset.scss        # Reset/normalize
|   |– _typography.scss   # Typography rules
|   ...                   # Etc.
|
|– components/
|   |– _buttons.scss      # Buttons
|   |– _carousel.scss     # Carousel
|   |– _cover.scss        # Cover
|   |– _dropdown.scss     # Dropdown
|   ...                   # Etc.
|
|– layout/
|   |– _navigation.scss   # Navigation
|   |– _grid.scss         # Grid system
|   |– _header.scss       # Header
|   |– _footer.scss       # Footer
|   |– _sidebar.scss      # Sidebar
|   |– _forms.scss        # Forms
|   ...                   # Etc.
|
|– pages/
|   |– _home.scss         # Home specific styles
|   |– _contact.scss      # Contact specific styles
|   ...                   # Etc.
|
|– themes/
|   |– _theme.scss        # Default theme
|   |– _admin.scss        # Admin theme
|   ...                   # Etc.
|
|– vendors/
|   |– _bootstrap.scss    # Bootstrap
|   |– _jquery-ui.scss    # jQuery UI
|   ...                   # Etc.
|
`– main.scss              # Main Sass file
~~~~
