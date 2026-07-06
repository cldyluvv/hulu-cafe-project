document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("bookingForm");

    const pax = document.getElementById("pax");
    const location = document.getElementById("location");
    const date = document.getElementById("date");
    const time = document.getElementById("time");

    const fullName = document.querySelector("input[type='text']");
    const phone = document.querySelector("input[type='tel']");
    const email = document.querySelector("input[type='email']");
    const notes = document.querySelector("textarea");

    // Available time slots
    const availableTimes = [
        "10:00 AM","10:30 AM","11:00 AM","11:30 AM",
        "12:00 PM","12:30 PM","1:00 PM","1:30 PM",
        "2:00 PM","2:30 PM","3:00 PM","3:30 PM",
        "4:00 PM","4:30 PM","5:00 PM","5:30 PM",
        "6:00 PM","6:30 PM","7:00 PM","7:30 PM",
        "8:00 PM","8:30 PM","9:00 PM"
    ];

    // Simpan booking
    let bookings = [];

    // Show available time slots
    function updateTimeSlots(){

        time.innerHTML = '<option value="">Select time</option>';

        if(date.value === "" || location.value === ""){
            return;
        }

        availableTimes.forEach(function(slot){

            let booked = bookings.some(function(book){

                return book.date === date.value &&
                       book.location === location.value &&
                       book.time === slot;

            });

            if(!booked){

                let option = document.createElement("option");
                option.value = slot;
                option.textContent = slot;

                time.appendChild(option);

            }

        });

    }

    location.addEventListener("change", updateTimeSlots);
    date.addEventListener("change", updateTimeSlots);

    // Submit booking
    form.addEventListener("submit", function(e){

        e.preventDefault();

        // Validation
        if(
            pax.value === "" ||
            location.value === "" ||
            date.value === "" ||
            time.value === "" ||
            fullName.value.trim() === "" ||
            phone.value.trim() === "" ||
            email.value.trim() === ""
        ){

            alert("Please complete all required fields.");
            return;

        }

        // Prevent double booking
        let duplicate = bookings.some(function(book){

            return book.location === location.value &&
                   book.date === date.value &&
                   book.time === time.value;

        });

        if(duplicate){

            alert("This time slot has already been booked.");

            updateTimeSlots();

            return;

        }

        // Save booking
        bookings.push({

            pax: pax.value,
            location: location.value,
            date: date.value,
            time: time.value,
            name: fullName.value,
            phone: phone.value,
            email: email.value,
            notes: notes.value

        });

        // Confirmation
        alert(
            "Reservation Successful!\n\n" +
            "Name: " + fullName.value +
            "\nPax: " + pax.value +
            "\nLocation: " + location.value +
            "\nDate: " + date.value +
            "\nTime: " + time.value +
            "\nPhone: " + phone.value +
            "\nEmail: " + email.value
        );

        form.reset();

        updateTimeSlots();

    });

});