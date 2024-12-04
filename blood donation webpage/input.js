document.getElementById("donorForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const bloodGroup = document.getElementById("bloodGroup").value.trim().toUpperCase();
    const lastDonation = document.getElementById("lastDonation").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const location = document.getElementById("location").value.trim();

    const donor = { name, bloodGroup, lastDonation, phone, location };

    const donors = JSON.parse(localStorage.getItem("donors")) || [];
    donors.push(donor);

    localStorage.setItem("donors", JSON.stringify(donors));

    alert("Donor registered successfully!");
    document.getElementById("donorForm").reset();
});