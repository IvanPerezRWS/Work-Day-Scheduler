
function dissplayDate () {
        // Current date header
        var currentDate = moment().format('dddd, MMMM Do');
        $('#currentDay').text(currentDate);

}

function saveButtonHandlers() {


$("#save0").on("click", () => {
    saveText(0);
});

$("#save2").on("click", () => {
    saveText(1);
});

$("#save3").on("click", () => {
    saveText(2);
});

$("#save4").on("click", () => {
    saveText(3);
});

$("#save5").on("click", () => {
    saveText(4);
});

$("#save6").on("click", () => {
    saveText(5);
});

$("#save7").on("click", () => {
    saveText(6);
});

$("#save8").on("click", () => {
    saveText(7);
});

$("#save9").on("click", () => {
    saveText(8);
});
}

//Save text into localStorage by array
function saveText(id) {

    //var dayPlanner = []
    

    // Get dayPlanner dataarray from localStorage
    var dataLoaded = JSON.parse(localStorage.getItem("dayPlanner"));

    // Get input text
    var inputText = $(`#input${id}`).val();

    // Store input text in localStorage array
    dataLoaded[id] = inputText;

    // Save new array to localStorage
    localStorage.setItem("dayPlanner", JSON.stringify(dataLoaded));

}

// Local storage setup
function storeLocalStorage() {

    // Get array of calendar activities
    var calendar = JSON.parse(localStorage.getItem("dayplanner"));

    // If nothing is saved, create new save of calendar array
    if (!calendar) {
        localStorage.setItem("dayPlanner", JSON.stringify([]));
        return;
    }

    // Create for loop to populate dayPlanner with events
    for (var i = 0; i < 9; i++) {
        var textAreaEl = $(`#input${i}`);
        if (calendar[i]) {
            textAreaEl.val(calendar[i]);
        }
    }
}

// Set colors of backround blocks
function colors() {
    
    // Get the value of current time
    var time = moment().format("H");

    // Set color for element
    for (var i = 0; i < 9; i++) {

        var hourBlock = $(`#input${i}`);

        var hour = hourBlock.attr("data-hour");

        if (time > hour) {
            hourBlock.addClass("bg-secondary");
        } else if (time < hour) {
            hourBlock.addClass("bg-success");
        } else if (time == hour) {
            hourBlock.addClass("bg-danger");
        }
    }
}

// Overarching program run script

function init() {

    // Get and display date
    dissplayDate();

    // Create event handlers for saved elements
    saveButtonHandlers();

    // Disaply date and save text to local storage
    // saveText();

    // Local storage setup
    storeLocalStorage();

    // Display proper colors for time block elements
    colors();
}

// Start script
init();




