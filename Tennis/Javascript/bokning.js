//Validering

let currentDate = new Date();

let year = currentDate.getFullYear();

let month = currentDate.getMonth() + 1;

let day = currentDate.getDate();

let hour = currentDate.getHours();

let minutes = currentDate.getMinutes ();

if (month < 10) {
    month = "0" + month;
}

if (day < 10) {
    day = "0" + day;
}

let dagensDatum = year + "-" + month + "-" + day; 

if (hour < 10) {
    hour = "0" + hour;
}

if (minutes < 10) {
    minutes = "0" + minutes;
}

let tidenNu = hour + ":" + minutes;

let datumElem = document.querySelector("#datum");
let tidElem = document.querySelector("#tid");

datumElem.setAttribute ("min", dagensDatum);
tidElem.setAttribute ("min", tidenNu);

function validering() {

    let currentDate = new Date();

    const förNamn = document.getElementById("fname").value;
    const efterNamn = document.getElementById("ename").value;
    const nummer = document.getElementById("nummer").value;
    const datum = document.getElementById("datum").value;
    const tid = document.getElementById("tid").value;

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

let hideResult = document.getElementById("anvandarData");
hideResult.style.display = "none";

let hideText = document.getElementById("dinBokning");
hideText.style.display = "none";

//LocalStorage
function saveBokForm(event) {

      if (!validering()) {
        return;
      }

      let bokningarArray = new Array();

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


      if (document.getElementById("bastu").checked === "true") {
        "bastu".checked = "ja";
      }

      bokningarArray.push(formData);
      
      localStorage.setItem("bokning", JSON.stringify(bokningarArray));
      

      console.log(JSON.parse(localStorage.getItem("bokning")));

      const anvandarData = document.getElementById("anvandarData");

      let tableArray = new Array();

      tableArray = JSON.parse(localStorage.getItem("bokning"));

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