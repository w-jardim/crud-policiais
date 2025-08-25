
# CRUD Policiais

## Como clonar e iniciar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/w-jardim/crud-policiais.git
   cd crud-policiais
   ```

2. Instale as dependências e inicie o backend:
   ```bash
   cd backend
   npm install
   node index.js
   ```
   O backend estará disponível em http://localhost:3000

3. Em outro terminal, instale as dependências e inicie o frontend:
   ```bash
   cd frontend/frontend
   npm install
   npm start
   ```
   O frontend estará disponível em http://localhost:4200

Pronto! Basta acessar o sistema pelo navegador.

Este projeto é um sistema web para gerenciamento de policiais, permitindo cadastro, consulta, edição e remoção de registros de policiais. O objetivo é oferecer uma solução simples e funcional de CRUD (Create, Read, Update, Delete) focada no domínio de segurança pública.

## Funcionalidades

- **Cadastrar policial:** Inclusão de novos policiais com informações detalhadas.
- **Listar policiais:** Visualização de todos os registros cadastrados.
- **Editar policial:** Atualização de dados de policiais existentes.
- **Excluir policial:** Remoção definitiva de registros.

## Tecnologias Utilizadas

- **Node.js** — Ambiente de execução para JavaScript no backend.
- **Express.js** — Framework para criação de API e servidor web.
- **Sequelize** — ORM para integração com banco de dados relacional (ex: SQLite).
- **EJS** — Engine de templates para renderização das páginas.
- **Bootstrap** *(opcional)* — Framework CSS para uma interface responsiva.

## Estrutura do Projeto

```
crud-policiais/
├── models/          # Modelos de dados (Sequelize)
├── routes/          # Definição das rotas HTTP do sistema
├── views/           # Templates EJS para interface
├── public/          # Arquivos estáticos (CSS, JS, imagens)
├── app.js           # Arquivo principal da aplicação
└── package.json     # Gerenciamento de dependências e scripts
```

## Como Executar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/w-jardim/crud-policiais.git
   cd crud-policiais
   ```

# CRUD Policiais

Este projeto é um sistema completo de cadastro, listagem e gerenciamento de policiais, com backend em Node.js/Express e frontend em Angular. O objetivo é demonstrar um CRUD (Create, Read, Update, Delete) funcional, com integração entre as camadas e documentação de uso.

## Sumário
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Executar o Projeto](#como-executar-o-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [API - Endpoints](#api---endpoints)
- [Screenshots](#screenshots)
- [Possíveis Erros](#possíveis-erros)
- [Autor](#autor)

## Funcionalidades
- Cadastro de policiais
- Listagem de policiais
- Edição de dados
- Remoção de policiais
- Validação de dados
- Integração frontend-backend

## Tecnologias Utilizadas
- **Backend:** Node.js, Express, SQLite (ou outro banco, conforme configuração)
- **Frontend:** Angular
- **Outros:** dotenv, cors, body-parser

## Como Executar o Projeto

### 1. Clone o repositório
```bash
git clone https://github.com/w-jardim/crud-policiais.git
cd crud-policiais
```

### 2. Inicie o backend
```bash
cd backend
npm install
node index.js
```
O backend estará disponível em `http://localhost:3000`.

### 3. Inicie o frontend
```bash
cd frontend/frontend
npm install
npm start
```
O frontend estará disponível em `http://localhost:4200`.

### 4. Acesse o sistema
Abra o navegador e acesse: [http://localhost:4200](http://localhost:4200)

## Estrutura do Projeto
```
crud-policiais/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── db.js
│   ├── index.js
│   └── ...
├── frontend/
│   └── frontend/
│       ├── src/
│       └── ...
└── README.md
```

## API - Endpoints

- `GET /policiais` — Lista todos os policiais
- `POST /policiais` — Cadastra um novo policial
- `PUT /policiais/:id` — Atualiza um policial
- `DELETE /policiais/:id` — Remove um policial

Veja exemplos de uso e respostas no arquivo `backend/TESTES_API.md`.

## Screenshots

Imagens de exemplos de uso estão disponíveis na pasta `backend/docs/`.

- Cadastro realizado com sucesso: ![GET Sucesso](backend/docs/get-sucesso.png)
- Erro ao cadastrar policial já existente: ![POST Erro](backend/docs/post-erro-ja-cadastrado.png)

## Possíveis Erros
- Certifique-se de que as portas 3000 (backend) e 4200 (frontend) estão livres.
- Instale todas as dependências com `npm install` nas pastas correspondentes.
- Verifique o arquivo `.env` para configurações de ambiente.

## Autor
- [w-jardim](https://github.com/w-jardim)

---

Sinta-se à vontade para contribuir ou abrir issues!
