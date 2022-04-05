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