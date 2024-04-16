/*const channelID = '2503823';
const apiKey = 'KF4HSJ4R6PFQJTZL';
async function checkEngineHealth() {
    const url = `https://api.thingspeak.com/channels/2503823/fields/1.json?api_key=KF4HSJ4R6PFQJTZL&results=2`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.feeds && data.feeds.length > 0) {
            const entry = data.feeds[0];
            const fieldValue = entry.field1; // Adjust this based on your channel's field
            document.getElementById('engineStatus').innerText = `Engine Status: ${engineStatus}`;
        } else {
            document.getElementById('engineStatus').innerText = 'No data available';
        }
    } catch (error) {
        console.error('Error fetching engine health data:', error);
        document.getElementById('engineStatus').innerText = 'Error fetching data';
    }
}*/
// Define your ThingSpeak channel ID and read API key
/*const channelID = '2503823';
const apiKey = 'QGA54KWXR9XR6UTO';

// Function to open the ThingSpeak API link in a new tab
function openGraph() {
    const url = `https://thingspeak.com/channels/2503823/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Engine+temperature+graph&type=column&xaxis=Time&yaxis=Over+Heat+Level&yaxismax=4&yaxismin=0`;
    window.open(url, '_blank');
}*/
// Function to create and update the engine health chart
function updateChart() {
    // Get the canvas element
    const canvas = document.getElementById('engineChart');
    // Get the 2D context for the canvas
    const ctx = canvas.getContext('2d');

    // Sample data for the chart (you can replace this with actual data)
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Engine Health',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };

    // Create the chart using Chart.js
    const engineChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Call the updateChart function when the page loads
document.addEventListener('DOMContentLoaded', () => {
    updateChart();
});


