<?php

$inspirationDAO = new InspirationDAO();

//GET /inspiration

$app->get('/inspiration/?',function() use ($inspirationDAO){
    header("Content-Type: application/json");
    echo json_encode($inspirationDAO->selectAll(), JSON_NUMERIC_CHECK);
    exit();
});

//GET /inspiration/:id

$app->get('/inspiration/:id/?', function($id) use ($inspirationDAO){
    header("Content-Type: application/json");
    echo json_encode($inspirationDAO->selectById($id), JSON_NUMERIC_CHECK);
    exit();
});

//POST /inspiration

$app->post('/inspiration/?', function() use ($app, $inspirationDAO){
    header("Content-Type: application/json");
    $post = $app->request->post();
    if(empty($post)){
        $post = (array) json_decode($app->request()->getBody());
    }
    echo json_encode($inspirationDAO->insert($post), JSON_NUMERIC_CHECK);
    exit();
});

//DELETE /inspiration/:id

$app->delete('/inspiration/:id/?', function($id) use ($inspirationDAO){
    header("Content-Type: application/json");
    echo json_encode($inspirationDAO->delete($id));
    exit();
});

//PUT /inspiration/:id

$app->put('/inspiration/:id/?', function($id) use ($app, $inspirationDAO){
    header("Content-Type: application/json");
    $post = $app->request->post();
    if(empty($post)){
        $post = (array) json_decode($app->request()->getBody());
    }
    echo json_encode($inspirationDAO->update($id, $post), JSON_NUMERIC_CHECK);
    exit();
});

//GET /inspiration/students/:student_id

$app->get('/inspiration/students/:student_id/?', function($student_id) use ($inspirationDAO){
    header("Content-Type: application/json");
    echo json_encode($inspirationDAO->selectByStudentId($student_id), JSON_NUMERIC_CHECK);
    exit();
});

