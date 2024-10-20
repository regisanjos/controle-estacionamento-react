import React, { useState, useEffect } from 'react';

const VagasDisponiveis = () => {
 
  const [vagasDisponiveis, setVagasDisponiveis] = useState(() => {
    return JSON.parse(localStorage.getItem('vagasDisponiveis')) || [];
  });

  const vagasOrdenadas = vagasDisponiveis.sort((a, b) => a.vaga.localeCompare(b.vaga));

  return (
    <div>
      <h3>Vagas Disponíveis</h3>
      <ul>
        {vagasDisponiveis.length > 0 ? (
          vagasDisponiveis.map((vaga, index) => (
            <li key={index} className="vaga-disponivel">
              <span>Vaga: {vaga.vaga}</span>
              <span>Bloco: {vaga.bloco}</span>
            </li>
          ))
        ) : (
          <li>Nenhuma vaga disponível no momento.</li>
        )}
      </ul>
    </div>
  );
};

export default VagasDisponiveis;
