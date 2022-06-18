let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldo: number = 0;

function somarAoSaldo(soma: number): void {
    if(campoSaldo) {
        saldo += soma;
        campoSaldo.innerHTML = saldo.toString();
        limparSoma();      
    }
}

function limparSaldo(): void {
    if(campoSaldo) {
        saldo = 0;
        campoSaldo.innerHTML = saldo.toString();
        limparSoma();
    }
}

function limparSoma(): void {
    soma.value = "";
}

botaoAtualizar?.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar?.addEventListener('click', function () {
    limparSaldo();
});