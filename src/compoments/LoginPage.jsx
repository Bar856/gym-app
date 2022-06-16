import React from 'react';
import { useState } from 'react';
import {Navigate} from "react-router-dom";
export default function LoginPage(props) {
    
    const [navToNext, setnavToNext] = useState(false)
    const [id, setId] = useState('')
    const [fullName, setFullName] = useState('')
    const [gender, setGender] = useState('')
    function is_up_or_low(char){
        if (char === char.toUpperCase()) {
            return true;
           }
           if (char === char.toLowerCase()){
            return false;
           }
    }
    const loginBtnFn = () => {
        if (checkName() && checkId() && checkGender()){
            props.createTrainer(id,fullName,gender);
            setnavToNext(true);
        }
    }
    const checkName= () =>{
        let alert = document.getElementById('alertLabel');
        let counterOfSpaces = 0;
        let arrayFromStr = fullName.split("");
        for (let i=0;i<arrayFromStr.length;i++){
            if (arrayFromStr[i] === ' '){
                counterOfSpaces += 1;
            }
            if (is_up_or_low(arrayFromStr[i]) && arrayFromStr[i]!==' '){
                alert.innerHTML = 'Full Name Cant Contain Upper Case';
                return false;
            }
        }
        if (counterOfSpaces > 1){
            alert.innerHTML = 'Full Name Cant Contain 2 Spaces';
            return false;
        }else{
            alert.innerHTML = '';
            return true;
        }
    };
    const checkId = () => {
        let alert = document.getElementById('alertLabel');
        if (id.length === 9){
            // true - contains number 
            if (!(isNaN(id))){
                alert.innerHTML = ""
                return true;
            }else{
                alert.innerHTML = "ID Can't contain Chars Only Numbers"
                return false;
            } 
        }else{
            alert.innerHTML = "ID Must Be 9-Digit"
            return false;
        }
    }
    const checkGender = () =>{
        if (gender === 'male' || gender === 'female'){
            return true;
        }else{
            return false;
        }
    }

    
  return (
    <div className='container'>
        {/* <form> */}
            <div className='row'>
                <input required maxLength={9} style={{'marginBottom':'10px'}} type="text" onChange={(e)=>{setId(e.target.value)}} placeholder='Enter ID' />
            </div>
            <div className='row'>
                <input required minLength={4} style={{'marginBottom':'10px'}} type="text" onChange={(e)=>{setFullName(e.target.value)}} placeholder='Enter Full Name' />
            </div>
            <div className='row'>
                <select onChange={(e)=>{setGender(e.target.value)}} required defaultValue={'DEFULT'} name="" id="genderSelect">
                    <option disabled value="DEFULT">Choose Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <div className='row'>
                <label id="alertLabel"></label>
            </div>
            <button className='margeTen' onClick={loginBtnFn}>Start</button>
        {/* </form> */}
        {navToNext && <Navigate replace to='/gym-app/second-stage'/>}
    </div>
  )
}
