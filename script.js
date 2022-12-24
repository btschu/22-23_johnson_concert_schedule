const card = document.getElementById("card");

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
