inserirRota("/buscar_usuario", (dados, resposta) => {
  console.log(dados);

  database(`SELECT * FROM USUARIOS`)
    .then((result) => {
      resposta( result );
    })
    .catch((erro) => {
      console.log("ERRO AO INSERIR USUARIO"),
        resposta({ message: "Usuario não foi inserido :(" });
    });
});

inserirRota("/buscar_usuario_restaurante", (dados, resposta) => {
  console.log(dados);

  database(`SELECT EMAIL FROM USUARIOS 
  INNER JOIN RESTAURANTES
  ON RESTAURANTES.USUARIOS_EMAIL = USUARIOS.EMAIL 
  `)
    .then((result) => {
      resposta( result );
    })
    .catch((erro) => {
      console.log("ERRO AO INSERIR USUARIO"),
        resposta({ message: "Usuario não foi inserido :(" });
    });
});

inserirRota("/criar_usuario", (dados, resposta) => {
  console.log(dados);

  if (!dados.nome) {
    return resposta({ erro: "É necessário preencher o nome" });
  }

  if (!dados.password) {
    return resposta({ erro: "É necessário preencher a senha" });
  }

  database(`INSERT INTO USUARIOS (NOME, PASSWORD, EMAIL)
                VALUES ("${dados.nome}", "${dados.password}" , ${dados.email})`)
    .then((result) => {
      console.log("USUARIO INSERIDO COM SUCESSO"),
        resposta({ message: "Usuario inserido com sucesso!" });
    })
    .catch((erro) => {
      console.log("ERRO AO INSERIR USUARIO"),
        resposta({ message: "Usuario não foi inserido :(" });
    });
});


inserirRota("/cadastro_restaurante", (dados, resposta) => {
  console.log(dados);

  if (!dados.nome) {
    return resposta({ erro: "É necessário preencher o nome" });
  }

  if (!dados.precodelievery) {
    return resposta({ erro: "É necessário preencher o preco do delievery" });
  }

  if (!dados.tipocomida) {
    return resposta({ erro: "É necessário preencher o tipo de comida" });
  }

  database(`INSERT INTO RESTAURANTES (NOME, PRECODELIEVERY, TIPOCOMIDA , USUARIOS_EMAIL)
                VALUES ("${dados.nome}", "${dados.precodelievery}" , "${dados.tipocomida}" , "${dados.email}")`)
    .then((result) => {
      console.log("RESTAURANTE CADASTRADO COM SUCESSO"),
        resposta({ message: "Restaurante cadastrado com sucesso!" });
    })
    .catch((erro) => {
      console.log("ERRO AO CADASTRAR RESTAURANTE"),
        resposta({ message: "Restaurante não foi cadastrado :(" });
    });
});