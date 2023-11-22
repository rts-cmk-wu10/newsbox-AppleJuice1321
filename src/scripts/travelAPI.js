export default (function () {
    if (!window.location.pathname.includes("index.html")) return

    fetch("https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=GIh5HEZpHXp8aQ1fvIEAR0bKzwYPWvQa")

        .then(function (response) {

            if (response.status === 200) {
                return response.json()

            } else {
                const ERROR = document.querySelector(".categoryTravel__dropdown")
                ERROR.innerText = "ups, noget gik galt. Prøv igen senere"

            }
        })

        // Hent data
        .then(function (travelData) {
            const CATEGORY_TRAVEL_DROP_DOWN = document.querySelector(".categoryTravel__dropdown")

            // Laver elementer for hver artikel
            travelData.results.forEach(function (travelArticles) {
                const ARTICLE = document.createElement("article")
                const IMG = (travelArticles.multimedia && travelArticles.multimedia[0].url) || ""

                ARTICLE.innerHTML = `
                <img class="articleImg" src="${IMG}">
                <div class="healthArticle__container">
                    <a class="healthHeading" href="${travelArticles.title}">${travelArticles.title}</a>
                    <p class="healthAbstract">${travelArticles.abstract}</p> 
                </div>
                    `
                CATEGORY_TRAVEL_DROP_DOWN.append(ARTICLE)
            })
        })

    // click event
    const CATEGORY_CLICK = document.querySelector(".categoryTravel__click")
    CATEGORY_CLICK.addEventListener("click", clickHandler)

    // toggle hide & un-hide dropdown
    function clickHandler() {
        const CATEGORY_DROPDOWN = document.querySelector(".categoryTravel__dropdown")
        CATEGORY_DROPDOWN.classList.toggle("hidden")
    }
})()