import React from 'react'

export default function NewTasks({ projectName, projectDescription }) {

  return (
    <div className='mt-2'>
            <div className='mb-3 mt-7'>
                <label htmlFor="id">Project</label>
                <div
                className='border-2 rounded-xl py-2 px-4 focus:border-gray-500 w-full' >{projectName}</div>
            </div>
            <div className='mb-3'>
                <label htmlFor="names">Description</label>

                <div className='border-2 rounded-xl py-2 px-4 focus:border-gray-500 w-full'>
                  {projectDescription}
                </div>
            </div>
            
        </div>
  )
}
