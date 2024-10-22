import React from 'react'

const TextfieldCmp = ({label,value,onChange,placeholder,type='text', width='w-full'}) => {
  return (
    <div className='mb-4'>
        {label && <label className='block text-gray-700 text-sm font-bold mb-2'> {label} </label>}
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className='text-sm p-2 w-full border rounded shadow focus:outline-none focus:shadow-outline'
        />
    </div>
  )
}

export default TextfieldCmp