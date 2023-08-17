const urlParams = new URLSearchParams(window.location.search)
const radioSpan = document.querySelectorAll("span.rating")

function getRadioInputValue() {
    rating = urlParams.get("rating")
    console.log(rating)
}

function displayModal() {}

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
        })
    })
}

getRadioInputValue()
chageRadioSpanBackground()
