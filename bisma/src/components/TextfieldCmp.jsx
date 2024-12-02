import React from 'react'

const TextfieldCmp = ({name,label,value,onChange,placeholder,type='text', width='w-full'}) => {
  return (
    <div className='mb-4'>
        {label && <label className='block text-gray-700 text-sm font-bold mb-2'> {label} </label>}
        <input
            type={type}
            value={value}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            className={`text-sm border border-black rounded shadow focus:outline-none focus:shadow-outline ${width}`} // Gabungkan kelas dengan `width`
        />
    </div>
  )
}

export default TextfieldCmp