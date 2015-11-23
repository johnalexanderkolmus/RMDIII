<?php
require_once WWW_ROOT . 'controller' . DS . 'AppController.php';

class UsersController extends AppController {




    public function __construct() {
        parent::__construct();


    }

    public function question(){

        if(!empty($_POST) && isset($_POST['btnSubmitQuestion'])){

            if(!empty($_POST["voornaamvragen"])
                && !empty($_POST["naamvragen"])
                && !empty($_POST["emailvragen"])
                && !empty($_POST["opmerkingvragen"])){

                $question = $this->usersDAO->question($_SESSION['user']['id'],$_POST['voornaamvragen'],$_POST["naamvragen"],$_POST["emailvragen"], $_POST['opmerkingvragen']);

                if(!empty($question)){

                    $_SESSION['questions'] = $question;

                }
            }
        }
    }

    public function register() {

        if(!empty($_POST) && strtolower(isset($_POST["btnSubmitBuy"]))){

            if(empty($_POST["voornaam"])){
                $this->addError('<img src="images/uitroepteken_error.png" id="uitroepteken_voornaam" class="show">');
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
            }

            if(!empty($_POST["voornaam"])
                && !empty($_POST["naam"])
                && !empty($_POST["email"])
                && !empty($_POST["gebruikersnaam"])
                && !empty($_POST["wachtwoord1"])
                && !empty($_POST["wachtwoord2"])
                && !empty($_FILES["txtProfilePic"])
                && $_POST["wachtwoord1"] == $_POST["wachtwoord2"]){

                //trace($_FILES);
                $type = $_FILES["txtProfilePic"]["type"];
                list($width, $height) = getimagesize($_FILES["txtProfilePic"]["tmp_name"]);

                if($width == 190 && $height == 300 && $type == "image/png"){

                    $filename = $_POST['gebruikersnaam'].".png";
                    $path = WWW_ROOT.'/profilepic'.DS.$filename;

                    move_uploaded_file($_FILES['txtProfilePic']["tmp_name"],$path);

                    $user = $this->usersDAO->register($_POST['voornaam'],$_POST["naam"],$_POST["wachtwoord1"], $_POST['gebruikersnaam'],$_POST["email"]
                        ,$filename);
                    if(!empty($user)){
                        $_SESSION["user"] = $user;
                        $this->redirect("index.php");
                    }
                }
            }
        }
    }

}