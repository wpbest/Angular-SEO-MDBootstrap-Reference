# Angular-SEO-MDBootstrap-Reference

Material Design for Bootstrap with Search Engine Optimisation Reference (ngseomdbref)


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Documentation

[Node.js](https://nodejs.org/en/docs/)

[Angular](https://angular.io/)

[AngularCLI](https://cli.angular.io/)

[RxJS](http://reactivex.io/rxjs/)

## Install the Angular CLI

In order to get started with Angular development, [Node.js](https://nodejs.org/en/download/) and the [Angular CLI](https://angular.io/cli) is needed. To install the Angular CLI use the following command in the terminal window:

```
npm install -g @angular/cli
```
## Generate Code scaffolding

### ng new command switches used

#### --style=[css | scss | less | sass | styl]

The style option specifies what CSS preprocessor is used in building the project. the options are: css, scss, less, sass, styl.

#### --routing

The routing option generates a file app-routing.module.ts file.

#### --enable-ivy

The enable-ivy option enables the next generation renderer.

#### --skip-install

This skip-install option disables the npm install after code generation.

#### --skip-git

### Angular CLI Command

```
ng new ngseomdbref --routing --style scss --enable-ivy --skip-install --skip-git
```

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Add SEO (Search Engine optimization)

Create the file robots.txt to the src folder and create the text

```
User-agent: *
Allow: /
```

Create the file sitemap.xml to the src folder and create the text:

```
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url>
      <loc>localhost:4200</loc>
      <lastmod>2019-07-03</lastmod>
      <changefreq>always</changefreq>
      <priority>1.0</priority>
   </url>
</urlset>
```
Substitute localhost:4200 for the site URL.

Modify angular.json and add "src/robots.txt" and "src/sitemap.xml" in tha assets,

```
            "assets": [
              "src/favicon.ico",
              "src/assets",
              "src/robots.txt",
              "src/sitemap.xml
            ],
```

Add the meta data in the ```<head>``` section in the intex.html file in the src folder:

```
  <link rel="canonical" href="localhost:4200" />
  <meta name="description" content="This is a meta description sample. We can add up to 160 characters.">
```
Substitute localhost:4200 for the site URL.

Modify package.json and add "ng-uikit-pro-standard": "file:ng-uikit-pro-standard-8.1.0.tgz" in the "dependencies" section.
```
  "dependencies": {
    ...
    "zone.js": "~0.9.1",
    "ng-uikit-pro-standard": "file:ng-uikit-pro-standard-8.1.0.tgz"
  },
```

## Install Angular Google Maps

```
npm install @agm/core --save
```
## Install charts.js

```
npm install chart.js --save
```

## Install hammerjs

```
npm install hammerjs --save
```

## Install screenfull

```
npm install screenfull --save
```

## Install easy-pie-chart

```
npm install easy-pie-chart --save
```

## Add Font Awesome Common Packages

```
npm install @fortawesome/fontawesome-free --save
```

```
npm install @fortawesome/fontawesome-svg-core --save
npm install @fortawesome/angular-fontawesome --save
```

## Add Font Awesome Free Edition Packages

```
npm install @fortawesome/free-brands-svg-icons --save
npm install @fortawesome/free-solid-svg-icons --save
```

## Install jarallax

```
npm install jarallax --save
```

## Install Node Packages

```
npn install
```

Modify angular.json to add the following:

```
{
  "projects": {
    "ng-uikit-pro-standard": {
...      
     "arch itect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
...
            "styles": [
              "node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss",
              "node_modules/@fortawesome/fontawesome-free/scss/solid.scss",
              "node_modules/@fortawesome/fontawesome-free/scss/regular.scss",
              "node_modules/@fortawesome/fontawesome-free/scss/brands.scss",
              "node_modules/ng-uikit-pro-standard/assets/scss/bootstrap/bootstrap.scss",
              "node_modules/ng-uikit-pro-standard/assets/scss/mdb.scss",
              "src/styles.scss"
            ],
            "scripts": [
              "node_modules/chart.js/dist/Chart.js",
              "node_modules/easy-pie-chart/dist/easypiechart.js",
              "node_modules/screenfull/dist/screenfull.js",
              "node_modules/hammerjs/hammer.min.js"
            ]
...
          }
        }
      }
    }
  }
}  
```

## Install NPM Check Update (NCU) ad Check packages.json for outdated packages

At times, the package.json file can get out of date from what is current. To check for outdated packages install npm-check-update, run ncu to see outdated packages, and then run ncu -u to update the packages.

```
npm install -g npm-check-updates
ncu
ncu -u
npm install
```

## ng commands

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
