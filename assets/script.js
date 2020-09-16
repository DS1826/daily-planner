$(document).ready(function () {

    // Current Date Display for Header: Weekday, Month & Day
    const today = moment().format("dddd, MMMM Do");
    console.log(today);
    $("#currentDay").text(today);

    // Current Hour stores the integer for the current hour
    const currentHour = parseInt(moment().format("kA"));
    console.log(currentHour);

    /* Updates time blocks to feature past, present & future
    CSS Styles */
    $(".description").each(function () {
        var id = parseInt($(this).attr("data-type"));
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

    // Time block object array stores time and user task entries
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
    renderTasks();

    // Onclick saves user task entries to Time Block object arrray
    $(".saveBtn").on("click", function () {
        console.log("Save button has been clicked");
        var inputId = $(this).siblings(".description").attr("id");
        var userTasks = $(this).siblings(".description").children(".tasks").val();
        myTimeBlocks[inputId].task = userTasks;
        console.log(myTimeBlocks);
        
        
        storeTasks();
        renderTasks();

    });

    // Sets user tasks from myTimeBlocks object array to local storage string
    function storeTasks() {
        localStorage.setItem("userTasks", JSON.stringify(myTimeBlocks));
    }

    // Retrieves user tasks from local storage and renders to HTML DOM
        function renderTasks() {
        savedTasks = JSON.parse(localStorage.getItem("userTasks"));

        if (savedTasks) {
            myTimeBlocks = savedTasks;
        }
        console.log(savedTasks);
        $("#text-9am").text(savedTasks[0].task);
        $("#text-10am").text(savedTasks[1].task);
        $("#text-11am").text(savedTasks[2].task);
        $("#text-12pm").text(savedTasks[3].task);
        $("#text-13pm").text(savedTasks[4].task);
        $("#text-14pm").text(savedTasks[5].task);
        $("#text-15pm").text(savedTasks[6].task);
        $("#text-16pm").text(savedTasks[7].task);
        $("#text-17pm").text(savedTasks[8].task);

        storeTasks();
        }

        
    
    

   










});