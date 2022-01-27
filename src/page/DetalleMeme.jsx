import React from 'react'
import Meme from '../components/Meme'
import { Redirect, useParams } from 'react-router'
import { leerDeLocalStorage } from '../utils/localStorage'
import MemeFullScreen from '../components/MemeFullScreen';

export default function DetalleMeme()  {
    const {memeId} = useParams()
    const memes = leerDeLocalStorage('memes');
    const memeEncontrado = memes.find((m)=>m.id=== memeId)
if (memeEncontrado=== undefined) {
    return <Redirect to ="/404"/ >
}



    return <MemeFullScreen meme={memeEncontrado} />
    
}
