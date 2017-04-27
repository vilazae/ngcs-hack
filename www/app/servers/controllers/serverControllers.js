hackApp.controller( 'ServersController', [ 'AuthService', '$state', 'ApiService', function ( AuthService, $state, ApiService ) {
console.log('servers')
	var me = this;
	ApiService.listServers().$promise
	.then( function (response ) {
console.log('response -- ',  angular.copy(response));
		me.servers = response;
	} )
	.catch( function ( error ) {
console.log('error -- ',  angular.copy(error));
	} );
	me.showMenu = false;

	me.restarList = function () {
		angular.forEach( me.servers, function (server){
			if (server.selected){
				// ApiService.restartServer().$promise
				// .then( function (response) {
				// 	console.log(response)
				// }).catch( function (error) {
				// 	console.log(error)
				// })
			}
		})
	}

	me.selectServer = function ( server ) {
		if ( angular.isUndefined(server.selected)){
			server.selected = true
		} else {
			server.selected = !server.selected;
		}
	}
} ] );
