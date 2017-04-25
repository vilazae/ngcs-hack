hackApp.service( 'AuthService', [ '$q', 'ApiService', function ( $q, ApiService ) {
    var me   = this;
    me.token = undefined;

    var isLogged = function ( ) {
        return angular.isDefined( me.token );
    };

    var getToken = function ( ) {
        return me.token;
    };

    var logout = function ( ) {
        token = undefined;
    };

    var login = function ( userApiToken ) {
        var loginDeferred = $q.defer();
        ApiService.login( { token : userApiToken } ).$promise
        .then( function ( response ) {
            me.token = userApiToken;
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
        logout   : logout,
        login    : login
    }
} ] );