<?php
require_once WWW_ROOT . 'controller' . DS . 'AppController.php';

class ProductsController extends AppController {

    public $inspirationDAO;
    public $usersDAO;

    public function __construct(){
        parent::__construct();

        require_once WWW_ROOT . 'dao' . DS . 'InspirationDAO.php';
        require_once WWW_ROOT . 'dao' . DS . 'UsersDAO.php';

        $this->inspirationDAO = new InspirationDAO();
        $this->usersDAO = new UsersDAO();

    }

    public function overview(){


    if(isset($_POST['btnSubmitLogin'])){
        if(!empty($_POST) && strtolower($_POST["btnSubmitLogin"]) == "login"){

             if(!empty($_POST["txtUsername_login"])
                && !empty($_POST["txtPassword_login"])){
                $user = $this->usersDAO->login($_POST["txtUsername_login"],$_POST["txtPassword_login"]);
                    if(!empty($user)){
                        $_SESSION["user"] = $user;
                        $this->redirect("index.php?page=app");


                    }
            }else{

                trace('incorrect');

            }


        }else{


            return false;
        }
    }

    if(isset($_POST['btnSubmitRegister'])){

        if(!empty($_POST) && strtolower($_POST["btnSubmitRegister"]) == "register"){

            /*if(empty($_POST["voornaam"])){
                $this->addError('<h1>niet goed</h1>');
            }

            if(empty($_POST["naam"])){
                $this->addError('<img src="images/uitroepteken_error.png" id="uitroepteken_naam" class="show">');
            }

            if(empty($_POST["gebruikersnaam"])){
                $this->addError('<img src="images/uitroepteken_error.png" id="uitroepteken_gebruikersnaam" class="show">');
            }

            if(empty($_POST["email"])){
                $this->addError('<img src="images/uitroepteken_error.png" id="uitroepteken_email" class="show">');
            }

            if(empty($_POST["wachtwoord2"])){
                $this->addError('<img src="images/uitroepteken_error.png" id="uitroepteken_wachtwoord" class="show">');
            }*/


            if(!empty($_POST["txtFirstname"])
                && !empty($_POST["txtName"])
                && !empty($_POST["txtUsername"])
                && !empty($_POST["txtEmails"])
                && !empty($_POST["txtPassword"])
                && !empty($_POST["txtRPassword"])
                && $_POST["txtPassword"] == $_POST["txtRPassword"]){

                $user = $this->usersDAO->register($_POST['txtFirstname'],$_POST["txtName"],$_POST["txtUsername"],$_POST["txtEmails"], $_POST['txtPassword']);
                    if(!empty($user)){
                        $_SESSION["user"] = $user;
                        $this->redirect("index.php");
                    }
            }else{

                trace('incorrect');

            }


        }else{

            return false;

        }
    }

    }
   
    public function register(){


         if(!empty($_POST) && strtolower($_POST["btnSubmitRegister"]) == "register"){

            /*if(empty($_POST["voornaam"])){
                $this->addError('<h1>niet goed</h1>');
            }

            if(empty($_POST["naam"])){
                $this->addError('<img src="images/uitroepteken_error.png" id="uitroepteken_naam" class="show">');
            }

            if(empty($_POST["gebruikersnaam"])){
                $this->addError('<img src="images/uitroepteken_error.png" id="uitroepteken_gebruikersnaam" class="show">');
            }

            if(empty($_POST["email"])){
                $this->addError('<img src="images/uitroepteken_error.png" id="uitroepteken_email" class="show">');
            }

            if(empty($_POST["wachtwoord2"])){
                $this->addError('<img src="images/uitroepteken_error.png" id="uitroepteken_wachtwoord" class="show">');
            }*/


            if(!empty($_POST["txtFirstname"])
                && !empty($_POST["txtName"])
                && !empty($_POST["txtUsername"])
                && !empty($_POST["txtEmails"])
                && !empty($_POST["txtPassword"])
                && !empty($_POST["txtRPassword"])
                && $_POST["txtPassword"] == $_POST["txtRPassword"]){

                $user = $this->usersDAO->register($_POST['txtFirstname'],$_POST["txtName"],$_POST["txtUsername"],$_POST["txtEmails"], $_POST['txtPassword']);
                    if(!empty($user)){
                        $_SESSION["user"] = $user;
                        //$this->redirect("index.php");
                    }
            }else{

                trace('incorrect');

            }


        }
        
    }

    public function app(){



    }



}