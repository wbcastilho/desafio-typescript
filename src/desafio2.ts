enum Profissao {
    Padeiro,
    Atriz,   
}

interface IPessoa {
    nome: string,
    idade: number,
    profissao: Profissao
}


let pessoa1: IPessoa = {
    nome: "maria",
    idade: 29,
    profissao: Profissao.Atriz
}
