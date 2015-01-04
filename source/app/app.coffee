'use strict'
App = angular.module "MyApp", [
  "ngResource"
  "ngRoute"
  "ngAnimate"
  "ngMaterial"
]

App.config [ "$routeProvider", "$locationProvider", ( $routeProvider, $locationProvider ) ->
  $locationProvider.html5Mode true

  $routeProvider
  .when "/",
    template: JST["home/index"]()
    controller: "MainCtrl"
  .when "/:title",
    template: JST["posts/show"]()
    controller: "PostShowCtrl"
]

