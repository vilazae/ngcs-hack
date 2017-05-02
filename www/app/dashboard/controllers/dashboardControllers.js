hackApp.controller( 'DashboardController', [ 'AuthService', '$state', 'ApiService', function ( AuthService, $state, ApiService ) {
	var me = this;

	me.servers          = 0;
	me.firewallPolicies = 0;
	me.loadBalancers    = 0;
	me.sharedStorages   = 0;

	ApiService.listServers().$promise
	.then( function (response ) {
		me.servers = response;
	} )
	.catch( function ( error ) {
	} );

	ApiService.listLoadBalancers().$promise
	.then( function (response ) {
		me.loadBalancers = response;
	} )
	.catch( function ( error ) {
	} );

	ApiService.listFirewallPolicies().$promise
	.then( function (response ) {
		me.firewallPolicies = response;
	} )
	.catch( function ( error ) {
	} );

	ApiService.listSharedStorage().$promise
	.then( function (response ) {
		me.sharedStorages = response;
	} )
	.catch( function ( error ) {
	} );


} ] );