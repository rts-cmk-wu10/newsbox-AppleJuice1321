export default (function () {

    if (!window.location.pathname.includes("index.html")) return



    fetch("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=GIh5HEZpHXp8aQ1fvIEAR0bKzwYPWvQa")

        .then(function (response) {

            if (response.status === 200) {
                return response.json()

            } else {
                const ERROR = document.querySelector(".categoryBusiness__dropdown")
                ERROR.innerText = "ups, noget gik galt. Prøv igen senere"

            }
        })

        // Hent data
        .then(function (businessData) {
            const CATEGORY_BUSINESS_DROP_DOWN = document.querySelector(".categoryBusiness__dropdown")

            // Laver elementer for hver artikel
            businessData.results.forEach(function (businessArticles) {
                const ARTICLE = document.createElement("article")
                const IMG = (businessArticles.multimedia && businessArticles.multimedia[0].url) || ""

                ARTICLE.innerHTML = `
                <img class="articleImg" src="${IMG}">
                <div class="healthArticle__container">
                    <a class="healthHeading" href="${businessArticles.title}">${businessArticles.title}</a>
                    <p class="healthAbstract">${businessArticles.abstract}</p> 
                </div>
                    `
                CATEGORY_BUSINESS_DROP_DOWN.append(ARTICLE)
            })
        })

        const CATEGORY_CLICK = document.querySelector(".categoryBusiness__click")
        CATEGORY_CLICK.addEventListener("click", clickHandler)

        function clickHandler() {
            const CATEGORY_DROPDOWN = document.querySelector(".categoryBusiness__dropdown")
            CATEGORY_DROPDOWN.classList.toggle("hidden")
        }
})()