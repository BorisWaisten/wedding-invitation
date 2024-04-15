'use client'
import React from 'react';
import Button from 'react-bootstrap/Button';

function EventInfo({ title,body, address, mapUrl }) {
    const openMap = () => {
        window.open(mapUrl, '_blank');
    };

    return (
        <div style={{ marginBottom: '20px' }}>
            <h2>{title}</h2>
            <p>{body}</p>
            <p>{address}</p>
            <Button variant="outline-dark" onClick={openMap}>Ver en el mapa</Button>
        </div>
    );
}

export default function Ubicacion() {
    const eventDetails = [
        {
            title: 'Casamiento Civil',
            body:'Celebracion a las 10:00',
            address: 'Celebracion 10:00,Prebistero Joannas 129, urdinarrain, entre ríos',
            mapUrl: 'https://maps.app.goo.gl/NPkAaXMpgEAWsPnc8'
        },
        {
            title: 'Fiesta',
            body:'Celebracion a las 10:00',
            address: 'Prebistero Joannas 300, urdinarrain, entre ríos',
            mapUrl: 'https://maps.app.goo.gl/NPkAaXMpgEAWsPnc8'
        }
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>Ceremonia</h1>
            {eventDetails.map(event => (
                <EventInfo
                    key={event.title}
                    title={event.title}
                    body={event.body}
                    address={event.address}
                    mapUrl={event.mapUrl}
                />
            ))}
            <h1>Vestimenta</h1>
            <p>Vestimenta formal</p>
            <h1>Regalos</h1>
            <p>Puedes realizar tu regalo a través de la siguiente CBU: XXXX XXXX XXXX XXXX</p>
            <h1>Confirmación de Asistencia</h1>
            <p>Por favor, confirma tu asistencia completando el siguiente formulario: <a href="URL_DEL_FORMULARIO">Formulario de Confirmación</a></p>
        </div>
    );
}
