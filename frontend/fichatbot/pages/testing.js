import React, { useState, useEffect } from 'react'
import { doc, setDoc, onSnapshot } from "firebase/firestore";
import { db } from '../firebase';
import { collection, query, where, getDocs } from "firebase/firestore";

const q = query(collection(db, "cities"), where("capital", "==", true));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
});

const testing = () => {

    const [abc, setAbc] = useState([])

    useEffect(() => {
        const unsub = onSnapshot(collection(db, "cities"), (doc) => {
            console.log("Current data: ", doc.data());
        });
    }, [])

    const setData = async () => {
        await setDoc(doc(db, "cities", "LA"), {
            name: "Los Angeles",
            state: "CA",
            country: "USA"
        });
    }

    const getData = async () => { }

    return (
        <div>
            <button onClick={setData}>Set Data</button>
            <button onClick={getData}>Get Data</button>
            {
                abc.map((each) => {
                    console.log(each);
                })
            }
        </div>
    )
}

export default testing
