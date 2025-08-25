# Testes de API - Backend Policiais

## Teste POST /policiais

- Requisição com dados já cadastrados:
  - Status: 500 (deveria ser 400, mas mensagem de erro está correta)
  - Resposta:
    {
      "error": "RG civil, RG militar ou CPF já cadastrado."
    }
  - ![POST erro já cadastrado](docs/post-erro-ja-cadastrado.png)

## Teste GET /policiais

- Requisição:
  - Status: 200 OK
  - Resposta:
    [
      {
        "id": 1,
        "rg_civil": "123456",
        "rg_militar": "654321",
        "cpf": "088.717.517-10",
        "data_nascimento": "1990-01-01T02:00:00.000Z"
      }
    ]
  - ![GET sucesso](docs/get-sucesso.png)

Ambos os testes funcionaram conforme esperado.
