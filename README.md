# Atividade Prática Avaliativa – React.js

**Projeto:** Loja Virtual utilizando TypeScript  
**Alunos:** João Carlos e Luciandro Cabral

Durante o desenvolvimento do projeto, utilizei React.js e TypeScript, criando duas pastas principais: `components` e `pages`, para organizar os componentes reutilizáveis e as páginas do site.

Na pasta `components`, foram criados cinco componentes: Header, Menu, Footer, Button e Card. Também utilizei Props em dois componentes principais: Button, para receber textos e ações de clique, e Card, que utiliza uma interface do TypeScript para receber título, imagem, descrição e preço dos produtos.

Na página de produtos, criei um array com seis itens para preencher os cards automaticamente.

Para a navegação, instalei o `react-router-dom` e configurei no arquivo `App.tsx` o BrowserRouter, Routes e Route, criando as rotas `/home`, `/produtos`, `/sobre`, `/contatos` e `*`, responsável pela página 404. Também utilizei o componente Link para navegar entre as páginas sem recarregar o navegador.

Além disso, desenvolvi as páginas Sobre, para apresentar informações sobre o sistema, e Contatos, com um pequeno formulário contendo campos para nome e e-mail. Por fim, criei a página NotFound para identificar quando o usuário acessa uma rota inválida.

