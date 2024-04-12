import { useState, useEffect } from 'react';
import { app } from '../fb';
import '../css/Galeria.css';
import ImageGallery from 'react-image-gallery'; // Importa la galería de imágenes
import 'react-image-gallery/styles/css/image-gallery.css'; // Importa los estilos CSS de la galería

export default function Galeria() {
    const [imagenes, setImagenes] = useState([]);

    useEffect(() => {
        const obtenerImagenes = async () => {
            try {
                const imagenesRef = app.storage().ref('fotos/');
                const listaImagenes = await imagenesRef.listAll();
                const urls = await Promise.all(listaImagenes.items.map(item => item.getDownloadURL()));
                const imagenesData = urls.map(url => ({ original: url, thumbnail: url }));
                setImagenes(imagenesData);
            } catch (error) {
                console.error("Error al obtener la lista de imágenes:", error);
            }
        }

        obtenerImagenes();
    }, []);

    return (
        <div className="galeria-container">
            <h1>Galeria</h1>
            <div className="galeria">
                <ImageGallery items={imagenes} 
                showPlayButton={false}
                showFullscreenButton={false}
                showThumbnails={true}
                showNav={false}
                showBullets={true}
                autoPlay={true}
                slideInterval={3000}
                slideDuration={1000}
                /> 
            </div>
        </div>
    );
}
