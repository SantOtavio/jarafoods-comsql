database(`CREATE TABLE IF NOT EXISTS TESTE (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(30),
    NUMERO int
    )`).then(result => {
    console.log('TABELA CRIADA COM SUCESSO')
}).catch(erro => {
    console.log("TABELA COM ERRO NA CRIAÇÃO")
});

database(`CREATE TABLE IF NOT EXISTS USUARIOS (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(30),
    PASSWORD VARCHAR(30),
    EMAIL VARCHAR(150) NOT NULL 
    )`).then(result => {
    console.log('TABELA CRIADA COM SUCESSO')
}).catch(erro => {
    console.log("TABELA COM ERRO NA CRIAÇÃO")
});