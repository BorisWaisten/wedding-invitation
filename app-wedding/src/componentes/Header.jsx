import React, { useEffect, useState } from 'react';
import {app} from '../fb';

export default function Portada() {
    const [imagenUrl, setImagenUrl] = useState(null);
    
    useEffect(() => {
        const handleImagenFondo = async () => {
            try {
                const imagen = app.storage().ref('fondo/1.jpeg');
                const enlaceUrl = await imagen.getDownloadURL();
                setImagenUrl(enlaceUrl);
            } catch (error) {
                console.error("Error al obtener la URL de descarga:", error);
            }
        }

        handleImagenFondo();
    }, []);

    return (
        <div style={{ 
            backgroundImage: `url(${imagenUrl})`, // Aquí se utiliza la URL de descarga de Firebase como fondo
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            fontFamily: 'monospace'
        }}>
            <div>
                <h1>Portada</h1>
                <h2>Esta es la portada, llevará una imagen de tu evento</h2>
            </div>
        </div>
    );
}
