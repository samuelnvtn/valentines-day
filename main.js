const contactForm = document.querySelector(".valentine")

const sushi = document.querySelector(".sushi")
const others = document.querySelector(".others")
const submit = document.querySelector(".submit-form")
/*
submit.addEventListener("click", e => {
    e.preventDefault()

    console.log("Submit clicked")

    db.collection("valentine-form")
        .doc()
        .set({
            sushi: sushi.checked ? "yes" : "no",
            others: others.value
        })
        .then(() => {
            contactForm.reset()
            window.location.replace("https://samuelnvtn.github.io/valentines-day/love-you.html")
        })
})*/

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed") // Test

    const submit = document.querySelector(".submit-form")

    if (!submit) {
        console.error("Submit button not found!")
        return // Ukončíme, pokud tlačítko neexistuje
    }

    console.log("Submit button found") // Test

    const sushi = document.querySelector(".sushi")

    submit.addEventListener("click", e => {
        e.preventDefault()
        console.log("Submit clicked") // Test

        if (!db) {
            console.error("Firestore is not initialized!")
            return
        }

        db.collection("valentine-form")
            .add({
                sushi: sushi.checked ? "yes" : "no"
            })
            .then(() => {
                console.log("Data saved to Firestore")
                document.querySelector(".valentine").reset()
                window.location.href = "love-you.html"
            })
            .catch(error => console.error("Error writing document: ", error))
    })
})
