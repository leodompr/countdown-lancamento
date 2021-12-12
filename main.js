'use strict';

const formatarDigito = (digito) => `0${digito}`.slice(-2); 

const atualizarTempo = (tempo) => {

    // Atualizar os dados no HTML 
    const segundos = document.getElementById("segundos")
    const minutos = document.getElementById("minutos")
    const horas = document.getElementById("horas")
    const dias = document.getElementById("dias")

    // Calculo dos segundos, minutos, horas e dias
    const qtdSegundos = tempo % 60;
    const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60);
    const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const qtdDias = Math.floor(tempo / (60 * 60 *24));

    // Formatar os digitos dos calculos anteriores
    segundos.textContent = formatarDigito(qtdSegundos);
    minutos.textContent = formatarDigito(qtdMinutos);
    horas.textContent = formatarDigito(qtdHoras);
    dias.textContent = formatarDigito(qtdDias);
}

    // Contagem
const contagemRegressiva = (tempo) => {
    const pararContagem = () => clearInterval(id);

    const contar = ()=> {
        if (tempo == 0){
            pararContagem();
        }
        atualizarTempo (tempo);
        tempo--;
    }

    const id = setInterval(contar, 1000);
}

// Calcular tempo a ser contado
const tempoRestante = () => {
    const dataEvento = new Date ('2022-05-25 20:00:00');
    const dataHoje = new Date ("2022-05-22 00:00:00");
    return Math.floor(dataEvento - dataHoje) /1000;
}


contagemRegressiva(tempoRestante());
