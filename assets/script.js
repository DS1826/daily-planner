$(document).ready(function () {

    // Current Date Display for Header: Weekday, Month & Day
    const today = moment().format("dddd, MMMM Do");
    console.log(today);
    $("#currentDay").text(today);

    // Current Hour stores the integer for the current hour
    const currentHour = parseInt(moment().format("kA"));
    console.log(currentHour);

    // Each function will iterate over each textarea id to compare time block integer to current hour integer
    $(".description").each(function () {
        var id = parseInt($(this).attr("id"));
        console.log("Time Block Hour = " + id);
        console.log("Current Hour = " + currentHour);

        if (id < currentHour) {
            $(this).addClass("past");
        } else if (id > currentHour) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }

    });
    
    // My time blocks object array stores time and user task entry
    var myTimeBlocks = [
        {
        id: "9",
        task: ""
    },
    {
        id: "10",
        task: ""
    },
    {
        id: "11",
        task: ""
    },
    {
        id: "12",
        task: ""
    },
    {
        id: "13",
        task: ""
    },
    {
        id: "14",
        task: ""
    },
    {
        id: "15",
        task: ""
    },
    {
        id: "16",
        task: ""
    },
    {
        id: "17",
        task: ""
    }
    ]

    // Save button click event saves task to myTimeBlocks object array

    $(".saveBtn").on("click", function () {
        console.log("Save button has been clicked");
        var inputId = $(this).siblings(".description").attr("id");
        var userTasks = $(this).siblings(".description").children(".tasks").val();
        myTimeBlocks[inputId].task = userTasks;
        console.log(myTimeBlocks);
       
        storeTasks();
    });

    // Sets user tasks from myTimeBlocks object array to local storage string
    function storeTasks() {
        localStorage.setItem("User Tasks", JSON.stringify(myTimeBlocks));
    }
    

});