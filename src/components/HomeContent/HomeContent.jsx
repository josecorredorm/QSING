import React from 'react';
import './HomeContent.css';

const HomeContent = () => {
  return (
    <div className="AdnContainer">
    <iframe
        src="https://www.youtube.com/embed/Adpc5OnysGA?si=Oruvpb6sTRu3hA8B" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
    </iframe>
    <div>
        <h2>NUESTO ADN</h2>
        <h4>
        En QS Ingeniería e Innovación generamos valor con soluciones de ingeniería a la medida de las necesidades de nuestros clientes a nivel nacional. Con más de 12 años de experiencia mediante nuestro sistema de gestión, nos caracterizamos por la seguridad, sostenibilidad y excelencia en nuestra labor.
        </h4>
    </div>
    </div>
  )
}

export default HomeContent