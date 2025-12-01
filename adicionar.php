<?php
includes("conexao.php")
$nome = $_POST["nome"];


$sql = "INSERT INTO jogos(nome, quantidade, genero) VALUES
        ('$gamenew',$qtdnew,'$genero');"

if($sql->query()){
    Echo '<a herf="listajogo.php">Jogo cadastrado com sucesso! Veja a listade jogos diponiveis!!!<a/>'
}
else{
    echo 
}