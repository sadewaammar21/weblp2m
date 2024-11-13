import React, { useState } from 'react';
import PopUpDosen from './PopUpDosen';

const ParentComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dosenList, setDosenList] = useState([]);

  // Function to handle adding dosen
  const handleAddDosen = (newDosen) => {
    setDosenList((prevList) => [...prevList, newDosen]);
  };

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Add Dosen</button>

      <PopUpDosen
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onAddDosen={handleAddDosen} // Pass the function here
      />

      <div>
        <h2>Dosen List</h2>
        <ul>
          {dosenList.map((dosen, index) => (
            <li key={index}>{dosen.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ParentComponent;
