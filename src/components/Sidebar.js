import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Swal from 'sweetalert2'

const Sidebar = () => {
  const { pathname } = useLocation()
  const handleLogout = () => {
    Swal.fire({
      title: 'Do you really want to logout ?',
      showCancelButton: true,
      confirmButtonColor: '#FFCA40',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'You have successfully logout',
          'redirecting...',
          'success'
        )
      }
    })
  }
  return (
    <aside className="h-screen sticky top-0" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 h-screen bg-[#1F1D2B]">
        <div className='flex flex-col justify-center items-center w-20 h-full gap-4'>
          <button>
            <img src="/img/sidebar/Shop.svg" className='w-[56px] ' alt="shop" />
          </button>
          <button>
            {pathname === '/' ? (
              <Link to='/'>
                <div className='w-full bg-[#252836] pr-3 ml-[7px] rounded-l-3xl'>
                  <div className='w-[70px] h-[70px] flex justify-center items-center '>
                    <img className='w-[45px] p-3 bg-[#FFCA40]' src="/img/sidebar/home-white.svg" alt="shop" />
                  </div>
                </div>
              </Link>
            ) : (
              <Link to='/'>
                <div className='w-[70px] h-[70px] flex items-center justify-center'>
                  <img className='w-[35px] p-2' src="/img/sidebar/home.svg" alt="shop" />
                </div>
              </Link>
            )
            }
          </button>
          <button>
            {pathname === '/dashboard' ? (
              <Link to='/dashboard'>
                <div className='w-full bg-[#252836] pr-3 ml-[7px] rounded-l-3xl'>
                  <div className='w-[70px] h-[70px] flex justify-center items-center '>
                    <img className='w-[45px] p-3 bg-[#FFCA40]' src="/img/sidebar/pie-white.svg" alt="shop" />
                  </div>
                </div>
              </Link>
            ) : (
              <Link to='/dashboard'>
                <div className='w-[70px] h-[70px] flex items-center justify-center '>
                  <img className='w-[35px] p-2' src="/img/sidebar/pie.svg" alt="shop" />
                </div>
              </Link>
            )
            }
          </button>
          <button >
            {pathname === '/settings' ? (
              <Link to='/settings'>
                <div className='w-full bg-[#252836] pr-3 ml-[7px] rounded-l-3xl'>
                  <div className='w-[70px] h-[70px] flex justify-center items-center '>
                    <img className='w-[45px] p-3 bg-[#FFCA40]' src="/img/sidebar/settings-white.svg" alt="shop" />
                  </div>
                </div>
              </Link>
            ) : (
              <Link to='/settings'>
                <div className='w-[45px] h-[50px] flex items-center justify-center'>
                  <img className='w-[35px] p-2' src="/img/sidebar/settings.svg" alt="shop" />
                </div>
              </Link>
            )
            }
          </button>
          <div className='flex flex-col items-center justify-end h-full'>
            <button onClick={handleLogout}>
              <img className='w-[150px] transform hover:scale-125' src="/img/sidebar/logout.svg" alt="shop" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar