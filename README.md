# Leonardo
Leonardo is an application develloped using [Angular](https://github.com/angular/angular-cli) that allows you to view a set of data using [Highcharts](https://highcharts.com) module

## How to install
### Prerequisites
Before you begin, make sure your development environment includes Node.js and an npm package manager.

Angular requires Node.js version 8.x or 10.x.

- To check your version, run node -v in a terminal/console window.
- To get Node.js, go to nodejs.org.

### Install

Download the github project in a local folder and run (inside the projet folder):

    npm i

The npm command will download all necessary modules for the application

## How to use

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## On-line test application

If you want to use leonardo application without any installation you find and use the application directly at www.leonardo.carboni.ch

## Important - Loading Time

Many charts ( such as marathon chart par example ) can take a very long time to be loaded and operational. If the browser does not respond to the navigation, do not worry. It can be normal. Wait for the necessary time until the navigation is available again.

## Charts Source Data

Charts needs data to be used. The base data used is json. Many data are stored locally and others are taken using the highcharts API. In detail:

- For the SunBurst charts data, are stored locally and they come originally by [wikipedia list of country page](https://en.wikipedia.org/wiki/List_of_countries_by_population_(United_Nations\))
- For the Parrallel Coordinates, data are provided by [highcharts API](https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/marathon.json)
- The Stream chart use local data and they come form by [SR/Olympic Sports](https://www.sports-reference.com/olympics/winter/1924/)
- The Tree Map chart use data from the [highchartsAPI](https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/world-mortality.json)


## How to learn
If you don't know the angular framework and the highcharts module you can use these link to self-learn and start a new project. This is the way that I used to learn. It is very easy and it take you no much time.

### Angular
From the angular web site you can learn how the framwerk work and how to create your first project.

- [Angular](www.angular.io)
- [Angular Examples](https://scotch.io/courses/build-your-first-angular-website/creating-an-angular-header-and-footer)

### HighCharts

You can use two differentes way to use highcharts: you can use the highcharts-angular modules or the javascript libraries. The first is the best way because it allow you to use all highcharts charts directly using the framework angular.

Into the follow list you have all necessary informations about highcharts module for angular and about the pure highcharts library

- [HighCharts for Angular](https://www.tutorialspoint.com/angular_highcharts/angular_highcharts_quick_guide.htm)
- [HighCharts Library](https://www.highcharts.com/)

