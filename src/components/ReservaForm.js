
import React, { useState } from 'react';


const ReservaForm = () => {
    const [formData, setFormData] = useState({
        placa:'',
        nome:'',
        apartamento:'',
        bloco:'',
        modelo:'',
        cor:'',
        vaga:'',
    });


const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.values
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Cadastro realisado com sucesso');
    
    setFormData({
        placa: '',
        nome: '',
        apartamento: '',
        bloco: '',
        modelo: '',
        cor: '',
        vaga: ''
      });
    
};
return (
    <form onSubmit={handleSubmit}>
        <label>Placa do veiculo</label>
        <input name="placa" value={formData.placa} onChange={handleChange}required/>

        
      <label>Nome do proprietário:</label>
      <input name="nome" value={formData.nome} onChange={handleChange} required />
      
      <label>Número do apartamento:</label>
      <input name="apartamento" value={formData.apartamento} onChange={handleChange} required />
      
      <label>Bloco do apartamento:</label>
      <input name="bloco" value={formData.bloco} onChange={handleChange} required />
      
      <label>Modelo do veículo:</label>
      <input name="modelo" value={formData.modelo} onChange={handleChange} required />
      
      <label>Cor do veículo:</label>
      <input name="cor" value={formData.cor} onChange={handleChange} required />
      
      <label>Número da vaga de estacionamento:</label>
      <input name="vaga" value={formData.vaga} onChange={handleChange} required />
      
      <button type="submit">Salvar</button>
    </form>
 );
};

export default ReservaForm;
