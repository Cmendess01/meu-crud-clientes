# 🚀 CRUD - Projeto Desafio

Este projeto é um **CRUD completo (Create, Read, Update, Delete)** desenvolvido em **Node.js**, com banco de dados **PostgreSQL** (ou MongoDB) e frontend opcional em **Next.js**.
Ele inclui **login, dashboard, tela CRUD**, e foi feito como parte de um desafio prático full stack.

---

## 📌 Funcionalidades

### ✅ Parte 1 – Missão Essencial

* [x] Login de usuário com senha
* [x] Dashboard simples após login
* [x] Tela CRUD (criar, listar, editar, deletar itens)

### ⭐ Parte 2 – Missões Bônus

* [ ] Gerenciamento de usuários (Admin, Gerente, Usuário)
* [ ] Sistema de permissões
* [ ] Busca e filtros no CRUD
* [ ] Gráficos na dashboard
* [ ] Interface estilizada com **Bootstrap/Tailwind**
* [ ] Containerização com **Docker**
* [ ] Frontend em **Next.js + TypeScript + shadcn/ui**
* [ ] Visualização de dados com **Metabase**

### 🤖 Parte 3 – Uso de IA

* Geração de boilerplate
* Scripts do banco de dados
* Componentes do frontend
* Relatório de IA incluso (prompts + ajustes manuais)

---

## 🛠️ Tecnologias Utilizadas

* **Backend:** Node.js + Express
* **Banco de Dados:** PostgreSQL ou MongoDB
* **Frontend:** Next.js + React (opcional)
* **Estilização:** TailwindCSS / Bootstrap
* **Autenticação:** JWT
* **Containerização:** Docker & Docker Compose

---

## 📂 Estrutura do Projeto

```
nome-do-repo/
├─ .gitignore
├─ .env.example
├─ README.md
├─ docker-compose.yml
├─ backend/
│  ├─ package.json
│  ├─ Dockerfile
│  ├─ src/
│  │  ├─ index.js
│  │  ├─ app.js
│  │  ├─ config/
│  │  ├─ routes/
│  │  ├─ controllers/
│  │  ├─ models/
│  │  ├─ middlewares/
│  │  ├─ migrations/
│  │  └─ seeds/
└─ frontend/
   ├─ package.json
   └─ src/
      ├─ pages/
      ├─ components/
      ├─ styles/
      └─ services/
```

---

## ⚙️ Como Rodar o Projeto

### 1️⃣ Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/nome-do-repo.git
cd nome-do-repo
```

### 2️⃣ Configurar Variáveis de Ambiente

Copie o `.env.example` para `.env` e edite conforme seu ambiente:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=cruddb
DB_USER=cruduser
DB_PASS=sua_senha
JWT_SECRET=sua_chave_secreta
ADMIN_EMAIL=admin@crud.com
ADMIN_PASSWORD=admin123
```

### 3️⃣ Rodar sem Docker

#### Backend

```bash
cd backend
npm install
npm run migrate   # se houver migrator
npm run seed      # cria usuário admin inicial
npm run dev
```

#### Frontend (opcional)

```bash
cd frontend
npm install
npm run dev
```

Acesse:

* Backend: `http://localhost:3000`
* Frontend: `http://localhost:3001` (ou porta configurada)

---

## 🐳 Rodando com Docker (recomendado)

### docker-compose.yml

```yaml
version: '3.8'
services:
  db:
    image: postgres:15
    restart: unless-stopped
    environment:
      POSTGRES_DB: cruddb
      POSTGRES_USER: cruduser
      POSTGRES_PASSWORD: sua_senha
    volumes:
      - db-data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  backend:
    build: ./backend
    restart: unless-stopped
    env_file:
      - ./backend/.env
    depends_on:
      - db
    ports:
      - "3000:3000"

volumes:
  db-data:
```

### Rodar os containers

```bash
docker-compose up --build
```

---

## 📑 Relatório de IA

Na pasta `/docs` você encontra o relatório documentando:

* Prompts utilizados
* Códigos gerados
* Ajustes manuais feitos

---

## 📌 Entregas

1. Repositório GitHub (código-fonte)
2. Aplicação rodando no servidor
3. Relatório de IA

---

## 👨‍💻 Autor

**Carlos Eduardo** – Projeto de desafio 7 dias

---


