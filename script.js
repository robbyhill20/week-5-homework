$(document).ready(function () {

    var clock = [8, 9, 10, 11, 12, 13, 14, 15, 16];
    //moment.js for current date
    var currentDate = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text(currentDate);
  

    //loop to update time
    clock.forEach(function (time, index) {
        var startTime = [];
        startTime.push(moment().hour(time).format("h A"));
        
        //Declare new var(s) and initialize to new el's
        var newDiv = $("<div>");
        var newSpan = $("<span>");
        var newTextInput = $("<input>");
        var newBtn = $("<button>");


        //appends items  
        $(".container").append(newDiv);
        $(".container").addClass("mb-5");

        newDiv.addClass("time-block input-group input-group-prepend");
        newDiv.attr("data-val", index);
        newDiv.append(newSpan);
        newSpan.addClass("input-group-text");
        newSpan.addClass("start-time")
        newSpan.text(startTime);
        newDiv.append(newTextInput);
        newTextInput.attr("type", "text");
        newTextInput.attr("data", "data-input" + index);
        newTextInput.addClass("form-control")
        newTextInput.attr("data", "data-text" + index);
        newTextInput.addClass("box" + index)
        newDiv.append(newBtn);
        newBtn.addClass("btn btn-outline-secondary");
       
        /* END */
       
    });
    
    
    
    //click function for save 
    $("button").on("click", function (event) {
        event.preventDefault();

        var textInput = $(this).siblings("input").attr("data");
        var textVal = $(this).siblings("input").val();
        localStorage.setItem(textInput,textVal);
        var lsVal = localStorage.getItem(textInput);
        $(this).siblings("input").text(lsVal);
        console.log(textVal)
    });

    $(".input-group-text").css("width", "100px");
    $("button").text("SAVE"); 
})

