function canteiro() {
const altura = +prompt("Qual o tamanho do canteiro que você deseja adubar? Altura (m):")
const largura = +prompt("Qual o tamanho do canteiro que você deseja adubar? Largura (m):")

const tamanho = altura * largura
const res = tamanho * 0.5

alert(`A quantidade de húmus a ser usada é de ${res}kg`)
}

function vaso() {
    const tamanhoDoVaso = +prompt("Quantos litros tem o vaso que você quer plantar?")
    const volumeAdubo = (tamanhoDoVaso * 30) / 100
    const pesoAdubo = volumeAdubo * 0.5

    alert(`A quantidade de húmus a ser usada é de ${pesoAdubo}kg`)
}