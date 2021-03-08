<?php

header("Access-Control-Allow-Origin:*");
    require_once '../connect/conexao.php';
    
    if($_SERVER['REQUEST_METHOD'] === 'POST'){

        $username   = $_POST['username'];
        $nome       = $_POST['nome'];
        $cpf        = $_POST['cpf'];
        $celular    = $_POST['celular'];
        $email      = $_POST['email'];
        $senha      = $_POST['senha'];

        $sql = "INSERT INTO usuario VALUES ('$username', '$nome', '$cpf', '$celular', '$email', '$senha')";
        nonquery($sql);
        echo json_encode(array("msg" => "Método POST Efetuado"));

    } else {
        echo "conectado!";
    }

?>