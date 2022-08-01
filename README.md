# Projeto de teste para empresa Innova Connect

## Descrição do Projeto

<p >O projeto visa a criação de um cadastro de empresas instaladoras de painéis solares, podendo editar, excluir e visualizar os dados através de gráficos.</p>

### Funcionalidades

- [x] Cadastro das empresas
- [x] Atualização e exclusão das empresas cadastradas
- [x] Exibição dos dados
- [x] Gráficos de pizza para exibir quantidade de empresas por estado, marcas e porte da empresa.

## Ferramentas utilizadas

- vuetify
- chart.js
- cpf-cnpj-validator
- vue-the-mask
- randomcolor
- husky
- eslint

### Para instalar as dependências utilize o comando

```
yarn install
```

### Para executar o projeto em ambiente de desenvolvimento utilize o comando

```
yarn start
```

### Para executar testes unitários utilize o comando

```
yarn test:unit
```

### Para executar o eslint utilize o comando

```
yarn lint
```

### Uso do husk no projeto

Utilizado husk para que ao fazer um commit, execute o comando `yarn lint` fazendo que o projeto fique sempre organizado. Lembrando que irá executar o `yarn lint` antes de executar o commit.

### Acesse o projeto na seguinte url

https://teste-innova.herokuapp.com/
