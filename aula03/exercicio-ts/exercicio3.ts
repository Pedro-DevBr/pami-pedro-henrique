interface Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
}

function exibirLivro(Livro: Livro): void {
    console.log(
        `Título: ${Livro.titulo}\n
        Autor: ${Livro.autor}\n
        Ano Publicado: ${Livro.anoPublicacao}\n`);
}