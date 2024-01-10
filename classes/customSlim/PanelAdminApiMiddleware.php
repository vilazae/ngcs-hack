<?php

namespace classes\customSlim;

/**
 * Interceptor of the api of the Panel Admin App.
 *
 * @author vmlazaro
 */

class PanelAdminApiMiddleware extends \Slim\Middleware {

    /**
     * @var array
     *
     * Route string set to tell middleware to ignore authentication
     */
    protected $allowedRoutes;


    function __construct( $allowedRoutes = array() )
    {
        $this->allowedRoutes = $allowedRoutes;
    }

    function call() {
        $request = $this->app->request();

        $requestCall = $request->getMethod() . $request->getResourceUri();

        if ( in_array( $requestCall, $this->allowedRoutes, TRUE ) ) {
            $this->next->call();
        } else {
            if ( isset( $_COOKIE['token1'] ) ) {
                $this->next->call();
            } else {
                    $this->app->response()->header("Error-Msg", "UNAUTHORIZED");
                    $this->app->response()->setStatus(401);
            }
        }
    }
}

?>
