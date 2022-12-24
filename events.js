const card = document.getElementById("card");

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

// Display Events from eventData (LOCATED IN events.js)
const populateEvents = (event) => {
  const currentDate = new Date();
  event = eventData;
  // loop through events and append new div for each event
  for (let i = 0; i < event.length; i++) {
    const eventDate = new Date(event[i].dateTime);
    const cardContent = document.createElement("div");
    card.appendChild(cardContent);
    cardContent.innerHTML = `
      <time id="event-data" class="event-date" datetime="${event[i].dateTime}">
          <div class="event-container">
            <div class="date-container">
              <span class="month">${event[i].month()}</span>
              <span class="day">${event[i].day()}</span>
              <span class="weekday">${event[i].weekday()}</span>
            </div>
            <div class="event-info-container">
              <h2 class="event-name">${event[i].eventName}</h2>
              <div class="time-location-container">
                <p>
                  <i class="fa-regular fa-clock font-awesome"></i>${event[i].time}<br>
                  <i class="fa-solid fa-earth-americas font-awesome"></i>${event[i].location}
                </p>
              </div>
            </div>
          </div>
      </time>`;

    // Cross out complete events
    if (eventDate < currentDate) {
      document.querySelectorAll(".event-name").forEach((e) => {
        // !use the line below to cross out only the event title
        e.style.textDecoration = "line-through";
        // !use the line below to cross out everything on the card
        // cardContent.style.textDecoration = "line-through";
        // !use the line below to hide all completed events
        // cardContent.style.display = 'none';
      });
    }
  }
  return eventData;
};

// on load
populateEvents();
