# Edible Calculator
Easy-to-use PWA toolkit and guide for creating potent THC-infused edibles. Live on [ediblecalc.net](https://www.ediblecalc.net) and [netlify](https://ediblecalc.netlify.com).

## Why is it cool 💃
 - The computations are very precise and provide correct, science-based results.
 - Edible calculator meets PWA standards.
 - The project is logically structured and runs on modern technologies to provide the best user experience and support wide amount of devices and browsers.

## Basic development info
The project is powered by vue-cli. The base development directory (for running scripts etc.) is `edible-calculator/edible-calculator-vuecli`.

**How to build:**

*You need [node.js](https://nodejs.org/en/) installed on your machine.*

 1. Navigate to the base directory:

 ```
  cd edible-calculator-vuecli
 ```

 2. Install `node-modules` for the project (they are disabled by `.gitignore`):
 ```
  npm install
 ```

 3. Now you can use the following scripts:
  - `npm run build` to build into `dist` folder 
  - `npm run serve` to serve on `localhost:8080`
  - `npm run lint` to lint all source files using a linter specified in `package.json` (currently ESLint)

 *Note: The `master` branch gets automatically built and deployed to the [netlify website](https://ediblecalc.netlify.com)*

## Folder structure
 - ```_old```: Old versions of the project
 - ```meta```: Information about the project, plans etc.
 - ```edible-calculator-vuecli```: The actual vue-cli app
   - ```dist```: Distribution folder. Live on [ediblecalc.net](http://www.ediblecalc.net) and [ediblecalc.netlify.com](https://ediblecalc.netlify.com)
   - ```public```: Static files
   - ```src```: Source code

## Technologies used
### Back-end:
 - **Vue-cli** as an environment.
 - **Webpack** for bundling.
 - **Service worker** to make the app work offline as a PWA.
 - **Prerender SPA Plugin** for prerendering content on build (provides access to crawlers - SEO improvement).
 - **raw-loader** for loading markdown files into js.
 - **Babel** as a polyfill.
 - **ES Lint** for automatic linting.
### Front-end:
 - Both **node-sass** and **ruby-sass** for compiling sass->css
 - **PostCSS** for swag 🐱‍👤
 ### Deployment and testing:
 - **Netlify** as well as traditional ftp-accessible webhosting for deployment
 - **Google analytics** and **Google Search Console** for analysis
 - **Google Optimize** for A/B testing
 - **Github** for source control and issue management
 - **Coggle** for mind maps
 - **Trello** for task management *(New features and plans should be on Trello, bugs and issues on Github)*

## Routing path structure
This is a list of accessible routing paths with the `views` and `components` linked to them.
 ```
 '*' (everything) - App.vue, components/Header.vue
 '/' - Home page (views/Home.vue)
 '/dosage-calculator' - Edible dosage calculator app (views/DosageCalculator.vue, components/DosageCalc.vue, assets/articles/EdibleDosageCalculator.md)
 '/decarb-time-calculator' - Decarb time calculator app (views/DecarbTimeCalculator.vue, components/DecarbCalc.vue)
 /anything-else - shows a 404 Error page (views/404.vue)
 ```
