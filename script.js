function extendTime() {
    const timeInput = document.getElementById('pickupTime');
    if (!timeInput.value) {
        alert("Please set a time first!");
        return;
    }

    let [hours, minutes] = timeInput.value.split(':').map(Number);
    let date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes + 15);

    const newTime = date.toTimeString().substring(0, 5);
    timeInput.value = newTime;
}

document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const meal = document.getElementById('mealType').value;
    const time = document.getElementById('pickupTime').value;

    // In a real app, you'd send this to a database. 
    // For now, we update the UI to show it works.
    document.getElementById('statusUpdate').innerHTML = 
        `✅ Order Confirmed! 1x ${meal} for ${time}. <br> 
        <em>Data sent to canteen kitchen.</em>`;
});
