import React, { useState, useEffect } from 'react';

const ListaVaga = () => {
 
  const [vagas, setVagas] = useState(() => {
    return JSON.parse(localStorage.getItem('vagas')) || [];
  });


  const removerVaga = (index) => {
    const novasVagas = vagas.filter((_, i) => i !== index);
    setVagas(novasVagas);
    localStorage.setItem('vagas', JSON.stringify(novasVagas));
  };

  return (
    <div>
      <h3>Vagas Cadastradas</h3>
      <ul>
        {vagas.map((vaga, index) => (
          <li key={index}>
            <span>{vaga.nome} - {vaga.placa}</span>
            <span>Apt: {vaga.apartamento} - Bloco: {vaga.bloco}</span>
            <span>Vaga: {vaga.vaga}</span>
            <button onClick={() => removerVaga(index)} className="button-remove">
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaVaga;
