
function saveButtonHandlers() {


$("save1").on("click", () => {
    ServiceUIFrameContext(1);
});

$("save2").on("click", () => {
    ServiceUIFrameContext(2);
});

$("save3").on("click", () => {
    ServiceUIFrameContext(3);
});

$("save4").on("click", () => {
    ServiceUIFrameContext(4);
});

$("save5").on("click", () => {
    ServiceUIFrameContext(5);
});

$("save6").on("click", () => {
    ServiceUIFrameContext(6);
});

$("save7").on("click", () => {
    ServiceUIFrameContext(7);
});

$("save8").on("click", () => {
    ServiceUIFrameContext(8);
});

$("save9").on("click", () => {
    ServiceUIFrameContext(9);
});

}

//Save text into localStorage by array
function saveText(id) {

    var dayPlanner = []
    
    // Current date header
    var currentDate = moment().format('dddd, MMMM Do');
        $('#currentDay').text(currentDate);

    // Get dayPlanner dataarray from localStorage
    var dataLoaded = JSON.parse(localStorage.getItem("dayPlanner"));

    // Get input text
    var inputText = $(`#input${id}`).val();

    // Store input text in localStorage array
    dayPlanner[id] = inputText;

    // Save new array to localStorage
    localStorage.setItem('dayPlanner', JSON.stringify(dataLoaded));

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




/*
var dayPlanner = []


// Current date header
function currentDate() {
    var currentDate = moment().format('dddd, MMMM Do');
    $('#currentDay').text(currentDate);
}

// Save data to LocalStorage
function saveData() {
    localStorage.setItem("dayPlanner", JSON.stringify(dayPlanner));
}

function loadPlannerData() {
    var dataLoaded = JSON.parse(localStorage.getItem("dayPlannner"));

    if (dataLoaded) {
        dayPlanner = dataLoaded;
    }

    saveData()
    displayPlannerData()
}

*/





