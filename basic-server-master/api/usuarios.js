inserirRota("/buscar_usuario", (dados, resposta) => {
  console.log(dados);

  database(`SELECT * FROM USUARIOS`)
    .then((result) => {
      resposta({ list: result });
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

  if (!dados.idade) {
    return resposta({ erro: "É necessário preencher a idade" });
  }

  database(`INSERT INTO USUARIOS (NOME, PASSWORD, IDADE)
                VALUES ("${dados.nome}", "${dados.password}" , ${dados.idade})`)
    .then((result) => {
      console.log("USUARIO INSERIDO COM SUCESSO"),
        resposta({ message: "Usuario inserido com sucesso!" });
    })
    .catch((erro) => {
      console.log("ERRO AO INSERIR USUARIO"),
        resposta({ message: "Usuario não foi inserido :(" });
    });
});
