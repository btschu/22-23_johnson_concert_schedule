// these three functions are used to modify the date info from dateTime to display correctly on the date-container
const monthValue = function () {
  const getMonth = new Date(this.dateTime);
  const fullMonth = getMonth.toLocaleString("default", { month: "long" });
  return fullMonth;
};

const dayValue = function () {
  const getDay = new Date(this.dateTime);
  return getDay.getDate();
};

const weekdayValue = function () {
  const dayOfWeek = new Date(this.dateTime).getDay();
  return isNaN(dayOfWeek) ? null
    : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",][dayOfWeek];
};

// Event details being passed into the DOM
const eventData = [
  {
    // todo ***change this information for all new events
    dateTime: "12/08/2022",
    eventName: "South Triad Winter Concert",
    time: "7:00PM",
    location: "Storey Gym",
    // This information will populate automatically based off of the dateTime value
    month: monthValue,
    day: dayValue,
    weekday: weekdayValue,
  },
  {
    // todo ***change this information for all new events
    dateTime: "03/02/2023",
    eventName: "Johnson Band Solo/Ensemble Festival",
    time: "7:45AM - 2:45PM",
    location: "Johnson Band Room",
    // This information will populate automatically based off of the dateTime value
    month: monthValue,
    day: dayValue,
    weekday: weekdayValue,
  },
  {
    // todo ***change this information for all new events
    dateTime: "03/14/2023",
    eventName: "SE District JH Band Festival",
    time: "7:45AM - 2:45PM",
    location: "Storey Gym",
    // This information will populate automatically based off of the dateTime value
    month: monthValue,
    day: dayValue,
    weekday: weekdayValue,
  },
  {
    // todo ***change this information for all new events
    dateTime: "05/02/2023",
    eventName: "All-City Band",
    time: "7:00PM",
    location: "Storey Gym",
    // This information will populate automatically based off of the dateTime value
    month: monthValue,
    day: dayValue,
    weekday: weekdayValue,
  },
  {
    // todo ***change this information for all new events
    dateTime: "05/23/2023",
    eventName: "Final Concert",
    time: "7:00PM",
    location: "South High Auditorium",
    // This information will populate automatically based off of the dateTime value
    month: monthValue,
    day: dayValue,
    weekday: weekdayValue,
  },
];
