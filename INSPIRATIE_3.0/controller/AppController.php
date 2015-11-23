<?php

class AppController {

	public $route = array();
	public $viewVars = array();
	public $isClosed = false;
	public $usersDAO;

	public function __construct() {


        $isClosed = $this->isClosed = false;
        $this->set('isClosed',$isClosed);

	}

    public function checkLogin() {


        /*require_once WWW_ROOT . 'dao' . DS . 'UsersDAO.php';
        $this->usersDAO = new UsersDAO();



        if(isset($_POST['btnSubmitLogin'])){
            if(empty($_POST['txtEmail'])){

                $this->addError('<img src="images/login_validatie.png" alt="loginvalidatie" id="loginvalidatie">');

            }

            if(empty($_POST['txtPasswoord'])){

                $this->addError('<img src="images/login_validatie.png" alt="loginvalidatie" id="loginvalidatieww">');

            }

            if(!empty($_POST['txtEmail']) && !empty($_POST['txtPassword'])) {

            $user = $this->usersDAO->login($_POST['txtEmail'],$_POST['txtPassword']);

            if(!empty($user)) {
                $_SESSION['user'] = $user;
                $this->redirect("index.php");
            } else {
                    $this->addErrorinvalid('ongeldig login');

            }
        }

       }*/
    }

    public function checkLogout() {
        if(!empty($_GET['action']) && strtolower($_GET['action']) == 'logout') {
            unset($_SESSION['user']);
            $this->redirect('index.php');
        }
    }

	public function filter() {

        $this->checkLogin();
        $this->checkLogout();
		call_user_func(array($this, $this->route['action']));
	}

	public function render() {
		extract($this->viewVars, EXTR_OVERWRITE);

        if(!empty($_SERVER["HTTP_X_REQUESTED_WITH"]) && strtolower($_SERVER["HTTP_X_REQUESTED_WITH"]) == "xmlhttprequest"){

            require WWW_ROOT . 'pages/' . strtolower($this->route['controller']) . '/'
                . $this->route['action'] . '.php';

            exit();

        }

	    require WWW_ROOT . 'parts/header.php';
	    require WWW_ROOT . 'pages/' . strtolower($this->route['controller']) . '/'
	    					. $this->route['action'] . '.php';
	    require WWW_ROOT . 'parts/footer.php';
	    unset($_SESSION["errors"]);
	    unset($_SESSION["errorsinvalid"]);
	    unset($_SESSION["questions"]);
	    unset($_SESSION["order"]);
	}

	public function set($variableName, $value) {
		$this->viewVars[$variableName] = $value;
	}

	public function addError($error){
		if(!isset($_SESSION["errors"])) {
			$_SESSION["errors"] = array();
		}
		$_SESSION["errors"][] = $error;
	}

    public function addErrorinvalid($errorinvalid){

        if(!isset($_SESSION["errorsinvalid"])) {
            $_SESSION["errorsinvalid"] = array();
        }
        $_SESSION["errorsinvalid"][] = $errorinvalid;
    }

	public function redirect($url) {
		header("Location: {$url}");
		exit();
	}

}