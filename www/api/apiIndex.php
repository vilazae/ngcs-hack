<?php

date_default_timezone_set('Europe/Madrid');

require_once( '../../classes/Slim/Slim.php' );
\Slim\Slim::registerAutoloader();

require_once( '../../classes/ClassAutoloader.class.php' );
ClassAutoloader::registerAutoloader();

use \classes\customSlim as customSlim;

//session_start();

$app = new \Slim\Slim(
    array('debug' => false) //tiene que estar a false para qie funcione el APIErrorHandler
);

$app -> view( new customSlim\JsonApiView() );

function getBodyJsonDecoded( $body ) {
    $res = explode("\n", $body);

    if ($res[0] == ")]}',")
    {
        $res = $res[count($res) - 1];
    }
    else
    {
        $res = $body;
    }
    return json_decode($res);
}

/*
 *  PING.
 */
$app->get( '/ping', function() use ( $app ) {
    $res = array("PONG");
    $app->render(200, $res);
} );



// https://cloudpanel-api.1and1.com/documentation/
// $TOKEN = "69eb386f74e34e6692ea1fe5021d994e";
$url = "https://cloudpanel-api.1and1.com/v1";

$app->get( '/test_api', function() use ( $app, $TOKEN, $url ) {

	$_command = $url . "/servers";
	$request = curl_init();

	//Set options
	curl_setopt($request, CURLOPT_URL, $_command);
	curl_setopt($request, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($request, CURLOPT_HTTPHEADER, array("X-TOKEN:$TOKEN", "Content-Type:application/json"));
	curl_setopt($request, CURLOPT_CUSTOMREQUEST, "GET");

	//Try to get the response
	$response = curl_exec( $request );
	if ( $response == false ){
		return ( curl_error( $request ) );
	} else{
		$formatResponse = getBodyJsonDecoded( $response );
	    $app->render( 200, $formatResponse );
	}

	curl_close($request);
} );

$app->post( '/login', function() use ( $app, $url ) {
    $body  = json_decode( $app->request->getBody() );
    $TOKEN = $body->token;
    $_command = $url . "/ping_auth";
    $request = curl_init();

    //Set options
    curl_setopt($request, CURLOPT_URL, $_command);
    curl_setopt($request, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($request, CURLOPT_HTTPHEADER, array("X-TOKEN:$TOKEN", "Content-Type:application/json"));
    curl_setopt($request, CURLOPT_CUSTOMREQUEST, "GET");

    //Try to get the response
    $response  = curl_exec( $request );
    $curl_info = curl_getinfo( $request );

    if ( $curl_info[ 'http_code' ] !== 200 ){
        $app->render( null, array( 'Unauthorized' ), 401 );
    } else{
        $formatResponse = getBodyJsonDecoded( $response );
        $app->render( null, array( true ), 200 );
    }

    curl_close($request);
} );

/**
 *  SERVERS.
 */
$app->get( '/servers', function() use ( $app, $url ) {
    $body  = json_decode( $app->request->getBody() );
    // $TOKEN = $body->token;
    $TOKEN = $app->request->headers->get('X-TOKEN');
    $_command = $url . "/servers";
    $request = curl_init();

    //Set options
    curl_setopt($request, CURLOPT_URL, $_command);
    curl_setopt($request, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($request, CURLOPT_HTTPHEADER, array("X-TOKEN:$TOKEN", "Content-Type:application/json"));
    curl_setopt($request, CURLOPT_CUSTOMREQUEST, "GET");

    //Try to get the response
    $response  = curl_exec( $request );
    $curl_info = curl_getinfo( $request );

    if ( $curl_info[ 'http_code' ] !== 200 ){
        $app->render( null, array( 'Unauthorized' ), 401 );
    } else{
        $formatResponse = getBodyJsonDecoded( $response );
        $app->render( null, $formatResponse, 200 );
    }

    curl_close($request);
} );

/**
 *  LOAD BALANCERS.
 */
$app->get( '/load_balancers', function() use ( $app, $url ) {
    $body  = json_decode( $app->request->getBody() );
    // $TOKEN = $body->token;
    $TOKEN = $app->request->headers->get('X-TOKEN');
    $_command = $url . "/load_balancers";
    $request = curl_init();

    //Set options
    curl_setopt($request, CURLOPT_URL, $_command);
    curl_setopt($request, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($request, CURLOPT_HTTPHEADER, array("X-TOKEN:$TOKEN", "Content-Type:application/json"));
    curl_setopt($request, CURLOPT_CUSTOMREQUEST, "GET");

    //Try to get the response
    $response  = curl_exec( $request );
    $curl_info = curl_getinfo( $request );

    if ( $curl_info[ 'http_code' ] !== 200 ){
        $app->render( null, array( 'Unauthorized' ), 401 );
    } else{
        $formatResponse = getBodyJsonDecoded( $response );
        $app->render( null, $formatResponse, 200 );
    }

    curl_close($request);
} );

/**
 *  FIREWALL POLICIES.
 */
$app->get( '/firewall_policies', function() use ( $app, $url ) {
    $body  = json_decode( $app->request->getBody() );
    // $TOKEN = $body->token;
    $TOKEN = $app->request->headers->get('X-TOKEN');
    $_command = $url . "/firewall_policies";
    $request = curl_init();

    //Set options
    curl_setopt($request, CURLOPT_URL, $_command);
    curl_setopt($request, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($request, CURLOPT_HTTPHEADER, array("X-TOKEN:$TOKEN", "Content-Type:application/json"));
    curl_setopt($request, CURLOPT_CUSTOMREQUEST, "GET");

    //Try to get the response
    $response  = curl_exec( $request );
    $curl_info = curl_getinfo( $request );

    if ( $curl_info[ 'http_code' ] !== 200 ){
        $app->render( null, array( 'Unauthorized' ), 401 );
    } else{
        $formatResponse = getBodyJsonDecoded( $response );
        $app->render( null, $formatResponse, 200 );
    }

    curl_close($request);
} );

/*
 *  LOGIN.
 */
//  Create a session with the params getted from the request.
//  Params:
//      - { "user" : "paneladminarsys", "password" : "Pr0duct0" }
//  Output:
//      - { "login" : "OK!" }
//$app -> post( '/login', function() use ( $app, $frontendConfig ) {
//    //  Get params from the body request.
//    $body  = json_decode( $app->request->getBody() );
//
//    //  Instantiate the Class Panel which store all the info of the session.
//    $panel = new classes\Panel( $body->user, $body->password );
//
//    //  Login.
//    $conNGCSCloudPanel = $frontendConfig->getDatabaseConnection();
//    $panel->login($conNGCSCloudPanel);
//
//    $response = array();
//    if( $panel->getPanelType() == 'Admin' ) {
//        $response['login']  = 'OK!';
//        $response['tenant'] = $panel->getTenantName();
//        $statusCode         = 200;
//    } else {
//        $response['login']   = 'Unauthorized';
//        $statusCode = 401;
//    }
//
//    $app->render( null, $response, $statusCode );
//} );



//// 	Logout.
//$app -> post( '/logout', function() use ( $app ) {
//    session_destroy();
//    $response['logout'] = 'OK!';
//    $statusCode = 200;
//
//    $app->render( null, $response, $statusCode );
//} );
//
////  List the application types available for this tenant.
//$app -> get( '/applications', function () use ( $app, $frontendConfig ) {
//    $conNGCSCloudPanel = $frontendConfig->getDatabaseConnection();
//    $arrayApplications = $_SESSION['applications'];
//
//    $app->render(null, $arrayApplications, 200);
//} );
//
////  List markets.
//$app -> get( '/markets', function ( ) use ( $app, $frontendConfig ) {
//    $conNGCSCloudPanel = $frontendConfig->getDatabaseConnection();
//    $arrayWarningsMarkets  = product\Warning::readMarkets($conNGCSCloudPanel);
//
//    $app->render(null, $arrayWarningsMarkets, 200);
//} );
//
//
//$app -> get( '/allapplications', function ( ) use ( $app, $frontendConfig ) {
//    $conNGCSCloudPanel = $frontendConfig->getDatabaseConnection();
//    $arrayTenantApplications  = product\Warning::readAllApplications($conNGCSCloudPanel);
//
//    $app->render(null, $arrayTenantApplications, 200);
//} );
//
//$app -> get( '/tenants', function ( ) use ( $app, $frontendConfig ) {
//    $conNGCSCloudPanel = $frontendConfig->getDatabaseConnection();
//    $arrayTenantApplications  = product\Warning::readTenants($conNGCSCloudPanel);
//
//    $app->render(null, $arrayTenantApplications, 200);
//} );


/*
 *  RUN
 */
$app->run();

?>