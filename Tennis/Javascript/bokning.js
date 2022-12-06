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

//LocalStorage
function saveBokForm(event) {
    if (!validering()) {
        return;
      }

      let allaBokningar = new Array();

      allaBokningar = JSON.parse(localStorage.getItem("allaBokningar"));

    //Lagrar data från formuläret in i objektet bokFormData
    //ex: bokFormData.fname innehåller förnamn
    const bokFormData = {
        bana: document.getElementById("bana").value,
        förNamn: document.getElementById("fname").value,
        efterNamn: document.getElementById("ename").value,
        nummer: document.getElementById("nummer").value,
        datum: document.getElementById("datum").value,
        tid: document.getElementById("tid").value,
        bollar: document.getElementById("bollar").value,
        bokning: "TennisBana",
      };

      //Lagrar checkboxes från formuläret i egna objekt
      let checkBox = document.getElementById("bastu");
      localStorage.setItem("bastu", bastu.checked);

      checkBox = document.getElementById("omklHerr");
      localStorage.setItem("omklHerr", checkBox.checked);

      checkBox = document.getElementById("omklDam");
      localStorage.setItem("omklDam", checkBox.checked);

      checkBox = document.getElementById("hyraRacket");
      localStorage.setItem("hyraRacket", checkBox.checked);

      //Kontrollerar om boxarna är itryckta eller inte när man trycker på boka knappen
      let checked = JSON.parse(localStorage.getItem("bastu"));
        document.getElementById("bastu").checked = checked;

      checked = JSON.parse(localStorage.getItem("omklHerr"));
        document.getElementById("omklHerr").checked = checked;

      checked = JSON.parse(localStorage.getItem("omklDam"));
        document.getElementById("omklDam").checked = checked;

      checked = JSON.parse(localStorage.getItem("hyraRacket"));
        document.getElementById("hyraRacket").checked = checked;


      let bokningarArray = new Array();

      if (localStorage.getItem("bokningar")) {
        bokningarArray = JSON.parse(localStorage.getItem("bokningar"));
      }

      bokningarArray.push(bokFormData);
      bokningarArray.push(checkBox);

      localStorage.setItem("bokningar", JSON.stringify(bokningarArray));

      console.log(localStorage.getItem("bokningar")
      );
    console.log(JSON.parse(localStorage.getItem("bokningar")));
    window.location.href = "dinBokning.html";
}