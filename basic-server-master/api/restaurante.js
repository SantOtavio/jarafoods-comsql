inserirRota("/buscarRestaurante", (dados, resposta) => {
    console.log(dados);
    database(`SELECT * FROM RESTAURANTES`)
      .then((result) => {
        resposta( result );
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
        resposta( result );
      })
      .catch((erro) => {
        console.log("ERRO AO INSERIR USUARIO"),
          resposta({ message: "Usuario não foi inserido :(" });
      });
  });