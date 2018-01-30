# PugJS - SASS - Gulp project

A simple configuration project with PugJS and SASS.

## Getting Started

Wanted to start a project with PugJS and SASS? Here's a scaffold of the project integrating Gulp as the build system.

### Prerequisites

You must have **npm**, **gulp** and **pug** install on your computer.

**On Mac**

```
$ gem install sass && npm install -g pug 
```

### Installing

To install the building dependencies

```
$ npm install
```

And then, to build the project. It will automatically create a production folder (**/dist**) with minified index.html and styles.min.css

```
$ gulp build
```

You can also watch your .pug and .scss files:

```
$ gulp watch
```

And now, you're ready to go. Just launch **dist/index.html** in any browser, you don't need any local server.

## Generate a component

```
$ python create.py <component-name>
```

It will generate a partial sass files in **/src/sass/includes/** and import it directly into **/src/sass/styles.scss**. Also it will create a pug file in **/src/views/includes/** that you can include in your **index.pug** wherever you want it in the page.

## Project Structure

```
pugjs-sass/
├── nodes_modules/		* Node dependencies: Gulp & its plugins
|
├── dist/			* Production folder: HTML & CSS files minified. [Optional] Public files: Images & Fonts.
|	├── index.html		* HTML Page
|	├── styles.min.css	* Main stylesheet minified
|	├── styles.min.css.map	* Source Maps of styles.min.css 
|
├── src/			* Development folder
|	├── sass/               * SASS files
|	|	├── general/    * General folder: variables, general styles etc...
|	|	├── includes/   * Stylesheets link to a pug component
|	|	├── styles.scss * Main stylesheets that import SASS partials
|	├── views/              * Pug files
|	|	├── general/    * General folder: head, scripts etc...
|	|	├── includes/   * Pug component template
|	|	├── index.pug   * Main page that includes pug components
|
├── .gitignore              	* Gitignore file: dist/ & nodes_modules/
├── create.py           	* Python script to generate a pug and sass files associated
├── LICENSE          	        * MIT License
├── package.json            	* Description file for Node dependencies
├── gulpfile.js			* Gulp script to build and watch dev files
├── README.md			* Documentation file
```

## Upcoming

* Simple template integration
* Tutorial: 'How to deploy a static website with Netlify?'
* A demo website deployed
* _[optionnal]_ Local server to allow hot reload

## Built With

* [PugJS](https://pugjs.org) -  Robust, elegant, feature rich template engine
* [Sass](http://sass-lang.com/) - Sass makes CSS fun again.
* [Gulp](https://gulpjs.com) - The streaming build system

## Author

**Antoine Rakotozafy** - [Website](https://arakotozafy.me)

## License

This project is licensed under the MIT License.