const form = document.getElementById("feedbackForm");
const reviewContainer = document.getElementById("reviewContainer");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    // Ambil data daripada form
    const name = document.getElementById("customerName").value;

    const branch = document.getElementById("visitedBranch");
    const branchText = branch.options[branch.selectedIndex].text;

    const review = document.getElementById("feedbackMessage").value;

    const displayReview = document.getElementById("displayReview").checked;

    const rating = document.querySelector('input[name="rating"]:checked').value;

    // Popup berjaya submit
    alert("Feedback submitted successfully!");

    // Paparkan review jika user benarkan
    if (displayReview) {

        let stars = "";

        for (let i = 0; i < rating; i++) {
            stars += "★";
        }

        for (let i = rating; i < 5; i++) {
            stars += "☆";
        }

        // Buang class active pada review lama
        document.querySelectorAll(".carousel-item").forEach(item => {
            item.classList.remove("active");
        });

        // Tambah review baru
        reviewContainer.insertAdjacentHTML("beforeend", `
            <div class="carousel-item active">
                <section class="review-box">

                    <h3>${name}</h3>

                    <p><strong>Branch:</strong> ${branchText}</p>

                    <p><strong>Rating:</strong> ${stars}</p>

                    <p><strong>Review:</strong> ${review}</p>

                </section>
            </div>
        `);

        // Pergi ke review terbaru
        const carousel = bootstrap.Carousel.getOrCreateInstance(
            document.getElementById("reviewCarousel")
        );

        carousel.to(document.querySelectorAll(".carousel-item").length - 1);
    }

    // Reset form
    form.reset();

});