const prompt = require ('prompt-sync')();

const elemPc = ['pedra','papel','tesoura']
var quest1;
let pc = [];
let elemPlayer=[];
let pcWin = 0;
let playerWin = 0;
let empate = 0;
var novamente = 'sim';

console.log()

while (novamente == 'sim') {

    if (novamente == 'sim'){
        empate = 0
        playerWin = 0
        pcWin = 0
    }

    console.log ('JOKENPÔ! ')

    console.log()

    quest1 = +prompt('Quantas vezes você quer jogar? ')

    console.log()

    
    for (var rodadas = 0; rodadas < quest1; rodadas++){
        console.log('sua vez. ')


        elemPlayer = prompt ('pedra, papel ou tesoura? ').toLowerCase();

        console.log('')

        console.log('vez do pc.')

        


        pc = Math.floor(Math.random() * elemPc.length );    
        if (pc == 0){
        console.log('pedra')
        } else if (pc == 1){
            console.log('papel')
        }else{
            console.log('tesoura')
        }

        console.log('')

        if (elemPlayer == 'pedra' && pc == 1){
            console.log ('vc perdeu. ')
            pcWin++ ;
        }


        if (elemPlayer == 'pedra' && pc == 2){
            console.log ('vc venceu. ')
            playerWin++ ;
        }


        if (elemPlayer == 'pedra' && pc == 0){
            console.log ('empate. ')
            empate++;
        }


        if (elemPlayer == 'papel' && pc == 0){
            console.log ('vc venceu. ')
            playerWin++;
        }


        if (elemPlayer == 'papel' && pc == 1){
            console.log ('empate. ')
            empate++;
        }


        if (elemPlayer == 'papel' && pc == 2){
            console.log ('vc perdeu. ')
            pcWin++;
        }


        if (elemPlayer == 'tesoura' && pc == 0){
            console.log ('vc perdeu. ')
            pcWin++;
        }

        if (elemPlayer == 'tesoura' && pc == 1){
            console.log ('vc venceu. ')
            playerWin++;
        }


        if (elemPlayer == 'tesoura' && pc == 2){
            console.log ('empate. ')
            empate++;
        }  

        console.log()
    }
    console.log('Resultado geral: ')

        console.log('empate');
        console.log(empate);
        
        console.log();

        console.log('player');
        console.log(playerWin)

        console.log()

        console.log('pc')
        console.log(pcWin)

        console.log();


        if (pcWin > playerWin){
            console.log ('o grande campeão é o pc !!! ')
        } else if (pcWin == playerWin){
            console.log ('Deu empate.')
        }else {
            console.log ('Você é o grande campeão !!!')
        }

        console.log()

        novamente = prompt ('Deseja jogar novamente? ').toLowerCase();
        if (novamente != 'sim'){
            console.log()
            console.log ('game Over ')

        }
   
} 

console.log()




        




