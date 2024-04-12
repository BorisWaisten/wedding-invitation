'use client'

import React, { useState, useEffect } from 'react';

export default function Ubicacion() {
    const [civilAddress, setCivilAddress] = useState("");
    const [partyAddress, setPartyAddress] = useState("");

    useEffect(() => {
        // Dirección del casamiento civil
        const civilAddress = "Prebistero Joannas 129, urdinarrain, entre ríos";
        setCivilAddress(civilAddress);

        // Dirección de la fiesta
        const partyAddress = "Prebistero Joannas 300, urdinarrain, entre ríos";
        setPartyAddress(partyAddress);
    }, []);

    const openMap = (address) => {
        const mapUrl = `https://maps.app.goo.gl/NPkAaXMpgEAWsPnc8`;
        window.open(mapUrl, '_blank');
    };

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center',height:'200px',backgroundColor:'#F3E5F5' }}>
            <div>
                <h2>Casamiento Civil</h2>
                <p>{civilAddress}</p>
                <button style={{ marginRight: '10px', color :'blue' }} onClick={() => openMap(civilAddress)}>Ver en Google Maps</button>
            </div>
            <div>
                <h2>Fiesta</h2>
                <p>{partyAddress}</p>
                <button style={{ marginRight: '10px', color :'blue' }} onClick={() => openMap(partyAddress)}>Ver en Google Maps</button>
            </div>
        </div>
    );
}
