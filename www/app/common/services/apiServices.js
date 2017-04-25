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