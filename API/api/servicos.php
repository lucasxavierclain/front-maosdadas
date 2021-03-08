<?php
    require_once '../connect/conexao.php';

    $resultServico = query("SELECT * FROM cadastrarservico");
    
    while ($row = mysqli_fetch_assoc($resultServico)){
        $servico[] = $row;
    }

    header("Acess-Control-Allow-Origin:*");
    echo json_encode($servico);
                        
?>