<php

 $servidor = "localhost";
 $usuario = "root";
 $senha = "";
 $banco = "locadora";

 $conn = new mysqli($servidor, $usuario, $senha, $banco);

 if($conn -> connect_error){
     die("Conexão falhou: " . $conn -> connect_error);
 }