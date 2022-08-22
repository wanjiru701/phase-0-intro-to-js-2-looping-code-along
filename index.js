function writeCards(CardsArr,cere){
    const thankYouCards=[];
    for (let i=0; i< CardsArr.length; i++) {
        thankYouCards.push(`Thank you, ${CardsArr[i]}, for the wonderful ${cere} gift!`)
    }
    return thankYouCards;
}

function countDown(startNo){
    while (startNo > 0) {
        console.log(startNo);
        startNo -= 1;
    }
    
        console.log(startNo);
}