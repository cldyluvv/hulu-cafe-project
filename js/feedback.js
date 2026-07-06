const form = document.getElementById("feedbackForm");
const reviewContainer = document.getElementById("reviewContainer");

// Paparkan review yang disimpan dalam localStorage
function loadReviews() {

    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    reviews.forEach(item => {

        let stars = "";

        for (let i = 0; i < item.rating; i++) {
            stars += "★";
        }

        for (let i = item.rating; i < 5; i++) {
            stars += "☆";
        }

        reviewContainer.insertAdjacentHTML("beforeend", `
            <div class="carousel-item">
                <section class="review-box">

                    <h3>${item.name}</h3>

                    <p><strong>Branch:</strong> ${item.branch}</p>

                    <p><strong>Rating:</strong> ${stars}</p>

                    <p><strong>Review:</strong> ${item.review}</p>

                </section>
            </div>
        `);

    });

}

// Papar review yang disimpan bila page dibuka
loadReviews();

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

    // Simpan review jika user benarkan dipaparkan
    if (displayReview) {

        const reviewData = {
            name: name,
            branch: branchText,
            rating: rating,
            review: review
        };

        // Ambil review lama
        let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

        // Tambah review baru
        reviews.push(reviewData);

        // Simpan ke localStorage
        localStorage.setItem("reviews", JSON.stringify(reviews));

    }

    // Reset form
    form.reset();

    // Refresh page supaya review baru dipaparkan
    location.reload();

});