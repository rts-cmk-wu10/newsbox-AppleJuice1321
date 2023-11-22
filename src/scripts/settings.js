export default (function () {
    if (!window.location.pathname.includes("index.html")) return

    const PRIMARY__SETTINGS = document.querySelector(".primaryNav__settings")
    PRIMARY__SETTINGS.addEventListener("click", clickHandler)

    function clickHandler() {
        // toggle off home heading when in settings
        const SITE_HEADING_HOME = document.querySelector(".siteHeadingHome")
        SITE_HEADING_HOME.classList.toggle("siteHeadingHome__visible")
        // if(SITE_HEADING_HOME.style.display === "none") {
        //     SITE_HEADING_HOME.style.display = "block"
        // } else {
        //     SITE_HEADING_HOME.style.display = "none"
        // }

        // toggle settings heading on click
        const SITE_HEADING_SETTINGS = document.querySelector(".siteHeadingSettings")
        SITE_HEADING_SETTINGS.classList.toggle("siteHeadingSettings__hidden")

        // show and hide settings window
        const HIDE__SETTINGS = document.querySelector(".settings")
        HIDE__SETTINGS.classList.toggle("settingsHidden")

        // hide when settings window is active and show when it does not
        const HIDE_SEARCHBAR = document.querySelector(".siteForm")
        if(HIDE_SEARCHBAR.style.display === "none") {
            HIDE_SEARCHBAR.style.display = "flex"
        } else {
            HIDE_SEARCHBAR.style.display = "none"
        }
    }
})()