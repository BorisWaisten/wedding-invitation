import { useState, useEffect } from 'react';
import { app } from '../fb';
import '../css/Galeria.css'; // Asegúrate de tener un archivo CSS para estilizar la galería

export default function Galeria() {
    const [imagenes, setImagenes] = useState([]);

    useEffect(() => {
        const obtenerImagenes = async () => {
            try {
                const imagenesRef = app.storage().ref('fotos/');
                const listaImagenes = await imagenesRef.listAll();
                const urls = await Promise.all(listaImagenes.items.map(item => item.getDownloadURL()));
                setImagenes(urls);
            } catch (error) {
                console.error("Error al obtener la lista de imágenes:", error);
            }
        }

        obtenerImagenes();
    }, []);

    return (
        <div className="galeria-container">
            <h1>Galeria</h1>
            <div className="imagenes-container">
                {imagenes.map((imagen, index) => (
                    <img key={index} src={imagen} alt={`Imagen ${index}`} />
                ))}
            </div>
        </div>
    );
}
