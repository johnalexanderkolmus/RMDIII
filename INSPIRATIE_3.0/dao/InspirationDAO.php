<?php

require_once WWW_ROOT . 'dao' . DIRECTORY_SEPARATOR . 'DAO.php';

class InspirationDAO extends DAO {

  public function selectAll() {
    $sql = "SELECT * 
    				FROM `inspiration`";
    $stmt = $this->pdo->prepare($sql);
    $stmt->execute();

    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }    

	public function selectById($id) {
		$sql = "SELECT * 
						FROM `inspiration` 
						WHERE `id` = :id";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':id', $id);
		$stmt->execute();
		$result = $stmt->fetch(PDO::FETCH_ASSOC);
		if($result){
			return $result;
		}
		return [];
	}

	public function selectByStudentId($student_id) {
		$sql = "SELECT * 
						FROM `feedback` 
						WHERE `student_id` = :student_id";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':student_id', $student_id);
		$stmt->execute();
		$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
		if($result){
			return $result;
		}
		return [];
	}

	public function delete($id) {
		$sql = "DELETE 
						FROM `feedback` 
						WHERE `id` = :id";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':id', $id);
		return $stmt->execute();
	}

	public function update($id, $data) {
		$errors = $this->getValidationErrors($data);
		if(empty($errors)) {
			$sql = "UPDATE `feedback` 
							SET `student_id` = :student_id, 
									`feedback` = :feedback
							WHERE `id` = :id";
			$stmt = $this->pdo->prepare($sql);
			$stmt->bindValue(':student_id', $data['student_id']);
			$stmt->bindValue(':feedback', $data['feedback']);
			$stmt->bindValue(':id', $id);
			if($stmt->execute()) {
				return $this->selectById($id);
			}
		}
		return false;
	}

	public function insert($data) {
		$errors = $this->getValidationErrors($data);
		if(empty($errors)) {
			$sql = "INSERT INTO `feedback` (`student_id`, `feedback`) 
							VALUES (:student_id, :feedback)";
			$stmt = $this->pdo->prepare($sql);
			$stmt->bindValue(':student_id', $data['student_id']);
			$stmt->bindValue(':feedback', $data['feedback']);
			if($stmt->execute()) {
				$insertedId = $this->pdo->lastInsertId();
				return $this->selectById($insertedId);
			}
		}
		return false;
	}

	public function getValidationErrors($data) {
		$errors = array();
		if(!isset($data['student_id'])) {
			$errors['student_id'] = 'field student_id has no value';
		}
		if(empty($data['feedback'])) {
			$errors['feedback'] = 'field feedback has no value';
		}
		return $errors;
	}

}