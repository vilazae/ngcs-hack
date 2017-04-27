hackApp.controller( 'DashboardController', [ 'AuthService', '$state', 'ApiService', function ( AuthService, $state, ApiService ) {
console.log('dash')
var me = this;
	me.servers = 0;
	me.firewallPolicies = 0;
	me.loadBalancers = 0;
	me.sharedStorages = 0;

	ApiService.listServers().$promise
	.then( function (response ) {
console.log('response -- ',  angular.copy(response));
		me.servers = response;
	} )
	.catch( function ( error ) {
console.log('error -- ',  angular.copy(error));
	} );

	ApiService.listLoadBalancers().$promise
	.then( function (response ) {
console.log('response -- ',  angular.copy(response));
		me.loadBalancers = response;
	} )
	.catch( function ( error ) {
console.log('error -- ',  angular.copy(error));
	} );

	ApiService.listFirewallPolicies().$promise
	.then( function (response ) {
console.log('response -- ',  angular.copy(response));
		me.firewallPolicies = response;
	} )
	.catch( function ( error ) {
console.log('error -- ',  angular.copy(error));
	} );

	ApiService.listSharedStorage().$promise
	.then( function (response ) {
console.log('response -- ',  angular.copy(response));
		me.sharedStorages = response;
	} )
	.catch( function ( error ) {
console.log('error -- ',  angular.copy(error));
	} );


} ] );