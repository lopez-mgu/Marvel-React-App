import React, { useEffect, useState } from 'react';
import { Col } from'react-bootstrap';
import axios from 'axios';
import env from 'react-dotenv';
import Cards from '../Cards/Cards';

const Characters = () => {
    const [character, setCharacter] = useState([])
    

    const getCharacters = async (charName) => {
        //const url = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${charName}&limit=2&ts=1000&apikey=${env.MARVEL_API_PUBLIC_KEY}&hash=${env.MARVEL_API_HASH}`;
        const url = `https://gateway.marvel.com/v1/public/characters?&limit=10&ts=1000&apikey=${env.MARVEL_API_PUBLIC_KEY}&hash=${env.MARVEL_API_HASH}`;
        const res = await axios.get(url);
        console.log(res.data.data.results)
        setCharacter(res.data.data.results)
    }


    useEffect(() => {
        getCharacters()
    }, [])
    

    return(

        <div>
            <Col lg={3} md={4} sm={6} xs={12} className="mt-3" >
                {
                    character.map((info, index) => {
                        return (
                            <Cards data={info} key={index}/>
                        )
                    })
                }
            </Col>
        </div>
    )

}

export default Characters;