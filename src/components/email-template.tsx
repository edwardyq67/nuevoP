import * as React from 'react';

interface EmailTemplateProps {
  nombre: string;
  mensaje: string;
  correo:string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
    nombre,
    mensaje,
  correo,
}) => (
  <div>
    <h1>Bienvenido/a, {nombre}!</h1>
    <h2>{correo}</h2>
    <p>Mensaje recibido: {mensaje}</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quas obcaecati asperiores laboriosam delectus impedit temporibus provident. Nemo amet veniam omnis, sit accusamus perferendis, aut perspiciatis sunt, saepe atque quisquam!</p>
    <button
      type="button"
      className="btn btn-outline-primary"
      onClick={() => window.location.href = "url_del_destino"}
    >
      Botón
    </button>
  </div>
);
