var firebaseConfig = {
    apiKey: "AIzaSyCYBmJNqJduuximRhTF9PrYdw5ObaNicmI",
    authDomain: "valentines-day-d8da7.firebaseapp.com",
    projectId: "valentines-day-d8da7",
    storageBucket: "valentines-day-d8da7.appspot.com", // Oprava překlepu
    messagingSenderId: "806886900372",
    appId: "1:806886900372:web:70c882812dc5799b192a81"
}
/*

// Oprava inicializace Firebase
firebase.initializeApp(firebaseConfig)

// Ověření inicializace
console.log("Firebase apps:", firebase.apps.length)

// Oprava přístupu k Firestore
const db = firebase.firestore()
console.log("Firestore initialized:", db)

*/
firebase.initializeApp(firebaseConfig)
console.log("Firebase apps:", firebase.apps.length)

if (firebase.firestore) {
    const db = firebase.firestore()
    console.log("Firestore initialized:", db)

    // TEST: Uložíme testovací dokument
    db.collection("test")
        .add({ message: "Firestore works!" })
        .then(() => console.log("Test document added to Firestore"))
        .catch(error => console.error("Firestore error:", error))
} else {
    console.error("Firestore SDK not loaded!")
}

window.db = firebase.firestore()
