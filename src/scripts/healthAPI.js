export default (function () {

    if (!window.location.pathname.includes("index.html")) return



    fetch("https://api.nytimes.com/svc/topstories/v2/health.json?api-key=GIh5HEZpHXp8aQ1fvIEAR0bKzwYPWvQa")

        .then(function (response) {

            if (response.status === 200) {
                return response.json()

            } else {
                const ERROR = document.querySelector(".siteContent")
                ERROR.innerText = "ups, noget gik galt. Prøv igen senere"

            }
        })

        // Hent data
        .then(function (healthData) {
            const CATEGORY_DROP_DOWN = document.querySelector(".categoryHealth__dropdown")

            // Laver elementer for hver artikel
            healthData.results.forEach(function (healthArticles) {
                const ARTICLE = document.createElement("article")

                ARTICLE.innerHTML = `
                    <a class="healthHeading" href="${healthArticles.title}">${healthArticles.title}</a>
                    <p class="healthAbstract">${healthArticles.abstract}</p>
                    `
                CATEGORY_DROP_DOWN.append(ARTICLE)
            })
        })

        const CATEGORY_CLICK = document.querySelector("categoryHealth__click")
        CATEGORY_CLICK.addEventListener("click", clickHandler)

        function clickHandler() {
            const CATEGORY_DROPDOWN = document.querySelector(".categoryHealth__dropdown")
            CATEGORY_DROPDOWN.classList.toggle("hidden")
        }
})()