import React from 'react'

const  card = (props) => {
  return (
    <div className='card' onClick={props.onClick}>
      <div className='p-5 flex flex-col items-center'> 

      
      <div className='rounded-xl overflow-hidden'>
        <img src={props.img} alt='img' className=' '/>
      </div>
    
        <h5 className='text-[#004492] text-2xl  mt-3 font-medium ' >{props.title}</h5>
      
        <p className=' text-lg mt-3 ml-24px font-normal text-[#0a0c12] ' >{props.desc}</p>
        </div>

</div>
  )
}

export default card