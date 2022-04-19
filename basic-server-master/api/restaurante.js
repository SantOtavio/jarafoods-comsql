inserirRota("/buscarRestaurante", (dados, resposta) => {
  console.log(dados);
  database(`SELECT * FROM RESTAURANTES`)
    .then((result) => {
      resposta(result);
    })
    .catch((erro) => {
      console.log("ERRO AO INSERIR USUARIO"),
        resposta({ message: "Usuario não foi inserido :(" });
    });
});

inserirRota("/buscarComidas", (dados, resposta) => {
  console.log(dados);
  database(`SELECT * FROM COMIDA WHERE ${dados.id} = COMIDA.RESTAURANTE_ID`)
    .then((result) => {
      console.log(result);
      resposta(result);
    })
    .catch((erro) => {
      console.log("ERRO AO INSERIR USUARIO"),
        resposta({ message: "Usuario não foi inserido :(" });
    });
});

inserirRota("/inserir_carrinho", (dados, resposta) => {
  console.log(dados);
  database(
    `INSERT INTO CARRINHO (ID , EMAILUSER , ID_COMIDA , RESTAURANTE_ID) VALUES (null ,"${dados.emailUser}", ${dados.idFood} , ${dados.idRestaurante})`
  )
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
