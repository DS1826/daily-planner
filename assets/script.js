$(document).ready(function () {

    // Current Date Display for Header: Weekday, Month & Day
    const today = moment().format("dddd, MMMM Do");
    console.log(today);
    $("#currentDay").text(today);

    // Current Hour stores the integer for the current hour
    const currentHour = parseInt(moment().format("hA"));
    console.log(currentHour);

    // Each function will iterate over each textarea id to compare time block integer to current hour integer
    $("textarea").each(function () {
        var id = parseInt($(this).attr("id"));
        console.log("Time Block Hour = " + id);
        console.log("Current Hour = " + currentHour);
        
        if (id < currentHour) {
            $(".description").addClass("future");
        } else if (id > currentHour) {
            $(".description").addClass("past");
        } else {
            $(".description").addClass("present");
        }

    });

  });