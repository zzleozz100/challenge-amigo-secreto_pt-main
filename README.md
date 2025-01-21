# Amigo Secreto

Este é um projeto simples para adicionar amigos a uma lista e realizar um sorteio de amigo secreto. O sorteio é feito em círculo, garantindo que cada participante sorteie apenas um amigo.

## Instalação

Siga os passos abaixo para instalar e configurar o projeto:

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/amigo-secreto.git
   ```
2. Navegue até o diretório do projeto:
   ```sh
   cd amigo-secreto
   ```

## Dependências

Este projeto não requer nenhuma dependência externa específica, apenas um navegador web para executar o HTML e JavaScript.

## Como Executar o Projeto

1. Abra o arquivo `index.html` no seu navegador.

## Uso

1. Adicione amigos à lista inserindo os nomes no campo de texto e clicando no botão "Adicionar".
2. Clique no botão "Sortear amigo" para realizar o sorteio dos amigos em círculo. O sorteio será exibido sequencialmente com um intervalo de 3 segundos entre cada sorteio.

## Estrutura do Projeto

- `index.html`: Arquivo HTML principal que contém a estrutura da página.
- `style.css`: Arquivo CSS para estilização da página.
- `app.js`: Arquivo JavaScript com a lógica para adicionar amigos, atualizar a lista e realizar o sorteio.
- `assets/`: Pasta contendo imagens utilizadas no projeto.

### Estilização (style.css)

O arquivo `style.css` contém as seguintes definições de estilo:

- **Cores Personalizadas**: Definidas usando variáveis CSS (e.g., `--color-primary`, `--color-secondary`).
- **Estilos Gerais**: Reset de margens e paddings, além de estilização para `body`, `main-content`, entre outros.
- **Banner**: Estilos para a seção do banner (`header-banner`).
- **Seção de Entrada**: Estilos específicos para a seção onde os nomes são inseridos (`input-section`).
- **Títulos**: Definições de estilo para os títulos (`main-title`, `section-title`).
- **Contêineres de Entrada e Botão**: Estilos para os contêineres e elementos de entrada e botões.
- **Listas**: Estilos para as listas de amigos e resultados (`ul`, `.result-list`).
- **Botão de Sortear**: Estilos específicos para o botão de sortear (`button-draw`).

