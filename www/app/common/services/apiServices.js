hackApp.service( 'ApiService', [ '$resource', function ( $resource ) {
	return $resource('http://vmlazaro.esy.es/ngcs/www/api/apiIndex.php/', {}, {
		login : {
            url     :  'http://vmlazaro.esy.es/ngcs/www/api/apiIndex.php/login',
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
            url     :  'http://vmlazaro.esy.es/ngcs/www/api/apiIndex.php/servers',
            method  : 'GET',
            params  : {
            },
            transformRequest : function ( data ) {
                var info = { };
                return angular.toJson( info );
            },
            isArray : true
        },
        listLoadBalancers : {
            url     :  'http://vmlazaro.esy.es/ngcs/www/api/apiIndex.php/load_balancers',
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
            url     :  'http://vmlazaro.esy.es/ngcs/www/api/apiIndex.php/firewall_policies',
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
            url     :  'http://vmlazaro.esy.es/ngcs/www/api/apiIndex.php/login',
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