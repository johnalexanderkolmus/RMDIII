<?php

//require_once WWW_ROOT . 'classes' . DIRECTORY_SEPARATOR . 'DatabasePDO.php';

class ProductsDAO{

    //public $pdo;

    public function __construct(){

       // $this->pdo = DatabasePDO::getInstance();


    }

    public function getProducts($limit)
    {
        $sql = "SELECT * FROM products
				ORDER BY likes
				DESC LIMIT :limit";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(':limit', $limit);
        if($stmt->execute())
        {
            $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
            if(!empty($products)){
                return $products;
            }
        }
        return array();
    }

    public function searchProducts($searchItem,$limit)
    {
        $sql = "SELECT * FROM products
				WHERE `name` != '' AND `name` LIKE :searchItem
				ORDER BY `likes`
				DESC LIMIT :limit";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(':limit', $limit);
        $stmt->bindValue(':searchItem', "%".$searchItem."%"); // % zoeken in de zin naar een woord %
        if($stmt->execute())
        {
            $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
            if(!empty($products)){
                trace($products);
                return $products;
            }
        }
        return array();
    }

    public function getProductById($id){

        $sql = "SELECT * FROM `products`
    			WHERE `id` = :id";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(':id', $id);
        if($stmt->execute())
        {
            $product = $stmt->fetch(PDO::FETCH_ASSOC);
            if(!empty($product)){
                return $product;
            }
        }
        return array();

    }

    public function insertComment($comment,$user_id,$product_id){

        $sql = "INSERT INTO comments(comment,user_id,product_id)
                VALUES(:comment,:user_id,:product_id)";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(":comment",$comment);
        $stmt->bindValue(":user_id",$user_id);
        $stmt->bindValue(":product_id",$product_id);

        if($stmt->execute()){


        }
        return false;

    }

    public function searchPosts($searchItem, $limit){

        $sql = "SELECT * FROM products
				WHERE name != ''
				AND name LIKE :searchItem
				LIMIT :limit";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(':limit', $limit);
        $stmt->bindValue(':searchItem', "%".$searchItem."%"); // % zoeken in de zin naar een woord %
        if($stmt->execute())
        {
            $posts = $stmt->fetchAll(PDO::FETCH_ASSOC);
            if(!empty($posts)){
                return $posts;
            }
        }
        return array();

    }

    public function insertProductToCart($user_id,$product_id){

        $sql = "INSERT INTO cart(user_id,product_id)
                VALUES(:user_id,:product_id)";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(":user_id",$user_id);
        $stmt->bindValue(":product_id",$product_id);
        $stmt->execute();

    }

    public function getAddedProducts($id){

        $sql = "SELECT *
                    FROM products
                    LEFT JOIN cart
                    ON products.id = cart.product_id
                    WHERE cart.user_id = :id";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(':id', $id);
        if($stmt->execute())
        {
            $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
            if(!empty($products)){
                return $products;
            }
        }
        return array();

    }

    public function countTotal($id){

        $sql = "SELECT SUM(price) AS totalprice
                    FROM products
                    LEFT JOIN cart
                    ON products.id = cart.product_id
                    WHERE cart.user_id = :id";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(':id', $id);
        if($stmt->execute())
        {
            $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
            if(!empty($products)){
                return $products;
            }
        }
        return array();

    }

    public function deleteProductFromBasket($id){

        $sql = "DELETE FROM `cart`
                WHERE id = :id";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(':id', $id);
        if($stmt->execute()){
            return true;
        }
        return false;
    }

    public function deleteProductsFromCart($id){

        $sql = "DELETE FROM `cart`
                WHERE user_id = :id";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(':id', $id);
        if($stmt->execute()){

        }
        return false;

    }

}