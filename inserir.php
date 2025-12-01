<php
includes('conexao.php');

$newgame = $_POST['$newgame'];
$qtdnew = $_POST['$qtdnew'];
$generonew = $_POST['$generonew'];

if(empty($newgame) || empty($qtdgame)){
    echo "<script>alert('Preencha todos os campos!');window.location.href='repositor.html';</script>";
}
else{
    $sql = "INSERT INTO jogos(nome, quandidade) VALUES
    ('$newgame','$qtd','$generonew')";
}

if($conn -> query($sql) === TRUE){
    echo "<script>alert('Jogo adicionado com sucesso!');window.location.href='repositor.html';</script>";
}
else{
    echo "Erro: " . $sql . "<br>" . $conn -> error;
}
 $conn -> close();
?>63
