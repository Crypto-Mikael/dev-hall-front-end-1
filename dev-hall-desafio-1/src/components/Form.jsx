import React from 'react';
import '../styles/Form.css'
function Form() {
  return (
    <section className="form-field">
      <div className="form-text">
        <h1>Mande um oi, ligamos para você!</h1>
        <p>Preencha seus dados para que a gente possa entrar em contato.</p>
      </div>
      <form>
        <div>
          <label htmlFor="">Nome Completo</label>
          <input
            type="text"
            placeholder="Ex: Mateus Ávila Isidoro"
          />
        </div>
        <div>
          <label htmlFor="">Whatsapp</label>
          <input
            type="text"
            placeholder="(99) 99999-9999"
          />
        </div>
        <button 
          type="button"
        >
          Peça uma reunião
        </button>
      </form>
    </section>
  );
}

export default Form;
