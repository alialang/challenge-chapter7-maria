import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "../../css/style.css";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import Login from './Login'
import Logout from './Logout'

const clientId = '170306968804-vlbbus2ab75d5avjpen6a736t3tonuku.apps.googleusercontent.com';

function Main() {

    const cardStyle = {
        width: '700px',
        margin: 'auto',
        padding: '10px',
    }

    const container = {
        padding: '50px',
        marginTop: '70px',
    }

    const textStyle = {
        textAlign: 'center',
    }

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope: "",
            })
        };
        gapi.load("client", start);
    })

    const state = {
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        name: localStorage.getItem("name"),
        email: localStorage.getItem("email"),
        googleId: localStorage.getItem("googleId"),
    };

    function data(state) {
        if (state.name && state.email && state.googleId) {

            return (
                <div style={cardStyle}>
                    <div>
                        <h1>Welcome {state.name}</h1>
                        <p>{state.email}</p>
                        <p>{state.googleId}</p>
                        <Logout />
                    </div>
                </div>
            )
        } else {
            return (
                <div style={textStyle}>
                    <Login />
                </div>
            )
        }
    }

    return (
        <div className="card container" style={container}>
            <h1 className='justify-content-center' style={textStyle}>Binar Car Rental</h1>
            <h5 style={textStyle}>Sewa & Rental Mobil Terbaik di kawasan Jombang</h5>
            {data(state)}
        </div>
    )
}

export default Main;
