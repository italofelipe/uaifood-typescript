# Desafio da Evnts:

Seja muito bem vindo a minha implementação do desafio para a vaga de Front End Developer da Evnts.

## Tecnologias usadas

Para a execução desse desafio, foram usadas as bibliotecas React, React Router DOM, Axios, Styled Components e Font Awesome. TypeScript,ES Lint e Prettier foram usados no modo de desenvolvimento, para detectar possíveis erros no código, embora algumas regras tenham sido desativadas.

### Como executar o projeto:

Para executar o projeto, basta clonar o repositório, e em seguida, instalar as dependências usando NPM ou YARN. Ambos exigem que voce tenha instalado na sua maquina o Node.js.

O comando para instalar as dependências é npm i ou yarn, dentro da pasta do projeto.
Caso nao tenha o Node instalado, segue abaixo o link. Ao instalar o Node, o npm é instalado por padrão.

Node: https://nodejs.org/en/

### Talk to the DEV (Motivação e escolhas)

Para executar o projeto, primeiro pensei em componentizar cada elemento que poderia ter dados próprios, ainda que esses dados fossem passados via props, e também componentizar elementos que podem disparar funções, como é o caso de botões, inputs e etc.

- Dado o grau de complexidade do projeto, não julguei necessário o uso de Redux. Percebi que o Redux seria uma solução totalmente "overkill" para a implementação desse desafio, seria como "matar um mosquito com um tanque de guerra". Particularmente, prefiro manter a aplicação o mais "enxuta" possível, e usar gerenciadores de estado somente se for necessário, pois lidar com actions e sagas (Redux Saga para side effects) aumenta consideravelmente a complexidade da aplicação, e ao meu ver, seria desnecessário usá-los para uma aplicação tão simples. Context API também poderia ser usado, mas entraria na questão que mencionei de manter a aplicação simples.

- Praticamente todos os elementos visuais da aplicação são feitos em Styled Components, uma ferramenta que possui uma escrita muito semelhante ao SASS, e dá "poderes" de estilização incríveis ao React. Prefiro esta abordagem à criação de classes nos elementos HTML renderizados no React. Styled Components deixa o CSS um pouco mais limpo e através das props, é possível deixar praticamente tudo dinâmico com pouquíssimas linhas, diferente do CSS, que precisariam ser criadas diferentes classes de acordo com eventos, hover e etc. Styled Components facilita muito a vida nesse aspecto, e acredito ser a solução mais inteligente e robusta para o desenvolvimento estilização em React nos dias de hoje.
- Para as rotas da aplicação, foi usado React Router DOM, que vem com uma API muito simples de se usar, e extremamente poderosa, sendo possivel transitar dados entre rotas com muita facilidade.

### Known issues:

- Apesar da simplicidade da aplicação, tive alguns problemas pessoais com o tempo e também envolvendo o limite de requisições imposta pela Zomato, portanto, já deixarei aqui o que nao foi implementado.

  - Componente de input de busca não redireciona o usuario para a listagem de restaurantes contendo os dados digitados quando o usuário já está na rota "/restaurants". Esse comportamento nao acontece quando o usuário está na rota "/".

  - Botão call to action de buscar: A maneira como o input foi pensado inicialmente não necessitava de um botão call to action, já que o input por si só já fazia o "trabalho pesado" de alterar o valor e passá-lo ao componente de form, que por sua vez, manda requisições GET ao endpoint passando como query String o valor do input, e renderiza as sugestões baseadas no retorno dessa requisição. A aplicação nao precisa de um evento "submit", uma vez que cada vez que o usuário digita, é acionado um "gatilho" que busca os dados com base no valor do input, tornando assim o botão inútil.

  - Busca por tipo de restaurante: Toda a lógica para essa feature foi feita, porém, a limitação de requests na API da Zomato praticamente a inviabilizou, tendo em vista que por 5 dias consecutivos, estourei o limite de requests (já já um representante deles vem bater na minha porta perguntando o que eu to fazendo pra consumir tantos dados assim, hehe) e assim, ficava limitado a fazer requests para pesquisar uma cidade ("/home") e listar os restaurantes na região ("/restaurants"). Os outros dois filtros foram implementados sem muitos problemas, uma vez que os dados necessários para sua implementação já estavam presentes na aplicação.

  - Double click nos filtros: Esse bug pode acontecer, os checkboxes as vezes não se comportam como esperado, necessitando double click para que seu efeito seja aplicado. Acredito que esse bug seja causado pela quantidade de calculos/funcoes que tenha que fazer e re-renderizar o componente de restaurantes, uma vez que nao fiz uso do useMemo ou useCallback
