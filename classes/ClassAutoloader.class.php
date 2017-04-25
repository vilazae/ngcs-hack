<?php

class ClassAutoloader
{

    public static function registerAutoloader() {
        spl_autoload_register('ClassAutoloader::classLoader');
    }

    private static function classLoader($className){
        try{
            $className = preg_replace('/\\\/', DIRECTORY_SEPARATOR, $className);
            $base      = dirname(__FILE__) . DIRECTORY_SEPARATOR . ".." . DIRECTORY_SEPARATOR;
            $path1     = $base . $className . ".class.php";
            $path2     = $base . $className . ".php";

            if ( is_readable($path1) ){
                require_once($path1);
            }elseif( is_readable($path2) ){
                require_once($path2);
            }else{
                throw new \Exception("Class: " . $className . " not found by ClassAutoloader");
            }
        }catch(\Exception $exception){
            // print_r($exception);
            // throw $exception;
        }
    }
}
?>
