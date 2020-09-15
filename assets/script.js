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

    // var text9am = document.querySelector("#text-9am").textContent;
    // console.log(text9am);

    // Click function saves text input to local storage
    $("button").click(function () {
        console.log("save button has been clicked");
        var textInput9 = $("#text-9am").val();
        var textInput10 = $("#text-10am").val();
        var textInput11 = $("#text-11am").val();
        var textInput12 = $("#text-12pm").val();
        var textInput13 = $("#text-13pm").val();
        var textInput14 = $("#text-14pm").val();
        var textInput15 = $("#text-15pm").val();
        var textInput16 = $("#text-16pm").val();
        var textInput17 = $("#text-17pm").val();
        
        localStorage.setItem("9AM", textInput9);
        localStorage.setItem("10AM", textInput10);
        localStorage.setItem("11AM", textInput11);
        localStorage.setItem("12PM", textInput12);
        localStorage.setItem("1PM", textInput13);
        localStorage.setItem("2PM", textInput14);
        localStorage.setItem("3PM", textInput15);
        localStorage.setItem("4PM", textInput16);
        localStorage.setItem("5PM", textInput17);
        
    });

  });