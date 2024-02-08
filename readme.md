# Node.js: API Rest com Express e MongoDB

### Sobre
API Rest para cadastrar recursos como livros, autores.  
Api dividida pacotes em controlador, em models, em rotas.   
Verbos HTTP para buscar corretamente os livros, cadastrar, atualizar e excluir fechando um CRUD completo.  
Conexão com o Mongo DB Atlas


### Funcionamento

- Atualize a url de conexão com o mongodb atlas
- rode o comando: `npm run dev` 

- Payload para cadastrar um livro:
{
    "id" : "String",
    "titulo" : "String",
    "autor" : "String", # Id do autor
    "editora" : "String",
    "numero" : "Int",
}

- Payload para cadastrar um ator:
{
    "nome": "String",
    "nacionalidade": "String"

}