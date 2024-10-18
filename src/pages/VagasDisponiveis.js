import React from 'react';

const VagasDisponiveis = () => {

  const vagasDisponiveis = [
    { vaga: '1A', bloco: 'A' },
    { vaga: '2B', bloco: 'B' },
    { vaga: '3C', bloco: 'C' },
    { vaga: '4D', bloco: 'D' },
    { vaga: '5E', bloco: 'E' }
  ];

  return (
    <div>
      <h3>Vagas Disponíveis</h3>
      <ul>
        {vagasDisponiveis.map((vaga, index) => (
          <li key={index} className='vaga-disponivel'>
            <span>Vaga: {vaga.vaga}</span> 
            <span>Bloco: {vaga.bloco}</span> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VagasDisponiveis;
