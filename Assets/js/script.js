var timeDisplayEl = $('#time-display');
var eventInput = $("#event-input");
var tableEl = $("input");


// handle displaying the time
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }

$(".edit").click(function() {

    $(this).closest('tr').find('input').prop('disabled', false);

});
  
$('input').blur(function(){
  $(this).prop('disabled', true);
})

setInterval(displayTime, 1000);



// dealing with the time 
const tableItems = document.querySelectorAll(".time");

console.log(tableItems);
tableItems.forEach(function(userItem) {
  var timeID = userItem.getAttribute('id');
  console.log(timeID);

  if(timeID < moment().format("H")){
    userItem.classList.add("past");
  }else if(timeID > moment().format("H")){
    userItem.classList.add("future");
  }else if(timeID === moment().format("H")) {
    userItem.classList.add("present");
  }
});