import React, {useState} from 'react';
import Modal from 'react-modal';
import SearchInput from './SearchInput';

Modal.setAppElement('#root');

const PopUpMhs = ({ isOpen, onRequestClose }) => {

    const [NIM, setNim] = useState('');

    const handleSearch = () => {
        console.log('Search for:', NIM);
        // Add search logic here
      };
  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className="bg-white rounded-lg shadow-lg p-6 w-[50%] mx-auto mt-20"
        overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >

<h1 className="text-xl font-bold mx-5 my-5">Anggota Pengabdian -  Form</h1>
<div>
<div className='p-4'>
    <SearchInput
    label ="NIDN"
    placeholder = "select NIDN"
    value={NIM}
        onChange={(e) => setNim(e.target.value)}
        onSearch={handleSearch}
    />
</div>
</div>
    </Modal>
  )
}

export default PopUpMhs