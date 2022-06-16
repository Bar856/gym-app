import React from 'react'
import { useState } from 'react'
import { Link,Navigate,useLocation } from 'react-router-dom'
export default function RegisterPage(props) {

    const [navToHome, setNavToHome] = useState(false)
    const [id, setId] = useState('')
    const [fullName, setFullName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [money, setMoney] = useState('')

    const checkName = () =>{
        if (fullName.length >= 4){
            // true - contains number 
            if (/\d/.test(fullName)){
                document.getElementById("fullNameAlert").innerHTML = "Full Name Can't Contain Numbers"
                return false;
            }else{
                document.getElementById("fullNameAlert").innerHTML = ""
                return true;
            } 
        }else{
            document.getElementById("fullNameAlert").innerHTML = "Name Must Be At Least 4-Digits"
            return false;
        }
    }
    const checkId = () =>{
        if (id.length === 9){
            // true - contains number 
            if (/[^a-zA-Z]/.test(id)){
                document.getElementById("idAlert").innerHTML = ""
                return true;
            }else{
                document.getElementById("idAlert").innerHTML = "ID Can't Contain Numbers"
                return false;
            } 
        }else{
            document.getElementById("idAlert").innerHTML = "ID Must Be 9-Digits"
            return false;
        }
    }
    const checkPasswords = () =>{
        if (password.length>=6){
            if (password === confirmPassword){
                document.getElementById("passwordConfirmAlert").innerHTML = "";
                document.getElementById("passwordAlert").innerHTML = "";
                return true;
            }else{
                document.getElementById("passwordConfirmAlert").innerHTML = "Passwords Don't Match";
                return false;
            }
        }else{
            document.getElementById("passwordAlert").innerHTML = "Passwords Must Be At Least 6-digits";
            return false;
        }
    }
    const checkMoney = () =>{
        if (money>0 && money<1000000){
            // true - contains number 
            document.getElementById("moneyAlert").innerHTML = ""
            return true;
        }else{
            document.getElementById("moneyAlert").innerHTML = "Money Must Be In Range 0-1000000"
            return false;
        }
    }
    const addCustFnBtn = () => {
        if (checkId() && checkName() && checkPasswords() && checkMoney()){
            props.addNewCust(id,fullName,password,money);
            setNavToHome(true);
        }
    }
  return (
    <div className='container'>
        <div className='row'>
            <input style={{'marginBottom':'10px'}} onChange={(e)=>setId(e.target.value)} minLength={9} maxLength={9} placeholder='ID' type="text"/>
        </div>
        <div className='row'>
            <label className='alerts' id="idAlert"></label>
        </div>
        <div className='row'>
            <input style={{'marginBottom':'10px'}} onChange={(e)=>setFullName(e.target.value)} placeholder='Full name' type="text"  />
        </div>
        <div className='row'>
            <label className='alerts' id="fullNameAlert"></label>
        </div>
        <div className='row'>
            <input style={{'marginBottom':'10px'}} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' type="password"  />
        </div>
        <div className='row'>
            <label className='alerts' id="passwordAlert"></label>
        </div>
        <div className='row'>
            <input style={{'marginBottom':'10px'}} onChange={(e)=>setConfirmPassword(e.target.value)} placeholder='Confirm Password' type="password"  />
        </div>
        <div className='row'>
            <label className='alerts' id="passwordConfirmAlert"></label>
        </div>
        <div className='row'>
            <input style={{'marginBottom':'10px'}} onChange={(e)=>setMoney(e.target.value)} placeholder='Money' type="number" name="money" id="money" />
        </div>
        <div className='row'>
            <label className='alerts' id="moneyAlert"></label>
        </div>
        <div className='row'>
            <div><button className='margeTen' onClick={addCustFnBtn}>{useLocation().pathname === '/sv-bank/register' ? 'Register' : 'Edit'}</button></div>
        </div>
        <div className='row'>
            <Link to={useLocation().pathname === '/sv-bank/register' ? '/sv-bank' : props.getCustLink()}>
            <button className='margeTen'>{useLocation().pathname === '/sv-bank/register' ? 'Home' : 'Back'}</button>
            </Link>
        </div>
        {navToHome && <Navigate replace to='/sv-bank'/>}
    </div>
  )
}
