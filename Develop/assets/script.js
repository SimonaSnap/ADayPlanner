//global variables
var body = document.body;

//place the current day under the description line in the header
var day = moment().format("dddd, MMMM Do");
$("#currentDay").text(day);

var currentHour = moment().hour();
var tableBody = document.getElementById('tbody');



//adding the rows to the table
for (var i = 0; i < 24; i++)
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
    if (i < 11)
    {
        section1.textContent = 1 + i + " AM";
    }
    else if (i == 11)
    {
        section1.textContent = 1 + i + " PM";
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
    writeTask.type = "text";
    writeTask.value = "";
    writeTask.dataset.place = "written";
    section2.appendChild(writeTask);
    //section2.innerHTML = "<input></input>";

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
    buttonImage.src = './assets/images/noun-save-2269969.png';
    buttonImage.style = 'width: 30px; height: 30px;';
    var saveBtn = document.createElement("button");
    saveBtn.appendChild(buttonImage);
    section3.appendChild(saveBtn);
    //saveBtn.innerHTML = "<img src='./assets/images/noun-save-2269969.png' style= 'width: 25px; height: 25px;'></img>"
    //section3.innerHTML = "<button><img src='./assets/images/noun-save-2269969.png' style= 'width: 25px; height: 25px;'></button>"



    //making the application save the input
    tableBody.addEventListener("click", function (event)
    {
        event.stopImmediatePropagation();
        var submission = event.currentTarget;

        if (submission.matches("saveBtn"))
        {
            var task = submission.getAttribute("data-place");
            console.log(submission.parentElement.task.value);
        }

        var savedTasks = [];
        var task = writeTask.value;
        var inStorage = localStorage.getItem("task");
        if (null != inStorage)
        {
            savedTasks = inStorage.split(",");
        }

        console.log(writeTask.value);

        if (task === "")
        {
        }
        else
        {
            section2.textContent = task;
            savedTasks.push(task);
            localStorage.setItem("task", savedTasks.toString());
        }
    })

    function tasksWritten()
    {
        var allTasks = [];
        var taskStorage = localStorage.getItem("task");
        if (null != taskStorage)
        {
            allTasks = taskStorage.split(",");
        }

        for (var x = 0; x < allTasks.length; x++)
        {
            var savedTask = "";
            savedTask = allTasks.toString();
            var taskNode = document.createTextNode(savedTask);
            section2.appendChild(taskNode);
        }
    }
    tasksWritten();

    if (currentHour == 24)
    {
        localStorage.clear();
    }

}

