import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import productSettings from '../api/settings'
import Products from '../components/Products'

const Settings = () => {

  return (
    <>
      <div className='relative bg-[#252836] flex text-[#fff] font-barlow'>
        <Sidebar />
        <div className='mx-8 mt-3 mb-10'>
          <h1 className=' text-3xl font-semibold'>Settings</h1>
          <div className='mt-8 block bg-[#1F1D2B] w-full py-5 px-10 pb-16 rounded-lg'>
            <div className='flex items-center gap-96'>
              <div className='flex flex-col'>
                <h3 className='text-xl '>Products Management</h3>
              </div>
              <button>
                <div className='flex gap-2 border border-white px-3 py-2 rounded grow-0'>
                  <img src="/icons/settings.svg" alt="setting" />
                  <h5 className='text-sm'>Manage Categories</h5>
                </div>
              </button>
            </div>
            <div className='flex flex-col pt-10 pb-4'>
              <div className='flex gap-10 text-sm'>
                <button className='text-[#FFCA40]'>Hot Dishes</button>
                <button>Cold Dishes</button>
                <button>Soup</button>
                <button>Grill</button>
                <button>Appetizer</button>
                <button>Dessert</button>
              </div>
            </div>
            <hr className='opacity-10' />
            <Products productSettings={productSettings} />
            <hr className='mt-10 opacity-10' />
          </div>
        </div>

      </div>

    </>
  )
}

export default Settings