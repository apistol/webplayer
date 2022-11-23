import React from 'react'

const Title = () => {
  return (
    <div className='flex'>
        <img src="https://picsum.photos/200?random=2" className='w-20 h-20'/>
        <div className='pt-1 pl-4'>
            <p className='text-white'>Angels</p>
            <p className='mt-1 text-grayer'>The XX</p>
            <p className='mt-1 text-grayer'>PLAING FROM: Coexist</p>
        </div>
    </div>
  )
}

export default Title