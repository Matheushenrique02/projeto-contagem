'use strict'

const formatar = (digito) => digito < 10? '0' + digito : digito 

const atualizar = (tempo) =>{
    const segundos = document.querySelector('#segundos')
    const minutos = document.querySelector('#minutos')
    const horas = document.querySelector('#horas')
    const dias = document.querySelector('#dias')

    const qtdSegundos = tempo % 60
    const qtdMinutos = Math.floor(tempo % (60 * 60) / 60) 
    const qtdHoras = Math.floor(tempo % (60 * 60 * 24) / (60 * 60)) 
    const qtdDias = Math.floor(tempo / (60 * 60 * 24)) 

    segundos.textContent = formatar(qtdSegundos)
    minutos.textContent = formatar(qtdMinutos)
    horas.textContent = formatar(qtdHoras)
    dias.textContent = formatar(qtdDias)

}

const contagemRegressiva = (tempo) =>{
    const paraTempo = () => clearInterval(id)
    const contar = () => {
        tempo --
        atualizar(tempo)
         if(tempo === 0){
            paraTempo()
        }
    }
   const id = setInterval(contar,1000)
}

const tempoRestante = () =>{
    const dataEvento = new Date ('2025-05-25 20:00:00 ')
    const hoje = Date.now()
    return Math.floor((dataEvento - hoje) / 1000)
}


contagemRegressiva(tempoRestante())