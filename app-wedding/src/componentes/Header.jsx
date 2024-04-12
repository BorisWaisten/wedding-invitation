// Header.js
import React, { useEffect, useState } from 'react';
import { app } from '../fb';

export default function Header() {
    const [videoUrl, setVideoUrl] = useState(null);

    useEffect(() => {
        const handleVideoFondo = async () => {
            try {
                const video = app.storage().ref('fondo/video-fondo.mp4');
                const enlaceUrl = await video.getDownloadURL();
                setVideoUrl(enlaceUrl);
            } catch (error) {
                console.error("Error al obtener la URL de descarga del video:", error);
            }
        }

        handleVideoFondo();
    }, []);

    return (
        <div>
            {videoUrl ? (
                <video
                    autoPlay
                    loop
                    muted
                    style={{
                        width: '100%',
                        height: '100vh',
                        objectFit: 'cover',
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        zIndex: -1
                    }}
                >
                    <source src={videoUrl} type="video/mp4" />
                    Tu navegador no soporta la reproducción de video.
                </video>
            ) : (
                <div style={{
                    background: 'black',
                    width: '100%',
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    fontFamily: 'monospace',
                    color: 'white'
                }}>
                    <p>Cargando...</p>
                </div>
            )}
            <div style={{
                position: 'relative',
                zIndex: 1
            }}>
                <h1>Header</h1>
                <h2>Este es el encabezado con un video de fondo</h2>
            </div>
        </div>
    );
}
