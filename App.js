import React, { useState, useEffect } from 'react';
import WinCard from './components/WinCard';
import './styles.css';

const App = () => {
  const [wins, setWins] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: ''
  });

  const fetchWins = async () => {
    const res = await fetch('https://microwins-backend-1.onrender.com/api/wins');
    const data = await res.json();
    setWins(data);
  };

  useEffect(() => {
    fetchWins();
  }, []);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await fetch('https://microwins-backend-1.onrender.com/api/wins', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    setFormData({ title: '', description: '', category: '' });
    fetchWins();
  };

  return (
    <div className="container">
      <h1>MicroWins 🏆</h1>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
        <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} required />
        <button type="submit">Add Win</button>
      </form>

      <h2>Recent Wins</h2>
      {wins.map(win => <WinCard key={win._id} win={win} />)}
    </div>
  );
};

export default App;