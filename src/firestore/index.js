import firebase from 'firebase';

var app = firebase.initializeApp({
    apiKey: "AIzaSyCCDCCFSpJags7KteL5XfEqS6gxNRzlsFI",
    authDomain: "cipher-salad-be.firebaseapp.com",
    databaseURL: "https://cipher-salad-be.firebaseio.com",
    projectId: "cipher-salad-be",
    storageBucket: "cipher-salad-be.appspot.com",
    messagingSenderId: "640177168111",
    appId: "1:640177168111:web:f399884a6a3121c057451a"
});
var db = app.firestore();

// get a cipher document. Returns document on success,
// undefined otherwise.
export const getCipher = async id => {
    if (!id)
        return;

    try {
        let doc = await db.collection('/cipher').doc(id).get();
        return await doc.data();
    } catch (e) {
        console.log(e);
        return;
    }
}

// create a cipher document. Returns a hash to the
// document on success, undefined otherwise.
export const createCipher = async data => {
    const { plaintext, shamt } = data;

    if (!plaintext || shamt === undefined)
        return;

    let newDoc = db.collection('/cipher').doc();
    
    try {
        await newDoc.set({
            plaintext,
            shamt,
        })
        return newDoc.id;
    } catch (e) {
        console.log(e);
        return;
    }
}