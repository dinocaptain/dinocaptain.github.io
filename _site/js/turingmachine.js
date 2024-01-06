
function createTape() {
    let tape = document.getElementById("turingTape");

    const row = tape.insertRow();
    for(let i=0; i<40; i++) {
        let cell = row.insertCell();

        cell.appendChild(document.createTextNode('_'));
    }
}

function scrollRight() {
    $('#scrollingDiv').animate(
        {scrollLeft:"+=56px"},
        "slow"
    );
}

function scrollLeft() {
    $('#scrollingDiv').animate(
        {scrollLeft:"-=56px"},
        "slow"
    );
}

//do 
createTape();
