<?php

namespace classes\customSlim;

/**
* JsonApiView - view wrapper for json responses (with error code).
*
* @package Slim
* @subpackage View
* @author Jonathan Tavares <the.entomb@gmail.com>
* @license GNU General Public License, version 3
* @filesource
*/
class JsonApiView extends \Slim\View {

    public function render($template = null, $data = null) {
        $app = \Slim\Slim::getInstance();

        $response = $this->all();
        unset($response['flash']);


        // $jsonp_callback = $app->request->get('callback', null);
        // if($jsonp_callback !== null){
        //     $app->response()->body($jsonp_callback.'('.json_encode($response).')');
        // } else {
        //     $response = ")]}',\n" . json_encode($response);
        //     $app->response()->body($response);
        // }

        $app->response()->header('Content-Type', 'application/json');

        // $response = json_encode($response);
        $response = ")]}',\n" . json_encode($response);
        $app->response()->body($response);

        $app->stop();
    }

}
