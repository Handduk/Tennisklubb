

const onload = (window.onload = (event) => {
    const anvandarData = document.getElementById("anvandarData");

    let allaBokningar = new Array();

    allaBokningar = JSON.parse(localStorage.getItem("bokningar"));

    const senasteBokningen = allaBokningar.pop();

    const värden = [
        senasteBokningen.bana,
        senasteBokningen.förNamn,
        senasteBokningen.efterNamn,
        senasteBokningen.nummer,
        senasteBokningen.datum,
        senasteBokningen.tid,
        senasteBokningen.bollar,
        senasteBokningen.checkBox,
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

});