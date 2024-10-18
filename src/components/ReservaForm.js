import React, { useState } from 'react';

const CadastroVaga = () => {
  const [formData, setFormData] = useState({
    placa: '',
    nome: '',
    apartamento: '',
    bloco: '',
    modelo: '',
    cor: '',
    vaga: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    const vagasExistentes = JSON.parse(localStorage.getItem('vagas')) || [];
    
 
    const novasVagas = [...vagasExistentes, formData];
    
   
    localStorage.setItem('vagas', JSON.stringify(novasVagas));
    
   
    setFormData({
      placa: '',
      nome: '',
      apartamento: '',
      bloco: '',
      modelo: '',
      cor: '',
      vaga: ''
    });
    alert('Vaga cadastrada com sucesso!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Placa do veículo:</label>
      <input name="placa" value={formData.placa} onChange={handleChange} required />

      <label>Nome do proprietário:</label>
      <input name="nome" value={formData.nome} onChange={handleChange} required />

      <label>Apartamento:</label>
      <input name="apartamento" value={formData.apartamento} onChange={handleChange} required />

      <label>Bloco:</label>
      <input name="bloco" value={formData.bloco} onChange={handleChange} required />

      <label>Modelo:</label>
      <input name="modelo" value={formData.modelo} onChange={handleChange} required />

      <label>Cor:</label>
      <input name="cor" value={formData.cor} onChange={handleChange} required />

      <label>Vaga:</label>
      <input name="vaga" value={formData.vaga} onChange={handleChange} required />

      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default CadastroVaga;
