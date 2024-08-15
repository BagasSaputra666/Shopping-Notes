import { useState } from 'react';

export default function Form({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState('kg');

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;

    const newItem = { name, quantity, unit, checked: false, id: Date.now() };
    onAddItem(newItem);

    console.log(newItem);

    setName('');
    setQuantity(1);
  }

  const quantityNum = [...Array(20)].map((_, i) => (
    <option value={i + 1} key={i + 1}>
      {i + 1}
    </option>
  ));

  const unitProduct = [
    'kg',
    'g',
    'ons',
    'lb',
    'l',
    'ml',
    'gal',
    'kaps',
    'cm',
    'm',
    'pcs',
    'pak',
    'lusin',
    'kotak',
    'karung',
    'm²',
    'cm²',
    'botol',
    'bungkus',
    'kaleng',
    'sachet',
    'roll',
    'buah',
    'butir',
  ];

  const unitChoose = unitProduct.map((u, i) => (
    <option value={u} key={i}>
      {u}
    </option>
  ));

  return (
    <form className="form-add-list" onSubmit={handleSubmit}>
      <h3 className="form-add-title">Hari ini belanja apa kita?</h3>
      <div className="form-add-list-groceries">
        <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
          {quantityNum}
        </select>
        <select value={unit} onChange={(e) => setUnit(e.target.value)}>
          {unitChoose}
        </select>
        <input
          type="text"
          placeholder="nama barang..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button className="form-button-add">Tambah</button>
    </form>
  );
}
