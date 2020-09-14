$(document).ready(function () {

    // Current Date Display for Header: Weekday, Month & Day
    const today = moment().format("dddd, MMMM Do");
    console.log(today);
    $("#currentDay").text(today);

    // Current hour variable
    const currentHour = moment().format("hA");
    console.log(currentHour);

    // console.log(moment("2020-09-14").isBefore("2020-09-15"));

    // const mPast = ("2020-09-14 09:00:00")

    // Current Time is After 9AM Today - TRUE
    console.log(m.isAfter(mPast));

  });