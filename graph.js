document.addEventListener('DOMContentLoaded', () => {
    const iframe = document.querySelector('iframe');

    // Function to fetch real-time data
    const fetchData = () => {
        fetch('URL_TO_FETCH_REAL_TIME_DATA')
            .then(response => response.json())
            .then(data => {
                // Update iframe source with real-time data URL
                const newSrc = `https://thingspeak.com/channels/2503823/charts/1?data=${data}&bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Engine+temperature+graph&type=column&xaxis=Time&yaxis=Over+Heat+Level&yaxismax=4&yaxismin=0`;
                iframe.src = newSrc;
            })
            .catch(error => console.error('Error fetching real-time data:', error));
    };

    // Call fetchData function every 5 seconds (adjust interval as needed)
    setInterval(fetchData, 5000);
});
