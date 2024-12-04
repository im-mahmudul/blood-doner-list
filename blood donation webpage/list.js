const donors = JSON.parse(localStorage.getItem("donors")) || [];

document.getElementById("filterForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const bloodGroup = document.getElementById("filterBloodGroup").value.trim().toUpperCase();
    const location = document.getElementById("filterLocation").value.trim().toLowerCase();

    const filteredDonors = donors.filter((donor) => {
        const matchesBloodGroup = bloodGroup ? donor.bloodGroup === bloodGroup : true;
        const matchesLocation = location ? donor.location.toLowerCase().includes(location) : true;
        return matchesBloodGroup && matchesLocation;
    });

    displayDonors(filteredDonors);
});

document.getElementById("clearFilters").addEventListener("click", () => {
    displayDonors(donors);
    document.getElementById("filterBloodGroup").value = "";
    document.getElementById("filterLocation").value = "";
});

function displayDonors(donorList) {
    const donorDisplay = document.getElementById("donorDisplay");
    donorDisplay.innerHTML = "";

    if (donorList.length === 0) {
        donorDisplay.innerHTML = "<p>No donors found with the applied filters.</p>";
        return;
    }

    donorList.forEach((donor) => {
        const donorItem = document.createElement("li");
        donorItem.innerHTML = `<strong>${donor.name}</strong><br>Blood Group: ${donor.bloodGroup}<br>Location: ${donor.location}<br>Phone: ${donor.phone}<br>Last Donation: ${donor.lastDonation}`;
        donorDisplay.appendChild(donorItem);
    });
}

displayDonors(donors);