<?php
    require_once '../connect/conexao.php';

    $result = query("SELECT * FROM usuario");

    while ($linha = mysqli_fetch_assoc($result)){
        $produtos[] = $linha;
    }

    header("Access-Control-Allow-Origin:*");
    echo json_encode($produtos);
?>