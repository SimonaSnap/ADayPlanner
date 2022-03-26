//global variables
var body = document.body;
var currentHour = moment().hour();
var tableBody = document.getElementById('tbody');

//place the current day under the description line in the header
var day = moment().format("dddd, MMMM Do");
$("#currentDay").text(day);

//this connects a button in a tr to a input in that tr
//then takes that specific inputs value and stores it to local storage
//key becomes the tr (zero-indexed) and the value is the last thing the user saved in that cell
function onSaveBtnClick(event)
{
    //this is in reference to the button clicked
    //therefore the value becomes the id.string of the button clicked converted to a integer - 100
    var inputId = parseInt(this.id) - 100;

    //thisInput and thisButton would then get the corresponding element in the pair
    var thisInput = document.getElementById(inputId.toString());
    //var thisButton = document.getElementById(this.id);

    //gets the input value
    var task = thisInput.value;

    //if not empty, saves it to localstorage
    if (task === "")
    {
    }
    else
    {
        localStorage.setItem(inputId.toString(), task);
    }
}


//adding the rows to the table
for (var i = 8; i < 18; i++)
{
    //creating the individual row and columns of the table
    var tr = document.createElement("tr");
    tableBody.appendChild(tr);

    var section1 = document.createElement("td");
    var section2 = document.createElement("td");
    var section3 = document.createElement("td");

    tr.appendChild(section1);
    tr.appendChild(section2);
    tr.appendChild(section3);

    //setting up the individual hour sections - or the first column
    //this if statment goes till 23 because i have originally set up for this loop to go through
    //all 24 hours of the day (and it does do it), and therefore if someone wants to change it back
    //i just needs to equal 0 and i < 24 not 18. I didn't have it in my to take away from this if
    //statement... i like it too much so i don't want to cut out the last else if statement and change 23 to 18.
    if (i < 11)
    {
        section1.textContent = (1 + i).toString() + " AM";
    }
    else if (i == 11)
    {
        section1.textContent = (1 + i).toString() + " PM";
    }
    else if (i > 11 && i < 23)
    {
        section1.textContent = (1 + (i - 12)).toString() + " PM";
    }
    else if (i == 23)
    {
        section1.textContent = (1 + (i - 12)).toString() + " AM";
    }

    //setting up the middle section - the second column
    var writeTask = document.createElement("input");
    writeTask.setAttribute("id", i.toString());
    writeTask.type = "text";
    writeTask.value = "";
    section2.appendChild(writeTask);
    //this takes the appended input above and sets its current value to what was last saved in that rows localStorage key set
    var value = localStorage.getItem(i.toString());
    if (value != null)
    {
        writeTask.value = value;
    }
    //section2.innerHTML = "<input></input>";

    //this sets the backgroundColor for the second column of the table off of the current hour
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

    //setting up the third section - the third column
    var buttonImage = document.createElement("img");
    buttonImage.src = './Develop/assets/images/noun-save-2269969.png';
    buttonImage.style = 'width: 30px; height: 30px;';
    var saveBtn = document.createElement("button");
    //the id attribute set below is set to change with the i which is great cause then its unique
    //and then can be linked to a corresponding input which also follows the i to string format (except it doesn't add 100,
    //cause then there would be two of the same id and therefore would not work)
    saveBtn.setAttribute("id", (i + 100).toString());
    //this then connects the button with the top function that will then store the individual task two inputs
    saveBtn.addEventListener("click", onSaveBtnClick);
    saveBtn.appendChild(buttonImage);
    section3.appendChild(saveBtn);
    //this sets the content of the saveBtn and section3 using innerHTML (there is also another commented out line with this format in section 2)
    //this is another way to approach the problem but innerHTML has security issues and it is highly recommended to stay away from using it
    //saveBtn.innerHTML = "<img src='./assets/images/noun-save-2269969.png' style= 'width: 25px; height: 25px;'></img>"
    //section3.innerHTML = "<button><img src='./assets/images/noun-save-2269969.png' style= 'width: 25px; height: 25px;'></button>"

    //when currentHour reaches the end of the day, everything gets cleared
    //new day = new toDo list
    if (currentHour == 24)
    {
        localStorage.clear();
    }

}

