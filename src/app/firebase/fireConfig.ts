import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxwMBwFAGoOJ5IgEEWjJKAbasPPFiKqtg",
    authDomain: "spotiapp-demo.firebaseapp.com",
    projectId: "spotiapp-demo",
    storageBucket: "spotiapp-demo.appspot.com",
    messagingSenderId: "990987714470",
    appId: "1:990987714470:web:8ccaf41cd4fea592461967"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export function Get_conection() {
    //getCities();
    return db;
}

// Get a list of cities from your database
async function getCities() {
    const citiesCol = collection(db, 'todos');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    console.log(cityList);
    return cityList;
}

