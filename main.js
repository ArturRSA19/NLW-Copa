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

    createCard('24/11', 'quinta', 
    createMatch('switzerland', 'cameroon', '07:00') 
    + createMatch('uruguay', 'korea', '10:00') 
    + createMatch('portugal', 'ghana', '13:00') 
    + createMatch('brazil', 'serbia', '16:00')) 

    +   // '+' para adicionar um card de jogos a seguir

    createCard('28/11', 'segunda', 
    createMatch('cameroon', 'serbia', '07:00') 
    + createMatch('korea', 'ghana', '10:00')
    + createMatch('brazil', 'switzerland', '13:00')
    + createMatch('portugal', 'uruguay', '10:00'))

    +   // '+' para adicionar um card de jogos a seguir

    createCard('02/12', 'sexta', 
    createMatch('korea', 'portugal', '07:00')
    + createMatch('ghana', 'uruguay', '10:00')
    + createMatch('switzerland', 'serbia', '13:00')
    + createMatch('cameroon', 'brazil', '16:00'))
    