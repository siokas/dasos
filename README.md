> in development

# <img src="https://github.com/siokas/dasos/blob/master/src/assets/pine.png" height="30px"> dasos - App Landing Page Template

App Landing Page Template built with <a href="https://github.com/vuejs/vue-cli">vue-cli</a> and <a href="https://github.com/tailwindcss/tailwindcss">tailwindcss</a>.

## Sections

* Features
* Testimonials
* Download App
* Contact

## Used to build

* <a href="https://github.com/tailwindcss/tailwindcss">tailwindcss</a> - A utility-first CSS framework for rapid UI development
* <a href="https://github.com/vuejs">vuejs</a>
  - <a href="https://github.com/vuejs/vue">vue</a> - Javascript Framework
  - <a href="https://github.com/vuejs/vue-cli">vue-cli</a> - Standard Tooling for Vue.js Development
  - <a href="https://github.com/vuejs/vue-router">vue-router</a> - The official router for Vue.js
  - <a href="https://github.com/vuejs/vuefire">vuefire</a> - Firebase bindings for Vue.js
* <a href="https://www.npmjs.com/package/firebase">firebase</a> - Used for database
* <a href="https://github.com/axios/axios">axios</a> - Promise based HTTP client for the browser and node.js
* <a href="https://github.com/SSENSE/vue-carousel">vue-carousel</a> - Carousel for Vue.js
* <a href="https://github.com/rigor789/vue-scrollto">vue-scrollto</a> - Listens for click events and scrolls to elements
* <a href="https://www.flaticon.com/">flaticon</a> - All icons (svg and png)

## Install and run

To edit the template you need to configure some prerequisites. If you have installed or configured any of the steps, feel free to proceed to the next one.

### Prerequisites

1. You need to have <a href="https://www.npmjs.com/get-npm">npm</a> or <a href="https://yarnpkg.com/lang/en/docs/install/">yarn</a> installed in your system.
2. You need to have installed <a href="https://github.com/vuejs/vue-cli">vue-cli</a> in your system. Navigate to the installation guide of the official vue-cli page (<a href="https://cli.vuejs.org/guide/installation.html">https://cli.vuejs.org/guide/installation.html</a>) and follow the instractions.
3. You need a firebase account (for the database). Navigate to the google-firbase web page (<a href="https://firebase.google.com/">https://firebase.google.com</a>) and create a firebase account (its just a click if you have a google account). Then create a web project and keep your api_key, auth_domain, database_url, project_id for the next steps.

### Template Installation

1. Clone or download the project
2. Go to the project and if you do not have a <strong>.env</strong> file, rename the <strong>.env.example</strong> file to <strong>.env</strong>
3. Paste your firebase authenitcation keys (from the previous steps) into the <strong>.env</strong> file
4. Install all the dependencies by entering the following command in your terminal:
  ```sh
  npm install
  ```
5. To run the app enter
  ```sh
  npm run serve
  ```
