export default (function () {
    if (!window.location.pathname.includes("index.html")) return

    fetch("https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=GIh5HEZpHXp8aQ1fvIEAR0bKzwYPWvQa")

        .then(function (response) {

            if (response.status === 200) {
                return response.json()

            } else {
                const ERROR = document.querySelector(".categorySports__dropdown")
                ERROR.innerText = "ups, noget gik galt. Prøv igen senere"

            }
        })

        // Hent data
        .then(function (sportsData) {
            const CATEGORY_DROP_DOWN = document.querySelector(".categorySports__dropdown")

            // Laver elementer for hver artikel
            sportsData.results.forEach(function (sportsArticles) {
                const ARTICLE = document.createElement("article")
                const IMG = (sportsArticles.multimedia && sportsArticles.multimedia[0].url) || ""

                ARTICLE.innerHTML = `
                    <img class="articleImg" src="${IMG}">
                    <div class="healthArticle__container">
                        <a class="healthHeading" href="${sportsArticles.title}">${sportsArticles.title}</a>
                        <p class="healthAbstract">${sportsArticles.abstract}</p> 
                    </div>
                    `
                CATEGORY_DROP_DOWN.append(ARTICLE)
            })
        })

        // click event
        const CATEGORY_CLICK = document.querySelector(".categorySports__click")
        CATEGORY_CLICK.addEventListener("click", clickHandler)

        // toggle hide & un-hide dropdown
        function clickHandler() {
            const CATEGORY_DROPDOWN = document.querySelector(".categorySports__dropdown")
            CATEGORY_DROPDOWN.classList.toggle("hidden")
        }
})()