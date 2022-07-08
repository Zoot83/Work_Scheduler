# Scheduler

In this project I creteda webste that was create a schdeudule based on the objects that wewre added. What the project shoudl do is display a time sheet from 9am to 5pm and have all the events 
that were added to the schedule in order from when they are scheduled. The should have been different colors on the page indicated if it has passsed it is that hour or if it is before the alloted time on the 
scheduler. 

You are able to click on the add button ion the right hand side and have a display menu pop up that askes for the name of the even that you are trying to add. There should also be a remove button that clears all the information from the schedule.

## Authors

- [@marshallrizzuto](https://github.com/Zoot83)

Website:https://zoot83.github.io/Work_Scheduler/ 
## Features

- Javascript
- API's
- Moment
- Heirarchy 
- Understanding Functions
- Function returned values
- Local storage
- Query Selectors
- Arrays
- JSON
- Stringify



## Demo




## Usage/Examples

  In this snippet of code it demonstartes that ability to access and use moment js in the code to have the current time be generated. 

  function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }
