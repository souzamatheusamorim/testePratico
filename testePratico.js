// Teste Prático JS
//Exercício 01 -
for (var i = 0; i < clientes.length; i++) {
  var nomeCompleto = clientes[i].nome.split(" ");
  var primeiroNome = nomeCompleto[0];
  var ultimoSobrenome = nomeCompleto[nomeCompleto.length - 1];
  console.log(ultimoSobrenome + ", " + primeiroNome);
}
// Exercício 2-
var novoNumero = numero.replace(/\D/g, '');
numeroFormatado = "(" + numeroFormatado.substring(0, 2) + ") " + numeroFormatado.substring(2, 3) + " " + numeroFormatado.substring(3, 7) + "-" + numeroFormatado.substring(7);
console.log(numeroFormatado);

// Exercício 3- Vai executar apenas
'A função é: c'
'A função é: d'


// Exercício 4- Vai ficar preso dentro da function d pois não está passando a chamada do resolve() 
// Obs: Na questão 01 foram necessárias correções nas aspas e chaves para executar o código “original”.


// TESTE PHP

// Exercício 1- 
echo $arrayDeClientes[1]->nome;

// Exercício 2- 
$nomes = array_keys($arrayDeNascimento);
$cliente1 = new stdClass();
$cliente1->nome = $nomes[0];
$cliente1->dataNascimento = $arrayDeNascimento[$nomes[0]];
$cliente2 = new stdClass();
$cliente2->nome = $nomes[1];
$cliente2->dataNascimento = $arrayDeNascimento[$nomes[1]];
$cliente3 = new stdClass();
$cliente3->nome = $nomes[2];
$cliente3->dataNascimento = $arrayDeNascimento[$nomes[2]];
$cliente4 = new stdClass();
$cliente4->nome = $nomes[3];
$cliente4->dataNascimento = $arrayDeNascimento[$nomes[3]];

$arrayDeClientes = [$cliente1, $cliente2, $cliente3, $cliente4];

foreach ($arrayDeClientes as $cliente) {
    echo $cliente->nome . ': ' . $cliente->dataNascimento . '<br>';
}


//Exercício 3- 
function compararDataNascimento($a, $b) {
    $dataNascimentoA = strtotime($a->dataNascimento);
    $dataNascimentoB = strtotime($b->dataNascimento);
    
    if ($dataNascimentoA < $dataNascimentoB) {
        return 1;
    } elseif ($dataNascimentoA > $dataNascimentoB) {
        return -1;
    } else {
        return 0;
    }
}
usort($arrayDeClientes, 'compararDataNascimento');

foreach ($arrayDeClientes as $cliente) {
 echo $cliente->nome . ' faz aniversário em: ' . $cliente->dataNascimento . '<br>';
}

// TESTE SQL

// Exercício 1-
INSERT INTO Parentesco (IdResponsavel, IdAluno, Parentesco) VALUES (1, 1, 'Pai');
INSERT INTO Parentesco (IdResponsavel, IdAluno, Parentesco) VALUES (2, 1, 'Mãe');
//OBS: Existe um erro de digitação na tabela parentesco, onde idResponsavel esta escrita de forma incorreta. Para a realização do teste optei por corrigir.
//Exercício 2-
SELECT 
    a.Nome AS 'Aluno',
    r1.Nome AS 'Responsável 1',
    p1.Parentesco AS 'Parentesco 1',
    r2.Nome AS 'Responsável 2',
    p2.Parentesco AS 'Parentesco 2'
FROM Aluno a
JOIN Parentesco p1 ON p1.IdAluno = a.Id
JOIN Responsável r1 ON r1.Id = p1.IdResponsável
LEFT JOIN (
    SELECT 
        p.IdAluno,
        r.Nome,
        p.Parentesco,
        ROW_NUMBER() OVER (PARTITION BY p.IdAluno ORDER BY r.Nome) AS 'NumParentesco'
    FROM Parentesco p
    JOIN Responsável r ON r.Id = p.IdResponsável
) p2 ON p2.IdAluno = a.Id AND p2.NumParentesco = 2
LEFT JOIN Responsável r2 ON r2.Id = p2.IdResponsável
WHERE p1.Parentesco IN ('Pai', 'Mãe')
    AND (p2.Parentesco IS NULL OR p2.Parentesco IN ('Pai', 'Mãe'))
ORDER BY a.Nome

// Exercício Bonus
 SELECT 
    a.Nome AS Aluno,
    r1.Nome AS Responsável1,
    p1.Parentesco AS Parentesco1,
    r2.Nome AS Responsável2,
    p2.Parentesco AS Parentesco2
FROM 
    Aluno a
    LEFT JOIN Parentesco p1 ON a.Id = p1.IdAluno AND p1.Parentesco = 'Pai'
    LEFT JOIN Responsável r1 ON p1.IdResponsável = r1.Id
    LEFT JOIN Parentesco p2 ON a.Id = p2.IdAluno AND p2.Parentesco = 'Mãe'
    LEFT JOIN Responsável r2 ON p2.IdResponsável = r2.Id;





