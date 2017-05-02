hackApp.service( 'AuthService', [ '$q', 'ApiService', '$injector', function ( $q, ApiService, $injector ) {
    var me   = this;
    me.token = undefined;

    var isLogged = function ( ) {
        return angular.isDefined( me.token );
    };

    var getToken = function ( ) {
        return me.token;
    };

    var setToken = function ( uToken ) {
        return me.token = uToken;
    };

    var logout = function ( ) {
        token = undefined;
    };

    var login = function ( userApiToken ) {
        var loginDeferred = $q.defer();

        ApiService.login( { token : userApiToken } ).$promise
        .then( function ( response ) {
            me.token = userApiToken;

            var cookies = $injector.get( '$cookies' );
            cookies.put( 'u-token', userApiToken );
            loginDeferred.resolve( true );
        } )
        .catch( function ( error ) {
            me.token = undefined;
            loginDeferred.reject( 'Token invalid.' );
        } );

        return loginDeferred.promise;
    };




    return {
        isLogged : isLogged,
        getToken : getToken,
        setToken : setToken,
        logout   : logout,
        login    : login
    }
} ] );