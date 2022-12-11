import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className="h-screen sticky top-0" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 h-screen bg-[#1F1D2B]">
        <div className='flex flex-col justify-center items-center w-20 h-full gap-10'>
          <button>
            <img src="/img/sidebar/Shop.svg" className='w-[56px] ' alt="shop" />
          </button>
          <Link to='/'>
            <img className='w-[25px] transform hover:scale-150 ' src="/img/sidebar/home.svg" alt="shop" />
          </Link>
          <Link to='/dashboard'>
            <img className='w-[25px] transform hover:scale-150' src="/img/sidebar/pie.svg" alt="shop" />
          </Link>
          <Link to='/settings'>
            <img className='w-[25px] transform hover:scale-150' src="/img/sidebar/settings.svg" alt="shop" />
          </Link>
          <div className='flex flex-col items-center justify-end h-full'>
            <button>
              <img className='w-[150px]' src="/img/sidebar/logout.svg" alt="shop" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar