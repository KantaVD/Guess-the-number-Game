function start1() {
    let antwoord1 = Math.ceil(Math.random() * 25); console.log(antwoord1);

    let naam1 = prompt("Welkom! Wat is je naam?", "speler 1");
    let guess1 = prompt("Hey " + naam1, "Voer een cijfer tussen de 1 en 25 in");
    let numberguess1 = Number(guess1);

    if (numberguess1 !== antwoord1) {
        let wrong1 = prompt("Helaas " + naam1 + ", het cijfer is niet " + numberguess1 + ". Probeer het nog eens.");
        let numberwrong1 = Number(wrong1);

        if (numberwrong1 !== antwoord1) {
            alert("Helaas " + naam1 + ", het cijfer is niet " + numberguess1 + ". Je hebt verloren");
        } else if (numberwrong1 === antwoord1) {
            alert("Goed geraden " + naam1 + "! Het cijfer was " + antwoord1 + "!");
        };

    } else if (numberguess1 === antwoord1) {
        alert("Goed geraden " + naam1 + "! Het cijfer was " + antwoord1 + "!");
    };
    let bye1 = alert("Dag " + naam1 + ". Tot de volgende keer")
};

//bonus


const start2 = function () {

    const chooseRange = function (numberlow, numberhigh) {
        const min = (Math.ceil(numberlow));
        const max = (Math.floor(numberhigh));
        const antwoord2 = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log("het te raden nummer is " + antwoord2);
        return antwoord2;
    };

    let naam2 = prompt("Welkom! Wat is je naam?", "speler 1");
    let minRangestring = prompt("Welkom " + naam2 + " Kies het laagste cijfer waartussen je wilt kiezen.");
    let maxRangestring = prompt("Kies het hoogste cijfer waartussen je wilt kiezen.");
    let minRange = Number(minRangestring);
    let maxRange = Number(maxRangestring);

    let antwoord2 = chooseRange(minRange, maxRange);

    let guess2 = prompt("Voer een cijfer tussen de " + minRange + " en " + maxRange + " in.");
    let numberguess2 = Number(guess2);

    let guesses = [];
    guesses[0] = numberguess2;



    for (numberOfTrys = 1; numberOfTrys < 5; numberOfTrys++) {
        let lastGuess = (guesses[(guesses.length) - 1]);


        // controle logjes
        /*
        console.log("de lijst met nummers na " + numberOfTrys + " ronden: " + guesses);
        console.log("type van keuze "+ typeof numberguess2);
        console.log("lengte: " + guesses.length);
        console.log("laatste: " + lastGuess);*/


        if (lastGuess === antwoord2) {
            //console.log("alswaar");
            alert("Gefeliciteerd! " + naam2 + ", je hebt het geraden, het antwoord is " + antwoord2);
            alert("Dag " + naam2 + ". Tot de volgende keer")
            return;

        } else if (lastGuess !== antwoord2); {
            //console.log("andersnietwaar");
            let nextguess = prompt("Helaas " + naam2 + ", het cijfer is niet " + lastGuess + ". Je hebt nog " + (5 - numberOfTrys) + " kansen.");
            let nextnumber = Number(nextguess);
            guesses.push(nextnumber);


            if (guesses.length === 5) {
                alert("Helaas " + naam2 + ", je hebt verloren.");
                alert("Dag " + naam2 + ". Tot de volgende keer");
            };
        };
    };
};