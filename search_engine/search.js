document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const resultContainer = document.getElementById("resultContainer");

    // Load the dataset
    fetch("./search_engine/data.json")
        .then(response => response.json())
        .then(data => {
            searchInput.addEventListener("input", function () {
                const query = searchInput.value.toLowerCase();

                // Search the dataset for the 'title' column
                const result = data.find(item =>
                    item.title.toLowerCase().includes(query)
                );

                // Display relevant information
                if (result) {
                    resultContainer.innerHTML = `
                        <div>
                            <p><strong>Title:</strong> ${result.title}</p>
                            <p><strong>Inclusion score:</strong> ${result.incl_score}</p>
                            <p><strong>Success metric:</strong> ${result.SuccessMetric}</p>
                            <p><strong>Bechdel Score:</strong> ${result.Bechdel_score}</p>
                        </div>
                    `;
                } else {
                    resultContainer.innerHTML = "<p>Unfortunatly, we do not have enough informations of your go-to movie :(</p>";
                }
            });
        })
        .catch(error => {
            console.error("Error loading dataset:", error);
            resultContainer.innerHTML = "<p>Failed to load data.</p>";
        });
});

