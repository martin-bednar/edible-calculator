# Edible Calculator
Easy-to-use application toolkit for creating potent THC-infused edibles. Live on [ediblecalc.net](https://www.ediblecalc.net) and [netlify](https://ediblecalc.netlify.com)


## Folder structure
 - ```_old```: Old versions of the project
 - ```meta```: Information about the project, plans etc.
 - ```edible-calculator-vuecli```: The actual vue-cli app
   - ```dist```: Distribution folder. Live on [ediblecalc.net](http://www.ediblecalc.net) and [ediblecalc.netlify.com](https://ediblecalc.netlify.com)
   - ```public```: Static files
   - ```src```: Source code

## Technical overview
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
 ```
 Globals: App.vue, components/Header.vue
 '/' - Home page (views/Home.vue)
 '/dosage-calculator' - Edible dosage calculator app (views/DosageCalculator.vue, components/DosageCalc.vue, assets/articles/EdibleDosageCalculator.md)
 '/decarb-time-calculator' - Decarb time calculator app (views/DecarbTimeCalculator.vue, components/DecarbCalc.vue)
 /anything-else - shows a 404 Error page (views/404.vue)
 ```
