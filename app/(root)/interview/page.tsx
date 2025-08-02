import Agent from '@/components/Agent'
import React from 'react'
import { getCurrentUser } from '@/lib/actions/auth.action'



const Page = async () => {
  const user =await getCurrentUser();
  return (
    <>
    <div className="flex flex-center">
      <div > 
      <h2>Interview Generation</h2>
      </div>
    </div>
    


    <Agent userName={user?.name!} userId ={user?.id} type="generate"/>
    </>
    
  )
}

export default Page
//  bg-gray-500 width rounded-full