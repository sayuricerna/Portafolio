// src/components/SvgIcon.jsx

import React from 'react';

// Importa el sprite. Usaremos un import dinámico de Vite si está en la carpeta public.
// Si está en 'src/assets', podrías necesitar una configuración adicional en Vite.
// Para simplificar, asumiremos que está accesible en la carpeta public/
const spritePath = '/tech-icons.svg'; 

function SvgIcon({ iconId, className, style }) {
  return (
    // La clave es usar xlinkHref para referenciar el ID dentro del sprite
    <svg className={className} style={style}>
      <use xlinkHref={`${spritePath}#${iconId}`} />
    </svg>
  );
}

export default SvgIcon;