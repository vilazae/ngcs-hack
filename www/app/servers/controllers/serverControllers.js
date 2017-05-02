hackApp.controller( 'ServersController', [ 'AuthService', '$state', 'ApiService', '$interval', '$filter', '$scope', function ( AuthService, $state, ApiService, $interval, $filter, $scope ) {
	var me = this;

	ApiService.listServers().$promise
	.then( function (response ) {
		me.servers = response;
	} )
	.catch( function ( error ) {
	} );
	me.showMenu = false;

	me.restartServers = function () {
		angular.forEach( me.servers, function (server){
			if (server.selected){
				ApiService.restartServer( { id: server.id } ).$promise
				.then( function (response) {
					// console.log(response)
				}).catch( function (error) {
					// console.log(error)
				})
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

	var interval = $interval( function () {
		ApiService.listServers().$promise
		.then( function ( response ) {
			angular.forEach( response, function ( server ){
				var _tmp = $filter('filter')( me.servers, { id: server.id }, true);
				_tmp[0].status.state = server.status.state;
			} );
		} )
	}, 2000);

	$scope.$on("$destroy", function() {
        if (interval) {
            $interval.cancel(interval);
        }
    });


} ] );
