

let nomeHeroi = 'Cratus'


let xps = Number(prompt("Digite o seu xp(14para sair"))

while(xps !== 4){
    if(xps< 1.000){
        console.log("seu nivel é bronze ")

    }else if(xps >= 1.000 && xps <= 2.000){
        console.log("seu nivel é ferro")

    }else if(xps >= 2.001 && xps <= 5.000){
     console.log("seu nivel é  prata ouro")

    }else if(xps >= 5.002 && xps <= 8.000){
         console.log('seu nivel é platina')

    }else if(xps >= 8.001 && xps <= 9.000){
       console.log('seu nivel é ascendente')
    }else if(xps >= 9.001 && xps <= 10.000){
       console.log('seu nivel é imortal')
    }else if(xps >= 10.001){
       console.log('seu nivel é radiante')
    }

    console.log(`o heroi com nome de ${nomeHeroi} está no nivel de ${xps}. Meus parabens! pelos esforços`)




}


