var hackApp = angular.module('hackApp', [ 'ui.router', 'ngResource', 'angular-loading-bar' ] );

hackApp.config( [ '$stateProvider', '$urlRouterProvider', '$locationProvider', function( $stateProvider, $urlRouterProvider, $locationProvider) {
    console.log('config')
    console.log('$urlRouterProvider -- ',  angular.copy($urlRouterProvider));

    $locationProvider.html5Mode( {
        enabled: true,
        requireBase: false
    } )
    .hashPrefix('*');

    $stateProvider
    .state( 'login', {
        url     : "/login",
        views   : {
            "mainSection" : { templateUrl : "app/login/partials/login.html", controller : 'LoginController as ctrl' }
        }
        // ,
        // resolve : {
        // }
    } )
    .state( 'dashboard', {
        url     : "/dashboard",
        views   : {
            "mainSection" : { templateUrl : "/ngcs/www/app/dashboard/partials/resume.html", controller : 'DashboardController as ctrl' }
        }
        // ,
        // resolve : {
        // }
    } )

} ] );

hackApp.run( [ '$state', function ( $state ) {
    $state.go('login');
    console.log('run')
} ] );







