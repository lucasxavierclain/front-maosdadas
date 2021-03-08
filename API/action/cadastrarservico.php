<?php

header("Access-Control-Allow-Origin:*");
    require_once '../connect/conexao.php';

    if($_SERVER['REQUEST_METHOD'] === 'POST'){

        $username   = $_POST['username'];
        $servico    = $_POST['servico'];
        $categoria  = $_POST['categoria'];
        $imagem     = $_POST['imagem'];
        $valor      = $_POST['valor'];
        $descricao  = $_POST['descricao'];

        $sql = "INSERT INTO cadastrarservico VALUES 
        ('$username', '$servico', '$categoria', '$imagem', '$valor', '$descricao') ";
        nonquery($sql);
        echo json_encode(array("msg" => "Método POST Efetuado"));

    } else {
        echo "conectado!";
    }

?>