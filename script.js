const listOfZodiacs = ['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'];
const listOfColors = ['red','orange','yellow','green','cyan','azure','blue','violet','magenta','rose','white','black','brown'];
//Create a function to choose an element out of the array
const pickElement = (arr) => {
    const i = Math.floor(Math.random()*arr.length);
    return arr[i];
}
//Create a function to generate a random message
const createMessage = () => {
    const today = new Date().toLocaleDateString()
    const firstWord = pickElement(listOfZodiacs);
    let secWord = '';
    for (let i = 0; i >= 0; i++) {
        secWord = pickElement(listOfZodiacs);
        if (firstWord !== secWord)
            break;
        else
            continue;
    }
    const thirdWord = pickElement(listOfColors);
    return console.log('Your prediction for '+today+': you should avoid people with the Zodiac sign ' + firstWord +'. On the contrary, the ' + secWord + ' will bring you positive emotions today. You\'d also better to wear ' + thirdWord + ' clothes as this color will defend you from bad incidents and thoughts today.');
}

createMessage();
