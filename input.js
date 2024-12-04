document.addEventListener("DOMContentLoaded", () => {
    const donorForm = document.getElementById("donorForm");

    donorForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const bloodGroup = document.getElementById("bloodGroup").value;
        const lastDonation = document.getElementById("lastDonation").value;
        const phone = document.getElementById("phone").value;
        const location = document.getElementById("location").value;

        const donorData = {
            name,
            bloodGroup,
            lastDonation,
            phone,
            location
        };

        let donors = JSON.parse(localStorage.getItem("donors")) || [];
        donors.push(donorData);

        localStorage.setItem("donors", JSON.stringify(donors));
        alert("Donor Registered Successfully!");
        donorForm.reset();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const donorForm = document.getElementById("donorForm");
    const nameInput = document.getElementById("name");
    const bloodGroupInput = document.getElementById("bloodGroup");
    const lastDonationInput = document.getElementById("lastDonation");
    const phoneInput = document.getElementById("phone");
    const locationInput = document.getElementById("location");

    donorForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const donorData = {
            name: nameInput.value,
            bloodGroup: bloodGroupInput.value,
            lastDonation: lastDonationInput.value,
            phone: phoneInput.value,
            location: locationInput.value,
        };

        // Save to localStorage
        let donors = JSON.parse(localStorage.getItem("donors")) || [];
        donors.push(donorData);
        localStorage.setItem("donors", JSON.stringify(donors));

        // Clear the form after submission
        donorForm.reset();
        alert("Thank you for registering as a donor!");
    });
});