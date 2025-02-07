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
    const bb = document.querySelector(".bile-bramburky")
    const hb = document.querySelector(".horcicove-bramburky")
    const mix = document.querySelector(".mix")
    const jojo = document.querySelector(".jojo")
    const metro = document.querySelector(".metro")
    const suk = document.querySelector(".soja")
    const roller = document.querySelector(".roller")
    const pivo = document.querySelector(".pivo")
    const vino = document.querySelector(".vino")
    const medovina = document.querySelector(".medovina")
    const nealko = document.querySelector(".nealko")
    const bachelor = document.querySelector(".bachelor")
    const vymena = document.querySelector(".vymena")
    const film = document.querySelector(".film")
    const cteni = document.querySelector(".cteni")
    const dalsi = document.querySelector(".input-text-class")

    submit.addEventListener("click", e => {
        e.preventDefault()
        console.log("Submit clicked") // Test

        if (!db) {
            console.error("Firestore is not initialized!")
            return
        }

        db.collection("valentine-form")
            .add({
                sushi: sushi.checked ? "yes" : "no",
                bb: bb.checked ? "yes" : "no",
                hb: hb.checked ? "yes" : "no",
                mix: mix.checked ? "yes" : "no",
                jojo: jojo.checked ? "yes" : "no",
                metro: metro.checked ? "yes" : "no",
                suk: suk.checked ? "yes" : "no",
                roller: roller.checked ? "yes" : "no",
                pivo: pivo.checked ? "yes" : "no",
                vino: vino.checked ? "yes" : "no",
                medovina: medovina.checked ? "yes" : "no",
                nealko: nealko.checked ? "yes" : "no",
                bachelor: bachelor.checked ? "yes" : "no",
                vymena: vymena.checked ? "yes" : "no",
                film: film.checked ? "yes" : "no",
                cteni: cteni.checked ? "yes" : "no",
                dalsi: dalsi.value
            })
            .then(() => {
                console.log("Data saved to Firestore")
                document.querySelector(".valentine").reset()
                window.location.href = "love-you.html"
            })
            .catch(error => console.error("Error writing document: ", error))
    })
})
