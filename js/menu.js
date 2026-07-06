document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("searchMenu");
    const searchResult = document.getElementById("searchResult");

    const sections = document.querySelectorAll(".menu-section");
    const menuItems = document.querySelectorAll(".menu-table td");

    searchInput.addEventListener("keyup", function () {

        let keyword = searchInput.value.trim().toLowerCase();

        searchResult.innerHTML = "";

        // RESET (show original layout)
        if (keyword === "") {

            sections.forEach(function (section) {
                section.style.display = "block";
            });

            searchResult.style.display = "none";
            return;
        }

        // HIDE original tables
        sections.forEach(function (section) {
            section.style.display = "none";
        });

        // SHOW search grid (CSS handle layout)
        searchResult.style.display = "grid";

        let found = false;

        menuItems.forEach(function (item) {

            let title = item.querySelector("h3");

            if (title) {

                let menuName = title.textContent.toLowerCase();

                if (menuName.includes(keyword)) {

                    found = true;

                    // CREATE CARD ONLY (NO INLINE STYLE)
                    let card = document.createElement("div");

                    // optional class for extra control if needed
                    card.classList.add("search-card");

                    card.innerHTML = item.innerHTML;

                    searchResult.appendChild(card);
                }
            }
        });

        if (!found) {
            searchResult.innerHTML =
                "<h3 style='grid-column:1/-1; text-align:center; margin-top:20px;'>No menu found.</h3>";
        }
    });

});
