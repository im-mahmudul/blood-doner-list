document.addEventListener("DOMContentLoaded", () => {
    const donorDisplay = document.getElementById("donorDisplay");
    const filterForm = document.getElementById("filterForm");
    const filterBloodGroupInput = document.getElementById("filterBloodGroup");
    const filterLocationInput = document.getElementById("filterLocation");
    const clearFiltersButton = document.getElementById("clearFilters");

    const displayDonors = (donors) => {
        donorDisplay.innerHTML = "";
        
        if (donors.length === 0) {
            donorDisplay.innerHTML = "<p>No donors found</p>";
            return;
        }

        donors.forEach(donor => {
            const donorItem = document.createElement("li");
            donorItem.innerHTML = `
                <strong>Name:</strong> ${donor.name} <br>
                <strong>Blood Group:</strong> ${donor.bloodGroup} <br>
                <strong>Last Donation:</strong> ${donor.lastDonation} <br>
                <strong>Phone:</strong> ${donor.phone} <br>
                <strong>Location:</strong> ${donor.location} <br>
            `;
            donorDisplay.appendChild(donorItem);
        });
    };

    const filterDonors = (donors, bloodGroup, location) => {
        return donors.filter(donor => {
            const matchesBloodGroup = donor.bloodGroup.toLowerCase().includes(bloodGroup.toLowerCase());
            const matchesLocation = donor.location.toLowerCase().includes(location.toLowerCase());
            return matchesBloodGroup && matchesLocation;
        });
    };

    // Load donors from localStorage
    let donors = JSON.parse(localStorage.getItem("donors")) || [];

    // Display all donors initially
    displayDonors(donors);

    // Apply filters on form submission
    filterForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const bloodGroup = filterBloodGroupInput.value;
        const location = filterLocationInput.value;

        const filteredDonors = filterDonors(donors, bloodGroup, location);
        displayDonors(filteredDonors);
    });

    // Clear filters
    clearFiltersButton.addEventListener("click", () => {
        filterBloodGroupInput.value = "";
        filterLocationInput.value = "";
        displayDonors(donors);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const donorDisplay = document.getElementById("donorDisplay");

    // Load donors from localStorage
    let donors = JSON.parse(localStorage.getItem("donors")) || [];

    // Function to display donors in the list
    const displayDonors = (donors) => {
        donorDisplay.innerHTML = "";
        donors.forEach((donor) => {
            const donorItem = document.createElement("li");
            donorItem.classList.add("donor-item");

            // Create and append donor info
            donorItem.innerHTML = `
                <h3>${donor.name}</h3>
                <p>Blood Group: ${donor.bloodGroup}</p>
                <p>Last Donation Date: ${donor.lastDonation}</p>
                <p>Phone: ${donor.phone}</p>
                <p>Location: ${donor.location}</p>
            `;

            donorDisplay.appendChild(donorItem);
        });
    };

    // Display all donors initially
    displayDonors(donors);

    // Filtering functionality (if you already have it in place)
    const filterForm = document.getElementById("filterForm");
    const filterBloodGroupInput = document.getElementById("filterBloodGroup");
    const filterLocationInput = document.getElementById("filterLocation");

    filterForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const bloodGroup = filterBloodGroupInput.value;
        const location = filterLocationInput.value;

        const filteredDonors = donors.filter((donor) => {
            const matchesBloodGroup = donor.bloodGroup.toLowerCase().includes(bloodGroup.toLowerCase());
            const matchesLocation = donor.location.toLowerCase().includes(location.toLowerCase());
            return matchesBloodGroup && matchesLocation;
        });

        displayDonors(filteredDonors);
    });

    // Clear filters
    const clearFiltersButton = document.getElementById("clearFilters");
    clearFiltersButton.addEventListener("click", () => {
        filterBloodGroupInput.value = "";
        filterLocationInput.value = "";
        displayDonors(donors);
    });
});