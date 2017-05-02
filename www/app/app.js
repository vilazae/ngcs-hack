var hackApp = angular.module('hackApp', [ 'ui.router', 'ngResource', 'angular-loading-bar', 'ngCookies' ] );

hackApp.config( [ '$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', function( $stateProvider, $urlRouterProvider, $locationProvider, $httpProvider ) {

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
            "mainSection" : { templateUrl : "/www/app/dash/pages/index.html", controller : 'DashboardController as ctrl' }
        }
        // ,
        // resolve : {
        // }
    } )
    .state( 'servers', {
        url     : "/servers",
        views   : {
            "mainSection" : { templateUrl : "/www/app/servers/partials/list.html", controller : 'ServersController as ctrl' }
        }
        // ,
        // resolve : {
        // }
    } )

} ] );

hackApp.run( [ '$state', '$injector', '$rootScope', function ( $state, $injector, $rootScope ) {
    var AuthService = $injector.get( 'AuthService' );
    var cookies     = $injector.get( '$cookies' );
    var cookieToken = cookies.get("u-token");

    if ( cookieToken ) {
        AuthService.setToken( cookieToken );
    }


    $rootScope.$on( '$stateChangeStart', function ( event, toState, toParams, fromState, fromParams ) {
        if ( toState.name === 'login' ) {
            console.log('login!')
            $('body').css('background-image', 'url(' + 'https://ce2.uicdn.net/30c/32e9ccab475ace1664888f71cecbb/webapp/13736-cloud-server-INT.jpg' + ')');
        } else {
            console.log('NO login!')
            $('body').css('background-image','')

        }
    } );


    $state.go('login');


} ] );

hackApp.factory( 'RequestInterceptorFactory', [ '$q', '$injector', function ( $q, $injector ) {
    return {
        request         : function ( config ) {

            var AuthService = $injector.get( 'AuthService' );

            if ( AuthService.isLogged() ) {
                config.headers['X-TOKEN']     = AuthService.getToken();
            }

            return config || $q.when( config );
        }
    };
} ] );
