import React from 'react'

export default function NewTasks() {

  return (
    <div className='mt-2'>
            <div className='mb-3 mt-7'>
                <label htmlFor="id">Project <span className='text-red-500'>*</span> </label>
                <input 
                type="text" 
                name="project" 
                id="project" 
                placeholder='Project'
                className='border-2 rounded-xl py-2 px-4 focus:border-gray-500 w-full' />
            </div>
            <div className='mb-3'>
                <label htmlFor="names">Description <span className='text-red-500'>*</span></label>

                <textarea 
                name="description" 
                id="description" 
                cols="30" rows="10" className='border-2 rounded-xl py-2 px-4 focus:border-gray-500 w-full'>
                </textarea>
            </div>
            
        </div>
  )
}
