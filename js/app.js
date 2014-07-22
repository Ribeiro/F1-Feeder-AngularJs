angular.module('F1FeederApp', [
  'F1FeederApp.services',
  'F1FeederApp.controllers',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when("/drivers", {templateUrl: "partials/drivers.html", controller: "driversController",
                                                                          resolve: {
                                                                              driversFromService: function (ergastAPIservice) {
                                                                                  return ergastAPIservice.getDrivers();
                                                                              }
                                                                          }
                    }).when("/drivers/:id", {templateUrl: "partials/driver.html", controller: "driverController"}).otherwise({redirectTo: '/drivers'});

}]);