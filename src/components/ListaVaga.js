import React from 'react';
import { useState } from 'react';

const ListaVaga = () => {
const [vagas, setVagas] = useState ([
  
    { placa: 'AAA-1234', nome: 'Geromel', apartamento: '101', bloco: 'A', vaga: '12A' },
    { placa: 'BBB-5678', nome: 'Felipe', apartamento: '202', bloco: 'B', vaga: '15B' }
  ]);

  const removerVaga = (index) =>{
    const novasVagas = vagas.filter((_,i) => i !== index );
    setVagas(novasVagas);
  }
  return (
    <div>
      <h3>Vagas Cadastradas</h3>
      <ul>
        {vagas.map((vaga, index) => (
          <li key={index}>
            <span>{vaga.nome} - {vaga.placa}</span>
            <span>Apt: {vaga.apartamento} - Bloco: {vaga.bloco}</span>
            <span>Vaga: {vaga.vaga}</span>
            <button onClick={() => removerVaga(index)} className='button-removr'>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaVaga;