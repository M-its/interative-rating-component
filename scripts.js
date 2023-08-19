const urlParams = new URLSearchParams(window.location.search)
let rating = urlParams.get("rating")
const radioSpan = document.querySelectorAll("span.rating")
const form = document.querySelector("form#rating-form")
const modal = document.querySelector(".modal")
const givenRate = document.querySelector("span#given-rate")
const button = document.querySelector("button")
let alert = null

function chageRadioSpanBackground() {
    radioSpan.forEach((element) => {
        element.addEventListener("click", () => {
            // Reset the styles of all elements
            radioSpan.forEach((e) => {
                e.style.backgroundColor = ""
                e.style.color = ""
            })
            // Apply the styles to the clicked element
            element.style.backgroundColor = "hsl(216, 12%, 54%)"
            element.style.color = "hsl(0, 0%, 100%)"
            rating = element.textContent
        })
    })
}

function displayModal() {
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        if (rating !== null) {
            form.style.display = "none"
            givenRate.innerHTML = ` ${rating} `
            modal.style.display = "flex"
        } else {
            if (alert === null) {
                alert = button.insertAdjacentHTML(
                    "afterend",
                    "<p class='alert'>*Please select a valid rating</p>"
                )
            }
        }
    })
}

function resetRatingQueryParam() {
    const url = new URL(window.location.href)
    url.searchParams.delete("rating")
    window.history.replaceState(null, null, url)
}

chageRadioSpanBackground()
displayModal()
resetRatingQueryParam()
