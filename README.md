# CRUD Policiais

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

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure e crie o banco de dados:**
   - Caso utilize o Sequelize com migrations:
     ```bash
     npx sequelize db:migrate
     ```

4. **Inicie a aplicação:**
   ```bash
   npm start
   ```
   O sistema estará disponível em `http://localhost:3000` (ou porta configurada).

## Contribuição

Sinta-se à vontade para contribuir com o projeto enviando pull requests com melhorias, correções ou novas funcionalidades.

## Licença

Este projeto está licenciado sob a licença MIT.

---
Desenvolvido por [w-jardim](https://github.com/w-jardim)
