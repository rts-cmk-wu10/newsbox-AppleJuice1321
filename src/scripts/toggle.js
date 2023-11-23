export default (function () {
    if (!window.location.pathname.includes("index.html")) return

    // CATEGORY - WORLD ============================
    const TOGGLE_CATEGORY_WORLD = document.querySelector(".categoryWorld")
    const TOGGLE_WORLD = document.querySelector(".toggle__containerLeft")
    TOGGLE_WORLD.addEventListener("click", toggleWorldHandler)

    // remove category
    function toggleWorldHandler() {
        TOGGLE_WORLD.classList.toggle("toggle__containerRight")
        // TOGGLE.style.display.remove = "toggle__containerleft"
        TOGGLE_CATEGORY_WORLD.classList.toggle("categoryWorld__hidden")
    }


    // CATEGORY - HEALTH =========================
    const TOGGLE_CATEGORY_HEALTH = document.querySelector(".categoryHealth")
    const TOGGLE_HEALTH = document.querySelector(".toggle__containerLeft")
    TOGGLE_HEALTH.addEventListener("click", toggleHealthHandler)

    // remove category
    function toggleHealthHandler() {
        TOGGLE_HEALTH.classList.toggle("toggle__containerRight")
        // TOGGLE.style.display.remove = "toggle__containerleft"
        TOGGLE_CATEGORY_HEALTH.classList.toggle("categoryHealth__hidden")
    }


    // CATEGORY - TRAVEL =============================
    const TOGGLE_CATEGORY_TRAVEL = document.querySelector(".categoryTravel")
    const TOGGLE_TRAVEL = document.querySelector(".toggle__containerLeft")
    TOGGLE_TRAVEL.addEventListener("click", toggleTravelHandler)

    // remove category
    function toggleTravelHandler() {
        TOGGLE_TRAVEL.classList.toggle("toggle__containerRight")
        // TOGGLE.style.display.remove = "toggle__containerleft"
        TOGGLE_CATEGORY_TRAVEL.classList.toggle("categoryTravel__hidden")
    }


    // CATEGORY - SPORT ===========================
    const TOGGLE_CATEGORY_SPORTS = document.querySelector(".categorySports")
    const TOGGLE_SPORTS = document.querySelector(".toggle__containerLeft")
    TOGGLE_SPORTS.addEventListener("click", toggleSportsHandler)

    // remove category
    function toggleSportsHandler() {
        TOGGLE_SPORTS.classList.toggle("toggle__containerRight")
        // TOGGLE.style.display.remove = "toggle__containerleft"
        TOGGLE_CATEGORY_SPORTS.classList.toggle("categorySports__hidden")
    }


    // CATEGORY - BUSINESS
    const TOGGLE_CATEGORY_BUSINESS = document.querySelector(".categoryBusiness")
    const TOGGLE_BUSINESS = document.querySelector(".toggle__containerLeft")
    TOGGLE_BUSINESS.addEventListener("click", toggleSportsHandler)

    // remove category
    function toggleSportsHandler() {
        TOGGLE_BUSINESS.classList.toggle("toggle__containerRight")
        // TOGGLE.style.display.remove = "toggle__containerleft"
        TOGGLE_CATEGORY_BUSINESS.classList.toggle("categoryBusiness__hidden")
    }
})()