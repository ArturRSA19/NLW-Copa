function createMatch(player1, player2, hour){
    return `
    <li>
        <img src="Assets/icon-${player1}.svg" alt="Bandeira Da ${player1}">
        <strong>${hour}</strong>
        <img src="Assets/icon-${player2}.svg" alt="Bandeira De ${player2}">
    </li>
    `
}

let delay = -0.4;

function createCard(date, day, games) {
    delay = delay + 0.4;
    return `
        <div id="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>
            <ul>
                ${games}
            </ul>
        </div>
    `
}

document.querySelector('#cards').innerHTML = 

    createCard('20/11', 'domingo', 
    createMatch('qatar', 'ecuador', '13:00')) 

    +   // '+' para adicionar um card de jogos a seguir

    createCard('21/11', 'segunda', 
    createMatch('england', 'iran', '10:00') 
    + createMatch('senegal', 'netherlands', '13:00') 
    + createMatch('usa', 'wales', '16:00'))

    +   // '+' para adicionar um card de jogos a seguir

    createCard('22/11', 'terça', 
    createMatch('argentina', 'saudi', '07:00') 
    + createMatch('denmark', 'tunisia', '10:00') 
    + createMatch('mexico', 'poland', '13:00') 
    + createMatch('france', 'australia', '16:00')) 

    +   // '+' para adicionar um card de jogos a seguir

    createCard('23/11', 'quarta', 
    createMatch('morocco', 'croatia', '07:00') 
    + createMatch('germany', 'japan', '10:00') 
    + createMatch('spain', 'costarica', '13:00') 
    + createMatch('belgium', 'canada', '16:00')) 

    +   // '+' para adicionar um card de jogos a seguir

    createCard('24/11', 'quinta', 
    createMatch('switzerland', 'cameroon', '07:00') 
    + createMatch('uruguay', 'korea', '10:00') 
    + createMatch('portugal', 'ghana', '13:00') 
    + createMatch('brazil', 'serbia', '16:00')) 

    +   // '+' para adicionar um card de jogos a seguir

    createCard('25/11', 'sexta', 
    createMatch('wales', 'iran', '07:00') 
    + createMatch('qatar', 'senegal', '10:00') 
    + createMatch('netherlands', 'ecuador', '13:00') 
    + createMatch('england', 'usa', '16:00')) 

    +   // '+' para adicionar um card de jogos a seguir

    createCard('26/11', 'sábado', 
    createMatch('tunisia', 'australia', '07:00') 
    + createMatch('poland', 'saudi', '10:00') 
    + createMatch('france', 'denmark', '13:00') 
    + createMatch('argentina', 'mexico', '16:00')) 

    +   // '+' para adicionar um card de jogos a seguir

    createCard('27/11', 'domingo', 
    createMatch('japan', 'costarica', '07:00') 
    + createMatch('belgium', 'morocco', '10:00') 
    + createMatch('croatia', 'canada', '13:00') 
    + createMatch('spain', 'germany', '16:00')) 

    +   // '+' para adicionar um card de jogos a seguir


    createCard('28/11', 'segunda', 
    createMatch('cameroon', 'serbia', '07:00') 
    + createMatch('korea', 'ghana', '10:00')
    + createMatch('brazil', 'switzerland', '13:00')
    + createMatch('portugal', 'uruguay', '10:00'))

    +   // '+' para adicionar um card de jogos a seguir

    createCard('29/11', 'terça', 
    createMatch('ecuador', 'senegal', '07:00') 
    + createMatch('netherlands', 'qatar', '10:00') 
    + createMatch('iran', 'usa', '13:00') 
    + createMatch('wales', 'england', '16:00')) 

    +   // '+' para adicionar um card de jogos a seguir

    createCard('30/11', 'quarta', 
    createMatch('tunisia', 'france', '07:00') 
    + createMatch('australia', 'denmark', '10:00') 
    + createMatch('poland', 'argentina', '13:00') 
    + createMatch('saudi', 'mexico', '16:00')) 

    +   // '+' para adicionar um card de jogos a seguir

    createCard('1/12', 'quinta', 
    createMatch('croatia', 'belgium', '07:00') 
    + createMatch('canada', 'morocco', '10:00') 
    + createMatch('japan', 'spain', '13:00') 
    + createMatch('costarica', 'germany', '16:00')) 

    +   // '+' para adicionar um card de jogos a seguir

    createCard('02/12', 'sexta', 
    createMatch('korea', 'portugal', '07:00')
    + createMatch('ghana', 'uruguay', '10:00')
    + createMatch('switzerland', 'serbia', '13:00')
    + createMatch('cameroon', 'brazil', '16:00'))
    