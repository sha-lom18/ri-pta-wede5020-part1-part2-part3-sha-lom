const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {

        let searchValue = searchInput.value.toLowerCase();

        let services = document.querySelectorAll(".service");

        services.forEach(function (service) {

            let text = service.textContent.toLowerCase();

            if (text.includes(searchValue)) {
                service.style.display = "block";
            } else {
                service.style.display = "none";
            }
            const accordionButtons =
                document.querySelectorAll(".accordion");

            accordionButtons.forEach(function (button) {

                button.addEventListener("click", function () {

                    const panel = this.nextElementSibling;

                    if (panel.style.display === "block") {
                        panel.style.display = "none";
                    } else {
                        panel.style.display = "block";
                    }
                    function openImage(imageSource) {

                        document.getElementById("lightbox").style.display = "flex";

                        document.getElementById("largeImage").src = imageSource;

                    }

                    function closeImage() {

                        document.getElementById("lightbox").style.display = "none";

                    }

                    const services = [
                        {
                            name: "Food Parcels",
                            description: "We give food to families and people in need."
                        },
                        {
                            name: "Shelter",
                            description: "We try to build shelters to those who needs it ."
                        },
                        {
                            name: "Financial Assistance",
                            description: "We support vulerable and Orphans who cannot afford basic needs."
                        },
                        {
                            name: "Orphan Support",
                            description: "We provide care and support to orphaned children."
                        }
                    ];


                    function displayServices(serviceData) {

                        const serviceList = document.getElementById("serviceList");

                        serviceList.innerHTML = "";

                        serviceData.forEach(function (service) {

                            serviceList.innerHTML += `
            <div class="service-card">
                <h2>${service.name}</h2>
                <p>${service.description}</p>
            </div>
        `;

                        });

                    }

                    document.getElementById("searchInput")
                        .addEventListener("input", function () {

                            const searchValue = this.value.toLowerCase();

                            const filteredServices = services.filter(function (service) {

                                return service.name.toLowerCase().includes(searchValue) ||
                                    service.description.toLowerCase().includes(searchValue);

                            });

                            displayServices(filteredServices);

                        });

                    displayServices(services);

                });
                document.getElementById("enquiryForm").addEventListener("submit", function (event) {

                    event.preventDefault();

                    let name = document.getElementById("name").value.trim();
                    let email = document.getElementById("email").value.trim();
                    let phone = document.getElementById("phone").value.trim();
                    let subject = document.getElementById("subject").value.trim();
                    let message = document.getElementById("message").value.trim();

                    let response = document.getElementById("response");

                    if (name === "" || email === "" || phone === "" ||
                        subject === "" || message === "") {

                        response.textContent = "Please complete all fields.";
                        return;
                    }

                    if (!email.includes("@") || !email.includes(".")) {
                        response.textContent = "Please enter a valid email address.";
                        return;
                    }

                    if (!/^\d{10}$/.test(phone)) {
                        response.textContent = "Enter a valid 10-digit phone number.";
                        return;
                    }

                    response.textContent = "Your enquiry has been validated successfully!";

                    document.getElementById("enquiryForm").reset();

                });

