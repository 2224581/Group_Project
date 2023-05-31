// Constructor object
function StreamingService(name, price, region, description, logo) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.availability = region;
    this.logo = logo;
}

// Set up initial data
var crunchyroll = new StreamingService("Crunchyroll", 8, "Multiple regions", "Best anime streaming service overall", "crunchyroll-logo.png");
var hidive = new StreamingService("Hidive", 5, "Multiple regions", "Inexpensive, carries uncensored content", "hidive-logo.png");
var netflix = new StreamingService("Netflix", 7, "Global", "Mix of popular anime and original creations", "netflix-logo.png");

var myStreamingServices = [crunchyroll, hidive, netflix];

// Function to dynamically update the table
function updateTable() {
    var tableHead = document.getElementById('head_data');
    tableHead.innerHTML = "<tr><th>Logo</th><th>Service Name</th><th>Price</th><th>Description</th><th>Availability</th></tr>";

    var tableBody = document.getElementById('table_data');
    tableBody.innerHTML = "";

    for (var i = 0; i < myStreamingServices.length; i++) {
        var service = myStreamingServices[i];
        var row = "<tr><td><img src='" + service.logo + "' alt='" + service.name + "' width='50'></td><td class=\"pN\">" + service.name + "</td><td>$" + service.price + "</td><td>" + service.description + "</td><td>" + service.availability + "</td></tr>";
        tableBody.innerHTML += row;
    }
}

// Prompt the user for new streaming service data
function addService() {
    var name = prompt("Enter the Streaming Service Name:");
    var price = parseFloat(prompt("Enter the price (in dollars):"));
    var description = prompt("Enter the description:");
    var region = prompt("(Optional) Enter where it is available:");
    var logo = prompt("(Optional) Enter the URL of the logo image:");

    var newService = new StreamingService(name, price, description, region, logo);
    myStreamingServices.push(newService);

    updateTable();
}

// Initial table population
updateTable();