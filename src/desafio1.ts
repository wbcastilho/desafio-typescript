//Exemplo 1
let employe1 = {
    code: 10,
    name: 'John'
}

//Exemplo 2
let employe2: {code: number, name: string} = {
    code: 10,
    name: "John"
};

//Exemplo 3
interface IEmploye {
    code: number,
    name: string
}

let employe3: IEmploye = {
    code: 10,
    name: "John"
}