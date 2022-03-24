//global variables
var body = document.body;

//place the current day under the description line in the header
var day = moment().format("dddd, MMMM Do");
$("#currentDay").text(day);

var mainTable = document.getElementById('mainTable');
//adding the rows to the table
//for the morning
for (var i = 0; i < 12; i++)
{
    var tr = mainTable.insertRow();

    var section1 = tr.insertCell();
    var section2 = tr.insertCell();
    var section3 = tr.insertCell();

    section1.textContent = (1 + i).toString() + " AM"
    section2.textContent = "alus"
    section3.textContent = "sula"
}

//for the evening
for (var i = 12; i < 24; i++)
{
    var tr = mainTable.insertRow();

    var section1 = tr.insertCell();
    var section2 = tr.insertCell();
    var section3 = tr.insertCell();

    section1.textContent = (1 + (i - 12)).toString() + " PM"
}
