import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className="h-screen sticky top-0" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 h-screen bg-[#1F1D2B]">
        <div className='flex flex-col justify-center items-center w-20 h-full'>
          <button>
            <img src="/img/sidebar/Shop.svg" className='w-[56px]' alt="shop" />
          </button>
          <Link to='/'>
            <img className='ml-1 w-[200px]' src="/img/sidebar/Home.svg" alt="shop" />
          </Link>
          <Link to='/dashboard'>
            <img className='ml-1 w-[200px]' src="/img/sidebar/Pie.svg" alt="shop" />
          </Link>
          <Link to='/settings'>
            <img className='ml-1 w-[200px]' src="/img/sidebar/Settings.svg" alt="shop" />
          </Link>
          <div className='flex flex-col items-center justify-end h-full'>
            <button>
              <img className='ml-1 w-[150px]' src="/img/sidebar/Logout.svg" alt="shop" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar