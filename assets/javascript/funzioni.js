//Genera numero random
function numeroRandom(min, max)
{
    let risultato = Math.floor(Math.random() * max) + min;
    return risultato;
}