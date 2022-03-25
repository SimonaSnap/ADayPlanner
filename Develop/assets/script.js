//global variables
var body = document.body;

//place the current day under the description line in the header
var day = moment().format("dddd, MMMM Do");
$("#currentDay").text(day);

var currentHour = moment().hour();
var tableBody = document.getElementById('tbody');
var saveBtn = document.getElementById("saveBtn");
var task = document.createElement("input");



//adding the rows to the table
//for the morning
for (var i = 0; i < 12; i++)
{
    var tr = document.createElement("tr");
    tableBody.appendChild(tr);

    var section1 = document.createElement("td");
    var section2 = document.createElement("td");
    var section3 = document.createElement("td");

    tr.appendChild(section1);
    tr.appendChild(section2);
    tr.appendChild(section3);

    section1.textContent = 1 + i + " AM";
    section2.innerHTML = "<input></input>";
    var buttonImage = document.createElement("img");
    buttonImage.src = './assets/images/noun-save-2269969.png';
    buttonImage.style = 'width: 25px; height: 25px;';
    var saveBtn = document.createElement("button");
    saveBtn.appendChild(buttonImage);
    //saveBtn.innerHTML = "<img src='./assets/images/noun-save-2269969.png' style= 'width: 25px; height: 25px;'></img>"
    section3.appendChild(saveBtn);

    //section3.innerHTML = "<button><img src='./assets/images/noun-save-2269969.png' style= 'width: 25px; height: 25px;'></button>"

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
    section2.innerHTML = "<input></input>";
    section3.innerHTML = "<button><img src='./assets/images/noun-save-2269969.png' style= 'width: 25px; height: 25px;'></button>"

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


