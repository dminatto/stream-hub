# Stream Hub API - DDD (Domain-Driven Design)

Este é um projeto de API para gerenciamento de vídeos, implementado utilizando o conceito de **Domain-Driven Design (DDD)**. A API oferece funcionalidades para gerenciar vídeos, incluindo operações como leitura e incremento de visualizações. A implementação segue uma arquitetura limpa e modular, baseada nos princípios de DDD.

## Funcionalidades

-   **Gerenciamento de vídeos**: Criação, listagem, visualização e atualização de vídeos.
-   **Incremento de visualizações**: O número de visualizações de um vídeo é automaticamente incrementado quando acessado.
-   **Categorias de vídeo**: Relacionamento entre vídeos e categorias.
-   **Arquitetura de DDD**: O projeto segue os conceitos de Domain-Driven Design (DDD) para garantir um código modular e escalável.

## Estrutura do Projeto

A estrutura do projeto foi organizada seguindo as melhores práticas de DDD:

```
app/
├── Application/
│   ├── Services/
│   │   ├── VideoService.php
├── Domain/
│   ├── Entities/
│   │   ├── Video.php
│   ├── Repositories/
│   │   ├── VideoRepositoryInterface.php
│   ├── ValueObjects/
│   │   ├── VideoDetails.php
├── Infrastructure/
│   ├── Repositories/
│   │   ├── EloquentVideoRepository.php
├── Http/
│   ├── Controllers/
│   │   ├── VideoController.php
└── Providers/
    ├── VideoServiceProvider.php

```

### Descrição das Pastas e Arquivos

1. **Application/Services/VideoService.php**: Contém a lógica de negócios para lidar com operações relacionadas aos vídeos.
2. **Domain/Entities/Video.php**: A classe de entidade que representa um vídeo. Contém regras de negócios associadas aos vídeos.
3. **Domain/Repositories/VideoRepositoryInterface.php**: Interface que define os métodos necessários para interagir com o repositório de vídeos.
4. **Domain/ValueObjects/VideoDetails.php**: Um objeto de valor que encapsula os detalhes do vídeo (como título, descrição, etc.).
5. **Infrastructure/Repositories/EloquentVideoRepository.php**: A implementação do repositório usando o Eloquent ORM do Laravel.
6. **Http/Controllers/VideoController.php**: Controlador que define os endpoints da API para manipulação dos vídeos.
7. **Providers/VideoServiceProvider.php**: Define a injeção de dependência do serviço de vídeo (VideoService).

## Tecnologias Utilizadas

-   **Laravel 8.x**: Framework PHP utilizado para o desenvolvimento da API.
-   **Docker & Sail**: Para criar um ambiente de desenvolvimento isolado e consistente.
-   **MySQL**: Banco de dados relacional utilizado para persistência.
-   **PHPUnit**: Framework de testes unitários para garantir a qualidade do código.

## Requisitos

-   **PHP 8.0+**
-   **Docker** (para usar o Sail)
-   **MySQL ou SQLite** (ou qualquer outro banco de dados de sua preferência)

## Instalação

### Passo 1: Clone o repositório

```bash
git clone https://github.com/seu-usuario/video-api.git
cd video-api
```

### Passo 2: Instale as dependências

Se estiver usando Docker e Sail, execute:

```bash
./vendor/bin/sail up -d
./vendor/bin/sail composer install
```

Ou, caso não esteja usando Sail:

```bash
composer install
```

### Passo 3: Configure o banco de dados

Copie o arquivo `.env.example` para `.env`:

```bash
cp .env.example .env
```

### Passo 4: Gere a chave de aplicação

```bash
php artisan key:generate
```

### Passo 5: Rode as migrações e seeders

```bash
php artisan migrate --seed
```

### Passo 6: Inicie o servidor

Se estiver usando Sail:

```bash
./vendor/bin/sail artisan serve
```

Ou, se não estiver usando Sail:

```bash
php artisan serve
```

A API estará disponível em `http://localhost:8000`.

## Documentação da API

A documentação da API está disponível via **Swagger UI** em:

```bash
http://localhost:8000/api/docs
```

Se você estiver usando Docker com Sail:

```bash
http://localhost/api/docs
```

## Instalação e Configuração

Siga os passos no **README** para configurar o ambiente de desenvolvimento e gerar a documentação da API com o Swagger.

## Tecnologias Utilizadas

-   **Laravel 8.x**: Framework PHP utilizado para o desenvolvimento da API.
-   **Docker & Sail**: Para criar um ambiente de desenvolvimento isolado e consistente.
-   **MySQL**: Banco de dados relacional utilizado para persistência.
-   **PHPUnit**: Framework de testes unitários para garantir a qualidade do código.
-   **Swagger**: Para gerar e documentar automaticamente a API.

---

Com isso, você tem um sistema de documentação Swagger funcionando com o seu projeto Laravel, o que facilita a integração e compreensão da API para qualquer desenvolvedor que trabalhar com o projeto no futuro.
