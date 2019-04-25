# Edible Calculator
Easy-to-use tool for creating potent THC-infused edibles. Live on [ediblecalc.net](http://www.ediblecalc.net).
[Trello](https://trello.com/b/7TbHpi4e/edible-calculator-quests)

## Folder structure
 - ```_old```: Old versions of the project
 - ```meta```: Information about the project, plans etc.
 - ```edible-calculator-vuecli```: The actual app
   - ```dist```: Distribution folder. Live on [ediblecalc.net](http://www.ediblecalc.net)
   - ```public```: Static files
   - ```src```: Source code

## Technical overview
We are using:
 - **Vue-cli** as an environment.
 - **Webpack** for bundling.
 - **Service worker** to make the app work offline as a PWA.
 - **Prerender SPA Plugin** for prerendering content on build (provides access to crawlers - SEO improvement).
 - **raw-loader** for loading markdown files into js.
 - **Babel** as a polyfill.
 - **ES Lint** for automatic linting.
 - **Both node-sass and ruby-sass** for compiling sass->css
 - **PostCSS** for swag 🐱‍👤

## Website structure
 ```
 Globals: App.vue, components/Header.vue
 '/' - Home page (views/Home.vue)
 '/dosage-calculator' - Edible dosage calculator app (views/DosageCalculator.vue, components/DosageCalc.vue, assets/articles/EdibleDosageCalculator.md)
 '/decarb-time-calculator' - Decarb time calculator app (views/DecarbTimeCalculator.vue, components/DecarbCalc.vue)
 /anything-else - shows a 404 Error page (views/404.vue)
 ```