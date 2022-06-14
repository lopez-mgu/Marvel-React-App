import React, {useState, useEffect} from "react";
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { onSnapshot, query, collection, orderBy, addDoc, doc, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase'


const Cards = ({data}) => {

    const [form, setForm] = useState({});

    const addCharacter = async (data) => {
        setForm({
            ...form,
            name: data.name,
            description: data.description,
            img: data.thumbnail.path + "." + data.thumbnail.extension
          });

        await addDoc(collection(db, 'Favorite'), form)
        console.log(form)
        setForm({});
    };

    return(
        <Card style={{ width: '18rem', minHeight: '18rem' }}>
            <Card.Img variant="top" src={data.thumbnail.path + "." + data.thumbnail.extension} />
            <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>
                {data.description.substring(0, 85)}...
            </Card.Text>
            <Button variant="primary" onClick={() => addCharacter(data)}>Favorito</Button>
            </Card.Body>
        </Card>
    )
}

export default Cards;