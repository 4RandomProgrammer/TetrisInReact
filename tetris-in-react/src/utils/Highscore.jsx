export const setHighScore = ( { highscore } ) => {
    let local = getHighScore({name:'ReactrisPoints'});
    const newHighscore = parseInt(highscore)
    //console.log(highscore)
    local = parseInt(local);

    if(local < newHighscore) {
        localStorage.setItem('ReactrisPoints',`${newHighscore}`)
        document.cookie = `ReactrisPoints=${newHighscore};`
    }
    else {
        localStorage.setItem('ReactrisPoints',`${local}`)
        document.cookie = `ReactrisPoints=${local};`
    }
    
}

export const getHighScore = ({name}) => {

    const local = localStorage.getItem(name);

    if (local) {
        return local
    }
    //Caso de ter apenas o cookie;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();

    return 0;
}