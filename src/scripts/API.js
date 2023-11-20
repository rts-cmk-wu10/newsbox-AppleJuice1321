export default (function () {
    if (!window.location.pathname.includes("index.html")) return

    fetch(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=GIh5HEZpHXp8aQ1fvIEAR0bKzwYPWvQa`)
        .then(function (response) {
            if (response.status === 200) {
                return response.json()
            } else {
                const ERROR = document.querySelector(".siteContent")
                ERROR.innerText = "ups, noget gik galt. Prøv igen senere"
            }
        })

        .then(function(data) {
            console.log(data)
            data.CATEGORIES.forEach(function(category) {

            })

})()