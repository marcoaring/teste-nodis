# Teste para Front-End na Nodis
Esse projeto utiliza React com Gatsby e Styled Components em sua essência.

## &rsaquo; Dependências
- Node.js >= v8
- Yarn ou NPM (o projeto foi todo rodado em Yarn, inclusive os comandos aqui listados)

## &rsaquo; Instalando as Dependências
No seu terminal favorito execute o comando `yarn` para instalar as dependências do projeto.

## &rsaquo; Scripts
### &raquo; Desenvolvimento
- `yarn start`: Para subir o ambiente de desenvolvimento com a API de **desenvolvimento**
- `yarn start:hmg`: Para subir o ambiente de desenvolvimento com a API de **homologação**
- `yarn start:prod`: Para subir o ambiente de desenvolvimento com a API de **produção**

### &raquo; Build
- `yarn build:dev`: Para buildar com a API de **desenvolvimento**
- `yarn build:hmg`: Para buildar com a API de **homologação**
- `yarn build:prod`: Para buildar com a API de **produção**

### &raquo; Utils
- `yarn clean clean`: Para limpar a pasta public, _obs: todos os comandos de build rodam esse script_
- `yarn lint lint`: Executa lint com base no arquivo `.eslintrc`
- `yarn format`: Formata os arquivos com base no arquivo `.prettierrc`

## &rsaquo; Variáveis de ambiente
As variáveis de ambiente ficam nos arquivos `.env.development`, `.env.staging` e `.env.production` e o arquivo de script que gera o arquivo `environment.js` que é gerado em tempo de build é o `environment-config.js`.

Ao criar uma nova varíavel de ambiente é necessário também incluir no arquivo de script.

## &rsaquo; Páginas
A estrutura de páginas fica dentro da pasta `/src/pages`, cada uma com seu nome respectivo da rota.

Por exemplo, se a rota for de Produtos, o arquivo será chamado de produtos.js. Se for Detalhes do Produto, será detalhes-do-produto.js:

```
src/
  pages/
    detalhes-do-produto.js
    index.js
    produtos.js
```

## &rsaquo; Componentes
### &raquo; Svgs e Icon
Ao trabalhar com svgs, eu adicionei o código XML no componente `Svgs`, que fica na pasta `/src/components/svgs/index.js`. A cada novo ícone SVG é necessário criar uma tag `<symbol>` com seus paths e afins.

E para chamar esse SVG é só chamar o componente `Icon`: `<Icon name="NOME_DO_ID_DO_SVG" />`.

## Finalizando
Bom, é isso, qualquer dúvida é só mandar um e-mail para `contato@marcoaring.com.br`.
