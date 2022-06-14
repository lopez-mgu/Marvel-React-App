import React, { useEffect, useState } from "react";
import { Col } from 'react-bootstrap';
import { onSnapshot, query, collection, orderBy, addDoc, doc, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase'
import Cards from "../Cards/Cards";

const Favorite = () => {

    const [fav, setFav] = useState([]);
    const [form, setForm] = useState({});

    const getFavorite = () => {
        const favoriteArry = []
        onSnapshot(collection(db, 'Favorite'), (snapshoot) =>{
            snapshoot.docs.forEach((doc) => {
                favoriteArry.push({
                    ...doc.data(),
                    id: doc.id});
                setFav(favoriteArry);
                console.log(doc.data())
            })
        })
    }

    const addCharacter = async (data) => {

        setForm({
            ...form,
            name: data.name,
            description: data.description,
            img: data.thumbnail.path + "." + data.thumbnail.extension
          });

        await addDoc(collection(db, 'Favorite'), form)
        setForm({});
        getFavorite();
    };

    useEffect(() => {
        getFavorite();
    },[]);

   return(
        <div>
            <Col lg={3} md={4} sm={6} xs={12} className="mt-3" >
                {
                    fav.map((info, index) => {
                        return (
                            <Cards data={info} key={index}/>
                        )
                    })
                }
            </Col>
        </div>
   ) 
}

export default Favorite;