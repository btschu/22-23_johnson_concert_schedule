const card = document.getElementById("card");

const eventData = [
  {
    dateTime: "12/08/2022",
    month: "December",
    day: 8,
    weekday: "Thursday",
    eventName: "South Triad Winter Concert",
    time: "7:00PM",
    location: "Storey Gym",
  },
  {
    dateTime: "03/02/2023",
    month: "March",
    day: 2,
    weekday: "Thursday",
    eventName: "Johnson Band Solo/Ensemble Festival",
    time: "7:45AM - 2:45PM",
    location: "Johnson Band Room",
  },
  {
    dateTime: "03/14/2023",
    month: "March",
    day: 14,
    weekday: "Tuesday",
    eventName: "SE District JH Band Festival",
    time: "7:45AM - 2:45PM",
    location: "Storey Gym",
  },
  {
    dateTime: "05/02/2023",
    month: "May",
    day: 2,
    weekday: "Tuesday",
    eventName: "All-City Band",
    time: "7:00PM",
    location: "Storey Gym",
  },
  {
    dateTime: "05/23/2023",
    month: "May",
    day: 23,
    weekday: "Tuesday",
    eventName: "Final Concert",
    time: "7:00PM",
    location: "South High Auditorium",
  },
];

// Display Events from eventData
const populateEvents = (event) => {
  const currentDate = new Date();
  event = eventData;

  for (let i = 0; i < event.length; i++) {
    const eventDate = new Date(event[i].dateTime);
    const cardContent = document.createElement("div");
    card.appendChild(cardContent);
    cardContent.innerHTML = `
      <time id="event-data" class="event-date" datetime="${event[i].dateTime}">
          <div class="event-container">
            <div class="date-container">
              <span class="month">${event[i].month}</span>
              <span class="day">${event[i].day}</span>
              <span class="weekday">${event[i].weekday}</span>
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

    // Remove or cross out complete events
    if (eventDate < currentDate) {
      // cardContent.style.textDecoration = "line-through";
      document.querySelectorAll(".event-name").forEach((e) => {
        e.style.textDecoration = "line-through";
        // hide elements
        // cardContent.style.display = 'none';
      });
    }
  }
  return eventData;
};

populateEvents();
