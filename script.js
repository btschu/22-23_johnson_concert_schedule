const dateOfEvent = document.querySelectorAll('.event-date');
const completedEvent = document.querySelectorAll('.event');

dateOfEvent.forEach(event => {
    const date = new Date(event.dateTime);
    // console.log(date);
    const currentDate = new Date();
    if (date < currentDate) {
        event.style.color = '#e51212';
        event.style.textDecoration = 'line-through';
        // hide elements
        // event.style.display = 'none';
    }
})