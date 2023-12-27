// firebaseInit.ts
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyB4BBKonIjV8agbfiQh7MuAD-3REP9K9U0",
    authDomain: "showmap-409414.firebaseapp.com",
    databaseURL: "https://showmap-409414-default-rtdb.firebaseio.com",
    projectId: "showmap-409414",
    storageBucket: "showmap-409414.appspot.com",
    messagingSenderId: "855565105770",
    appId: "1:855565105770:web:4f5e0b0f890d35f6c06813",
    measurementId: "G-PTD5791ZVE"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
