inserirRota("/buscar_usuario", (dados, resposta) => {
  console.log(dados);
  database(`SELECT EMAIL , ID FROM USUARIOS WHERE EMAIL = "${dados.email}" AND PASSWORD = "${dados.password}" `)
    .then((result) => {
      resposta( result );
    })
    .catch((erro) => {
      console.log("ERRO AO INSERIR USUARIO" , erro),
        resposta({ message: "Usuario não foi inserido :(" });
    });
});

inserirRota("/buscar_usuario_restaurante", (dados, resposta) => {
  console.log(dados);
  database(`SELECT USUARIOS.EMAIL , RESTAURANTES.ID FROM USUARIOS , RESTAURANTES 
  WHERE RESTAURANTES.USUARIOS_EMAIL = USUARIOS.EMAIL
  `)
    .then((result) => {
      console.log(result)
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
                VALUES ("${dados.nome}", "${dados.password}" , "${dados.email}")`)
    .then((result) => {
      console.log("USUARIO INSERIDO COM SUCESSO"),
        resposta({ message: "Usuario inserido com sucesso!" });
    })
    .catch((erro) => {
      console.log("ERRO AO INSERIR USUARIO"),
        resposta({ message: "Usuario não foi inserido :(" });
    });
});

inserirRota("/inserir_comida", (dados, resposta) => {
  console.log(dados);
  database(`INSERT INTO COMIDA (NOME, PRECOCOMIDA, IMAGEM, RESTAURANTE_ID)
                VALUES ("${dados.nomeComida}", "${dados.preco}" , "${dados.image}" , "${dados.restaurantID}")`)
    .then((result) => {
      console.log("USUARIO INSERIDO COM SUCESSO"),
      console.log(result),
        resposta({ message: "Comida cadastrada com sucesso" });
    })
    .catch((erro) => {
      console.log("ERRO AO INSERIR USUARIO"),
        resposta({ message: "comida nao cadastrada :(" });
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

  database(`INSERT INTO RESTAURANTES
                VALUES (null , "${dados.nome}", "${dados.precodelievery}" , "${dados.tipocomida}" , "${dados.imagem}" ,"${dados.email}")`)
    .then((result) => {
      console.log(dados.foodImageURL),
        resposta({ message: "Restaurante cadastrado com sucesso!" });
    })
    .catch((erro) => {
      console.log("ERRO AO CADASTRAR RESTAURANTE"),
        resposta({ message: "Restaurante não foi cadastrado :(" });
    });
});

