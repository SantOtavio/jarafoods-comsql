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
