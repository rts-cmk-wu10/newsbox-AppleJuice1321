export default (function () {

    if (!window.location.pathname.includes("index.html")) return



    fetch("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=GIh5HEZpHXp8aQ1fvIEAR0bKzwYPWvQa")

        .then(function (response) {

            if (response.status === 200) {
                return response.json()

            } else {
                const ERROR = document.querySelector(".categoryWorld__dropdown")
                ERROR.innerText = "ups, noget gik galt. Prøv igen senere"

            }
        })

        // Hent data
        .then(function (worldData) {
            const CATEGORY_WORLD_DROP_DOWN = document.querySelector(".categoryWorld__dropdown")

            // Laver elementer for hver artikel
            worldData.results.forEach(function (worldArticles) {
                const ARTICLE = document.createElement("article")
                const IMG = (worldArticles.multimedia && worldArticles.multimedia[0].url) || ""

                ARTICLE.innerHTML = `
                <img class="articleImg" src="${IMG}">
                <div class="healthArticle__container">
                    <a class="healthHeading" href="${worldArticles.title}">${worldArticles.title}</a>
                    <p class="healthAbstract">${worldArticles.abstract}</p> 
                </div>
                    `
                CATEGORY_WORLD_DROP_DOWN.append(ARTICLE)
            })
        })

        const CATEGORY_CLICK = document.querySelector(".categoryWorld__click")
        CATEGORY_CLICK.addEventListener("click", clickHandler)

        function clickHandler() {
            const CATEGORY_DROPDOWN = document.querySelector(".categoryWorld__dropdown")
            CATEGORY_DROPDOWN.classList.toggle("hidden")
        }
})()