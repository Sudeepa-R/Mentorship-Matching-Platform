import React from 'react'
import AppLayout from '../../dashboard/AppLayout/Layout'
import AppMenuManagement from './AppMenuManagement';


const AppMenuItems = () => {
  return (
    <>
    <AppLayout Heading="App Menu Management">
      <AppMenuManagement/>
    </AppLayout>
   
    </>
  )
}

export default AppMenuItems
