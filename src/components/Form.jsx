import React from 'react'

const Form = () => {
  return (
    <div className="containorForm">
        <input type="text" placeholder='Add List' className='px-6 py-2 md:px-10 outline-none' />
        <button className='bg-slate-600 text-white m-6 px-10 py-2 rounded-sm hover:bg-slate-300 transition-all hover:text-black'> Submit</button>
    </div>
  )
}

export default Form