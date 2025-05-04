# Stream Hub App

Interface de usuário para o Stream Hub, uma plataforma moderna de streaming de vídeo.

## Tecnologias Utilizadas

- React.js
- React Router para navegação
- Axios para requisições HTTP
- Styled Components para estilização
- React Player para reprodução de vídeo
- Jest e React Testing Library para testes

## Requisitos

- Node.js (versão 14.x ou superior)
- npm (versão 6.x ou superior)

## Instalação

1. Acesse o diretório do projeto:

   ```bash
   cd stream-hub-app
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   ```bash
   cp .env.example .env
   # Edite o arquivo .env com as configurações adequadas
   ```

## Execução

### Desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`

### Produção

```bash
npm run build
npm run start
```

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria uma build de produção
- `npm run start` - Inicia a aplicação em modo de produção
- `npm run test` - Executa os testes
- `npm run test:watch` - Executa os testes em modo watch
- `npm run lint` - Verifica o código com ESLint
- `npm run lint:fix` - Corrige automaticamente problemas de lint
- `npm run format` - Formata o código com Prettier

## Estrutura de Diretórios

```
/src
  /components        # Componentes reutilizáveis
    /ui              # Componentes de UI básicos
    /layout          # Componentes de layout
    /features        # Componentes específicos de features
  /pages             # Componentes de página
  /hooks             # Custom hooks
  /services          # Serviços e API clients
  /utils             # Funções utilitárias
  /context           # Context API
  /store             # Configuração do Redux
    /slices          # Redux slices
    /actions         # Redux actions
    /reducers        # Redux reducers
  /assets            # Imagens, fontes, etc.
  /styles            # Arquivos de estilo globais
  /types             # Definições de tipos (TypeScript)
  /constants         # Constantes da aplicação
```

## Recursos Principais

- **Catálogo de Vídeos**: Navegue por uma vasta biblioteca de conteúdo
- **Reprodutor de Vídeo**: Assistente de vídeo com controles personalizados
- **Recomendações**: Sugestões personalizadas baseadas em preferências

## Integração com API

O aplicativo se comunica com o Stream Hub API. As requisições são configuradas no diretório `/services` usando Axios.

```javascript
// Exemplo de configuração do cliente Axios
import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para adicionar token de autenticação
apiClient.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Interceptor para renovar token expirado
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    // Lógica de renovação de token
    // ...
  }
);

export default apiClient;
```

## Componentes Principais

- **AuthProvider**: Gerencia autenticação e autorização
- **VideoPlayer**: Reproduz streams de vídeo com controles customizados
- **ContentGrid**: Exibe o catálogo de vídeos em layout responsivo
- **SearchBar**: Interface para busca de conteúdo
- **UserProfile**: Componente para gerenciamento de perfil
- **Navigation**: Barra de navegação principal da aplicação

## Testes

```bash
# Executar todos os testes
npm run test

# Executar testes em modo watch
npm run test:watch

# Verificar cobertura de testes
npm run test:coverage
```

## Linting e Formatação

```bash
# Verificar código
npm run lint

# Corrigir automaticamente
npm run lint:fix

# Formatar código
npm run format
```

## Build para Produção

```bash
npm run build
```

Os arquivos de build serão gerados no diretório `build`, prontos para serem implantados em um servidor web.

## Deploy

```bash
# Exemplo de deploy para Vercel
npm run deploy
```

## Resolução de Problemas

### Erro ao iniciar o servidor de desenvolvimento

Tente limpar o cache e reinstalar as dependências:

```bash
npm cache clean --force
rm -rf node_modules
npm install
```

### Erro de CORS ao conectar com a API

Verifique se a URL da API está configurada corretamente no arquivo `.env` e se o backend está configurado para aceitar requisições do domínio do frontend.
