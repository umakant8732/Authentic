import React from 'react'
import Table from '../../components/Table/Table'

function AddProduct() {


  const people = [
    {
      name: 'John Doe',
      title: 'Front-end Developer',
      department: 'Engineering',
      email: 'john@devui.com',
      role: 'Developer',
      image:
        'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    },
    {
      name: 'Jane Doe',
      title: 'Back-end Developer',
      department: 'Engineering',
      email: 'jane@devui.com',
      role: 'CTO',
      image:
        'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
    },
  
    {
      name: 'Jane Doe',
      title: 'Back-end Developer',
      department: 'Engineering',
      email: 'jane@devui.com',
      role: 'CTO',
      image:
        'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
    },
  
    {
      name: 'Jane Doe',
      title: 'Back-end Developer',
      department: 'Engineering',
      email: 'jane@devui.com',
      role: 'CTO',
      image:
        'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
    },
  
    {
      name: 'Jane Doe',
      title: 'Back-end Developer',
      department: 'Engineering',
      email: 'jane@devui.com',
      role: 'CTO',
      image:
        'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
    },
  
  
    {
      name: 'Jane Doe',
      title: 'Back-end Developer',
      department: 'Engineering',
      email: 'jane@devui.com',
      role: 'CTO',
      image:
        'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
    },
  
    {
      name: 'Jane Doe',
      title: 'Back-end Developer',
      department: 'Engineering',
      email: 'jane@devui.com',
      role: 'CTO',
      image:
        'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
    },
  ]




  return (
    <div className="h-screen overflow-y-auto">
      <Table data={people} />
    </div>
  )
}

export default AddProduct
