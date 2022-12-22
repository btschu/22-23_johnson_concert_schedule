const dateOfEvent = document.querySelectorAll('.event-date');

dateOfEvent.forEach(event => {
    const date = new Date(event.dateTime);
    // console.log(date);
    const currentDate = new Date();
    if (date < currentDate) {
        event.style.textDecoration = 'line-through';
    }
})