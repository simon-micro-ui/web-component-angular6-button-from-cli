# Instructions from here

https://medium.com/@tomsu/building-web-components-with-angular-elements-746cd2a38d5b

# High Level

npm i -g @angular/cli

ng new micro-ui-angular-elements-seed-from-cli --prefix custom

cd micro-ui-angular-elements-seed-from-cli

ng add @angular/elements
  
ng g component button --inline-style --inline-template -v Native

Search for 'Simon' to find comments for changes made.

# Delete Stuff not Needed

Delete all the app.component.* files in src/app (see deleted folder).

## Build It

In order to build we will use a standard ng build command, but since it outputs 4 files (runtime.js , scripts.js, polyfills.js and main.js) and we’d like to distribute our component as a single js file, we need to turn hashing file names off to know what are the names of files to manually concatenate in a moment.

Modify the "build" script inpackage.json and add "package" and "serve" entries:

	"build": "ng build",
	"build-prod": "ng build --prod --output-hashing=none",
	"package": "cat dist/elements-demo/{runtime,polyfills,scripts,main}.js | gzip > elements.js.gz",
	"serve": "http-server --gzip",

## Include New Component in a Site 

e.g. See example in index.html

## Run It

npm run build && npm run package

npm i -g -D http-server (Only if you don't already have an Http Server)

npm run serve

# MicroUiAngularElementsFromCli

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
