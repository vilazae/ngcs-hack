hackApp.service( 'ApiService', [ '$resource', function ( $resource ) {
	return $resource('http://74.208.124.117/www/api/apiIndex.php/', {}, {
		login : {
            url     :  'http://74.208.124.117/www/api/apiIndex.php/login',
            method  : 'POST',
            params  : {
            },
            transformRequest : function ( data ) {
                var info = { token : data.token };
                return angular.toJson( info );
            },
            isArray : true
		},
        listServers : {
            url     :  'http://74.208.124.117/www/api/apiIndex.php/servers',
            method  : 'GET',
            params  : {
            },
            transformRequest : function ( data ) {
                var info = { };
                return angular.toJson( info );
            },
            isArray : true,
            ignoreLoadingBar: true
        },
        restartServer : {
            url     :  'http://74.208.124.117/www/api/apiIndex.php/servers/:id/restart',
            method  : 'PUT',
            params  : {
                id : '@id'
            },
            transformRequest : function ( data ) {
                var info = { action: 'restart' };
                return angular.toJson( info );
            },
            isArray : false
        },
        listLoadBalancers : {
            url     :  'http://74.208.124.117/www/api/apiIndex.php/load_balancers',
            method  : 'GET',
            params  : {
            },
            transformRequest : function ( data ) {
                var info = { };
                return angular.toJson( info );
            },
            isArray : true
        },
        listFirewallPolicies : {
            url     :  'http://74.208.124.117/www/api/apiIndex.php/firewall_policies',
            method  : 'GET',
            params  : {
            },
            transformRequest : function ( data ) {
                var info = { };
                return angular.toJson( info );
            },
            isArray : true
        },
        listSharedStorage : {
            url     :  'http://74.208.124.117/www/api/apiIndex.php/shared_storages',
            method  : 'GET',
            params  : {
            },
            transformRequest : function ( data ) {
                var info = { };
                return angular.toJson( info );
            },
            isArray : true
        },
        callMethod : {
            url     :  'http://74.208.124.117/www/api/apiIndex.php/login',
            method  : 'POST',
            params  : {

            },
            transformRequest : function ( data ) {
                var info = { token : data.token };
                return angular.toJson( info );
            },
            isArray : true
        }
	} );

} ] );


// hackApp.service( 'ApiService', [ '$resource', function ( $resource ) {
//     return $resource(
//         'user_logs', {}, {

//             query : {
//                 url     :  'user_logs',
//                 method  : 'GET',
//                 params  : {
//                 },
//                 isArray : true
//             },
//             get   : {
//                 url     : 'user_logs/:id',
//                 method  : 'GET',
//                 params  : {
//                     id : '@id'
//                 },
//                 isArray : false
//             }
//         }
//     );
// } ] );