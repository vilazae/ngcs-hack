hackApp.controller( 'LoginController', [ 'AuthService', '$state', function ( AuthService, $state ) {
	var me = this;

	me.apiToken  = "69eb386f74e34e6692ea1fe5021d994e";
	me.error = undefined;

	me.login = function () {
		AuthService.login( me.apiToken )
		.then( function ( ) {
			me.error = undefined;
			$state.go( 'dashboard' );
		} )
		.catch(function ( ) {
			me.error = true;
		} );
	}
} ] );