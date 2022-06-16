import React from 'react';
import { useState } from 'react';
import Select from 'react-select';
import { Navigate } from 'react-router-dom';
export default function ThirdStage(props) {
    const [navToNext, setnavToNext] = useState(false)
    const yesBtn = () =>{
        props.setWorkouts();
        setnavToNext(true);
    }
    const noBtn = () =>{
        setnavToNext(false);
    }
  return (
    <div className='container'>
        <div className='row '>
            <h1 className='border' style={{'color':'red'}}>Ready?</h1>
        </div>
        <div className='row'>
            <div className='col'>
                <button onClick={yesBtn} style={{'marginTop':'10px'}}>Yes</button>
            </div>
            <div className='col'>
                <button onClick={noBtn} style={{'marginTop':'10px'}}>No</button>
            </div>
        </div>
        {navToNext && <Navigate replace to={props.getUrl()}/>}
    </div>
  )
}
