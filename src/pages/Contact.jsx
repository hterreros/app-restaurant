import React from 'react'
import Title from '../components/Title';

const Contact = () => {
  return (
    <>
    <Title nombre="Contacto" />
    <div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Dirección de Correo
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="nombre@ejemplo.com"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Comentarios
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={3}
          defaultValue={""}
        />
      </div>
      <button type="submit" class="btn btn-success">Enviar</button>
    </div>
    </>
  );
}

export default Contact