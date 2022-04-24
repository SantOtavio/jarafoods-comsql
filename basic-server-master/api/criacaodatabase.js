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


database(`CREATE TABLE IF NOT EXISTS RESTAURANTES (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(30) not null,
    PRECODELIEVERY varchar(30) not null,
    TIPOCOMIDA varchar(30) not null,
    IMAGEM varchar(9999999),
    USUARIOS_EMAIL varchar(150) not null,
    foreign key(USUARIOS_EMAIL) references USUARIOS(EMAIL)
    on delete cascade on update cascade
    )`).then(result => {
    console.log('TABELA CRIADA COM SUCESSO')
}).catch(erro => {
    console.log("TABELA COM ERRO NA CRIAÇÃO")
});

database(`CREATE TABLE IF NOT EXISTS COMIDA (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(30) not null,
    PRECOCOMIDA varchar(30) not null,
    IMAGEM varchar(99999999) not null,
    RESTAURANTE_ID INTEGER NOT NULL,
    foreign key(RESTAURANTE_ID) references RESTAURANTES(ID)
    on delete cascade on update cascade
    )`).then(result => {
    console.log('TABELA CRIADA COM SUCESSO')
}).catch(erro => {
    console.log("TABELA COM ERRO NA CRIAÇÃO")
});

database(`CREATE TABLE IF NOT EXISTS CARRINHO (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    EMAILUSER varchar(100) not null,
    ID_COMIDA INTEGER not null,
    RESTAURANTE_ID INTEGER NOT NULL,
    NOMECOMIDA varchar(100) NOT NULL,
    PRECOCOMIDA double not null,
    foreign key(RESTAURANTE_ID) references RESTAURANTES(ID)
    on delete cascade on update cascade,
    foreign key(EMAILUSER) references USUARIOS(EMAIL)
    on delete cascade on update cascade,
    foreign key(ID_COMIDA) references COMIDA(ID)
    on delete cascade on update cascade
    )`).then(result => {
    console.log('TABELA CRIADA COM SUCESSO')
}).catch(erro => {
    console.log("TABELA COM ERRO NA CRIAÇÃO")
});