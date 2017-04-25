hackApp.controller( 'DashboardController', [ 'AuthService', '$state', 'ApiService', function ( AuthService, $state, ApiService ) {
console.log('dash')
	ApiService.listServers().$promise
	.then( function (response ) {
console.log('response -- ',  angular.copy(response));
	} )
	.catch( function ( error ) {
console.log('error -- ',  angular.copy(error));
	} );

	ApiService.listLoadBalancers().$promise
	.then( function (response ) {
console.log('response -- ',  angular.copy(response));
	} )
	.catch( function ( error ) {
console.log('error -- ',  angular.copy(error));
	} );

	ApiService.listFirewallPolicies().$promise
	.then( function (response ) {
console.log('response -- ',  angular.copy(response));
	} )
	.catch( function ( error ) {
console.log('error -- ',  angular.copy(error));
	} );
} ] );