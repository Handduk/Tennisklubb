//Validering

//lägger dagens datum i variablen currentDate
let currentDate = new Date();

//Tar ut året från currentDate och lägger den i variablen year
let year = currentDate.getFullYear();

//Tar ut månad
let month = currentDate.getMonth() + 1;

//Tar ut dag
let day = currentDate.getDate();

//Tar ut timmar
let hour = currentDate.getHours();

//Tar ut minuter
let minutes = currentDate.getMinutes ();

//Lägger till en "0" i månad ifall månaden är tidigare än oktober=10
if (month < 10) {
    month = "0" + month;
}

//Gör samma sak fast med dagar
if (day < 10) {
    day = "0" + day;
}

//lägger till dagens datum i dagensDatum i rätt format
let dagensDatum = year + "-" + month + "-" + day; 

//lägger till "0" i timmar ifall klockan är innan 10
if (hour < 10) {
    hour = "0" + hour;
}

//Gör samma sak fast med minuter
if (minutes < 10) {
    minutes = "0" + minutes;
}

//Lägger till tiden i rätt format
let tidenNu = hour + ":" + minutes;

//Tar ut första elementet
let datumElem = document.querySelector("#datum");
let tidElem = document.querySelector("#tid");

//Sätter minimum på dagens datum och nuvarande tid
datumElem.setAttribute ("min", dagensDatum);
tidElem.setAttribute ("min", tidenNu);

//Validering
function validering() {

    let currentDate = new Date();

    //Tar ut värdet från inputen och lägger i variabler
    const förNamn = document.getElementById("fname").value;
    const efterNamn = document.getElementById("ename").value;
    const nummer = document.getElementById("nummer").value;
    const datum = document.getElementById("datum").value;
    const tid = document.getElementById("tid").value;

    //Validering för alla fällt ifall det lämnas tomt
    if (förNamn.length < 1) {
        window.alert("Ogiltigt förnamn");
        return false;
    }

    if (efterNamn.length < 1) {
        alert("Ogiltigt efternamn");
        return false;
    }

    if (nummer.length < 10) {
        alert("Ogiltigt telefon nummer");
        return false;
    }

    if (datum < 1) {
        alert("Fyll i datum");
        return false;
    }

    if (tid < 1) {
        alert("Fyll i tid")
    }

    else {
        return true;
    }

}

//Gömmer bokningsrutan
let hideResult = document.getElementById("anvandarData");
hideResult.style.display = "none";

let hideText = document.getElementById("dinBokning");
hideText.style.display = "none";

//LocalStorage
function saveBokForm(event) {

    //om valideringen går igenom så fortsätts saveBokForm
      if (!validering()) {
        return;
      }

      let bokningarArray = new Array();

      //Lägger in all input i formData
      const formData = {
        Bana: document.getElementById("bana").value,
        FörNamn: document.getElementById("fname").value,
        EfterNamn: document.getElementById("ename").value,
        Nummer: document.getElementById("nummer").value,
        Datum: document.getElementById("datum").value,
        Tid: document.getElementById("tid").value,
        Bollar: document.getElementById("bollar").value,
        Bastu: document.getElementById("bastu").checked,
        OmklädningsrumHerr: document.getElementById("omklHerr").checked,
        OmklädningsrumDam: document.getElementById("omklDam").checked,
        RacketHyra: document.getElementById("hyraRacket").checked,
        bokning: "TennisBana",
      }


      if (localStorage.getItem("bokning")) {
        allaAnvandareArray = JSON.parse(localStorage.getItem("bokning"));
      }

      //Lägger in formData i array
      bokningarArray.push(formData);
      
      //lägger in arrayen i local storage i string form
      localStorage.setItem("bokning", JSON.stringify(bokningarArray));
      
      //Loggar arrayen i consolen
      console.log(JSON.parse(localStorage.getItem("bokning")));

      const anvandarData = document.getElementById("anvandarData");

      let tableArray = new Array();

      tableArray = JSON.parse(localStorage.getItem("bokning"));

      //Skriver över arrayen i variablen senasteBokningen
      const senasteBokningen = tableArray.pop();

    const värden = [
        senasteBokningen.Bana,
        senasteBokningen.FörNamn,
        senasteBokningen.EfterNamn,
        senasteBokningen.Nummer,
        senasteBokningen.Datum,
        senasteBokningen.Tid,
        senasteBokningen.Bollar,
        senasteBokningen.Bastu,
        senasteBokningen.OmklädningsrumHerr,
        senasteBokningen.OmklädningsrumDam,
        senasteBokningen.RacketHyra,
    ];

    const dataNamn = [
        "Bana:",
        "Förnamn:",
        "Efternamn:",
        "Mobilnummer:",
        "Datum:",
        "Tid:",
        "Extra bollar:",
        "Bastu:",
        "Omklädningsrum Herr:",
        "Omklädningsrum Dam:",
        "Hyra av racket:",
    ];

    //skapar en table för utskriften av bokningen
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");

    for (let i = 0; i < värden.length; i++) {
        const element = värden[i];
        const row = document.createElement("tr");

        const dataText = document.createTextNode(dataNamn[i]);
        const dataCell = document.createElement("td");
        dataCell.appendChild(dataText);

        const text = document.createTextNode(värden[i]);
        const cell = document.createElement("td");
        cell.appendChild(text);
        if (!(i == 4)) {
            cell.classList.add("capitalize");
        }

        row.appendChild(dataCell);
        row.appendChild(cell);

        tblBody.appendChild(row);

    }

    tbl.appendChild(tblBody);

    anvandarData.appendChild(tbl);

    //gömmer table innan man trycker på boka knappen
    if (hideResult.style.display === "none") {
        hideResult.style.display = "flex";
    }
    else {
        hideResult.style.display = "none";
    }

    if (hideText.style.display === "none") {
        hideText.style.display = "flex";
    }
    else {
        hideText.style.display = "none";
    }

    const element = document.getElementById("anvandarData");
    element.scrollIntoView({behavior: "smooth"});
}