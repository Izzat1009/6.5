import React from 'react'

const Loading = ({count}) => {
  return (
    <div className='container mx-auto grid grid-cols-5 gap-3'>
        {
            Array(count).fill().map((_, inx)=> (
                <div key={inx} className='p-4 shadow-md'>
                    <div className='h-[250px] bg-slate-200'></div>
                    <div className='w-[80%] h-7 bg-slate-200 mt-2'></div>
                </div>
            ))
        }
    </div>
  )
}

export default Loading