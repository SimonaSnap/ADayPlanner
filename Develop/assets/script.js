//global variables
var body = document.body;

//place the current day under the description line in the header
var day = moment().format("dddd, MMMM Do");
$("#currentDay").text(day);

var currentHour = moment().hour();
var tableBody = document.getElementById('tbody');
var saveBtn = document.getElementById("saveBtn");



//adding the rows to the table
//for the morning
for (var i = 0; i < 12; i++)
{
    var tr = document.createElement("tr");
    tableBody.appendChild(tr);

    var section1 = document.createElement("td");
    var section2 = document.createElement("td");
    var section3 = document.createElement("td");
    section3.append(saveBtn);

    tr.appendChild(section1);
    tr.appendChild(section2);
    tr.appendChild(section3);


    section1.textContent = 1 + i + " AM";
    if (i < (currentHour - 1))
    {
        section2.style.backgroundColor = "whitesmoke";
    } else if (i == (currentHour - 1))
    {
        section2.style.backgroundColor = "lightcoral";
    } else
    {
        section2.style.backgroundColor = "lightgreen";
    }

}

//for the evening
for (var i = 12; i < 24; i++)
{
    var tr = mainTable.insertRow();

    var section1 = document.createElement("td");
    var section2 = document.createElement("td");
    var section3 = document.createElement("td");

    tr.appendChild(section1);
    tr.appendChild(section2);
    tr.appendChild(section3);

    section1.textContent = (1 + (i - 12)).toString() + " PM"
    if (i < (currentHour - 1))
    {
        section2.style.backgroundColor = "whitesmoke";
    } else if (i == (currentHour - 1))
    {
        section2.style.backgroundColor = "lightcoral";
    } else
    {
        section2.style.backgroundColor = "lightgreen";
    }
}


