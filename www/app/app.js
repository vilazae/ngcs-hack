var hackApp = angular.module('hackApp', [ 'ui.router', 'ngResource', 'angular-loading-bar' ] );

hackApp.config( [ '$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', function( $stateProvider, $urlRouterProvider, $locationProvider, $httpProvider ) {
    console.log('config')
    console.log('$urlRouterProvider -- ',  angular.copy($urlRouterProvider));

    $locationProvider.html5Mode( {
        // enabled: true,
        requireBase: false
    } )
    .hashPrefix('*');



    $httpProvider.interceptors.push( 'RequestInterceptorFactory' );




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

hackApp.factory( 'RequestInterceptorFactory', [ '$q', '$injector', function ( $q, $injector ) {
    return {
        request         : function ( config ) {

        // if ( cookiePanel && cookiePanel['X-XSRF-TOKEN'] && AppConfigurationProvider.get( 'privateKey' ) ) {
        //     AppsConsoleProvider.debug( "RequestInterceptorFactory::request", "Incluir control en el header" );
        //     config.headers['X-MICROTIME'] = timestamp;
        //     config.headers['X-HASH']      = getHMAC( cookiePanel['X-XSRF-TOKEN'], timestamp );
        // }
        AuthService = $injector.get( 'AuthService' );
console.log( AuthService.isLogged() )
        if ( AuthService.isLogged() ) {
            config.headers['X-TOKEN']     = AuthService.getToken();
        }

console.log('config -- ',  angular.copy(config));
            return config || $q.when( config );
        }
    };
} ] );








