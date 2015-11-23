<?php

require_once WWW_ROOT . 'dao' . DIRECTORY_SEPARATOR . 'DAO.php';
//require_once WWW_ROOT . 'classes' . DIRECTORY_SEPARATOR . 'Config.php';

class UsersDAO extends DAO
{
    
    public function login($entry,$password){

        return $this->getUser($entry,$password);
    }

    public function register($firstname,$lastname,$username,$email,$password){
        return $this->insertUser($firstname,$lastname,$username,$email,$password);
    }

    public function question($id_user,$first_name,$last_name,$email,$comment){

        return $this->insertQuestion($id_user,$first_name,$last_name,$email,$comment);

    }

    public function getUser($entry,$password){

        $sql = "SELECT *
                FROM `user`
                WHERE (username = :entry AND `password` = :password)
                OR (email = :entry2 AND `password` = :password2)";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(':entry', $entry);
        $stmt->bindValue(':entry2', $entry);
        $securepassword = sha1(DAO::SALT.$password);
        $stmt->bindValue(':password', $securepassword);
        $stmt->bindValue(':password2', $securepassword);
        if($stmt->execute())
        {
            $user = $stmt->fetch(PDO::FETCH_ASSOC);
            if(!empty($user)){
                return $user;
            }
        }
        return array();
    }

    public function getUserById($id){
        $sql = "SELECT *
                FROM `user`
                WHERE `id` = :id";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(':id', $id);
        if($stmt->execute()){
            $user = $stmt->fetch(PDO::FETCH_ASSOC);
            if(!empty($user)){
                return $user;
            }
        }
        return array();
    }

    public function insertUser($firstname,$lastname,$username,$email,$password){
        $sql = "INSERT INTO user(firstname,lastname,username,email,password)
                VALUES(:firstname,:lastname,:username,:email,:password)";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(":firstname",$firstname);
        $stmt->bindValue(":lastname",$lastname);
        $stmt->bindValue(":username",$username);
        $stmt->bindValue(":email",$email);
        $securepassword = sha1(DAO::SALT.$password);
        $stmt->bindValue(":password",$securepassword);
        if($stmt->execute()){

            return $this->getUserById($this->pdo->lastInsertId());
        }
        return false;
    }

    /*public function insertQuestion($id_user,$first_name,$last_name,$email,$comment){
        $sql = "INSERT INTO questions(id_user,first_name,last_name,email,comment)
                VALUES(:id_user,:first_name,:last_name,:email,:comment)";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(":id_user",$id_user);
        $stmt->bindValue(":first_name",$first_name);
        $stmt->bindValue(":last_name",$last_name);
        $stmt->bindValue(":email",$email);
        $stmt->bindValue(":comment",$comment);
        if($stmt->execute()){

            return true;
        }
        return false;
    }

    public function getAllUsers(){

        $sql = "SELECT *
                FROM `rsvp_users`
                ORDER BY id DESC";
        $stmt = $this->pdo->prepare($sql);
        if($stmt->execute()){
            $user = $stmt->fetchAll(PDO::FETCH_ASSOC);
            if(!empty($user)){
                return $user;
            }
        }
        return array();

    }

    public function getParticipatedUsers($event_id){

        $sql = 'SELECT *
                FROM rsvp_users
                LEFT JOIN rsvp_events
                ON rsvp_events.id = rsvp_events.id
                WHERE rsvp_events.id = :event_id';
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(':event_id', $event_id);
        if($stmt->execute())
        {
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
            if(!empty($users)){
                return $users;
            }
        }
        return array();

    }

    public function getUserByIdComment($comment_id){

        $sql = 'SELECT *
                FROM users
                LEFT JOIN comments
                ON comments.id = comments.id
                WHERE comments.id = :comment_id';
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(':comment_id', $comment_id);
        if($stmt->execute())
        {
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
            if(!empty($users)){
                return $users;
            }
        }
        return array();


    }*/





}