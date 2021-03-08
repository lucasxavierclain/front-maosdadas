<?php
    require_once '../connect/conexao.php';

    $result = query("SELECT username, produto, categoria, valor, descricao, nome, cpf, celular, email
                    FROM cadastrarprodutos
                    INNER JOIN usuario 
                    ON id_usuario = username;");

    while ($linha = mysqli_fetch_assoc($result)){
        $produtos[] = $linha;
    }

    header("Access-Control-Allow-Origin:*");
    echo json_encode($produtos);
?>