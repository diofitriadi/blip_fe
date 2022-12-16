import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import coldDishes from '../api/coldDishes'
import hotDishes from '../api/hotDishes'
import Swal from 'sweetalert2'

const HomePage = () => {
  const [count, setCount] = useState(0)
  if (count < 0) {
    setCount(0)
  } else if (count > 20) {
    setCount(20)
  }

  const [toggleButton, setToggleButton] = useState(coldDishes)

  return (
    <div className='bg-[#252836] flex text-[#fff] font-barlow'>
      <Sidebar />
      <div className='mx-8 mt-3 mb-10 w-full'>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col'>
            <h1 className='text-3xl font-semibold mb-2'>Made Resto</h1>
            <p className='text-base text-[#ABBBC2]'>Tuesday 2 Feb, 2021</p>
          </div>
          <input
            type='text'
            id='search'
            placeholder='Search for food, coffee, etc...'
            className='px-4 py-2 rounded-xl text-[#ABBBC2] bg-[#393C49] placeholder:text-sm'
          />
        </div>
        <div className='flex flex-col pt-10 pb-4'>
          <div className='flex gap-10 text-sm h-[50px]'>
            <button className={toggleButton === hotDishes ? 'text-[#FFCA40] border-b-2 border-[#FFCA40]' : ''} onClick={() => setToggleButton(hotDishes)}>Hot Dishes</button>
            <button className={toggleButton === coldDishes ? 'text-[#FFCA40] border-b-2 border-[#FFCA40]' : ''} onClick={() => setToggleButton(coldDishes)}>Cold Dishes</button>
            <button>Soup</button>
            <button>Grill</button>
            <button>Appetizer</button>
            <button>Dessert</button>
          </div>
        </div>
        <hr className='-mt-[17px] opacity-10' />
        <div className='flex items-center justify-between w-full mt-5'>
          <h1>Choose dishes</h1>
          <select className='rounded bg-[#1F1D2B] border border-white border-opacity-10 px-3 py-2 text-sm'>
            <option>Dine In</option>
            <option>Takeaway</option>
          </select>
        </div>
        <div className='flex flex-wrap justify-between'>
          {toggleButton === coldDishes ?
            <>
              {coldDishes.map((item, index) => {
                return (
                  <>
                    <div className='relative flex-col items-center text-sm w-[200px] h-[240px] bg-[#1F1D2B] rounded-lg transition pt-4 mt-16'>
                      <div className='absolute bottom-5 right-[24px]'>
                        <img src={item.image} className='rounded-full' alt="seafood" />
                        <div className=' flex flex-col items-center gap-1 mt-5'>
                          <p className='text-center w-[140px] h-[45px]'>{item.info}</p>
                          <p>Rp. {item.price}.000</p>
                          <p className='text-xs text-[#ABBBC2] mt-1'>{item.qty} bowls available</p>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })}</> :
            <>
              {hotDishes.map((item, index) => {
                return (
                  <>
                    <div className='relative flex-col items-center text-sm w-[200px] h-[240px] bg-[#1F1D2B] rounded-lg transition pt-4 mt-16'>
                      <div className='absolute bottom-5 right-[24px]'>
                        <img src={item.image} className='rounded-full' alt="seafood" />
                        <div className=' flex flex-col items-center gap-1 mt-5'>
                          <p className='text-center w-[140px] h-[45px]'>{item.info}</p>
                          <p>Rp. {item.price}.000</p>
                          <p className='text-xs text-[#ABBBC2] mt-1'>{item.qty} bowls available</p>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })}
            </>}
        </div>
      </div>
      <div className='bg-[#1F1D2B] w-3/5 ml-5 p-5 pb-9 h-full sticky top-0'>
        <div className='flex'>
          <h2 className='text-xl font-semibold'>Orders #34562</h2>
        </div>
        <div className='flex mt-4 gap-2 text-sm'>
          <button className='border px-2 py-1 rounded-lg bg-[#FFCA40] text-white'>Dine In</button>
          <button className='border px-2 py-1 rounded-lg border-white border-opacity-20 font-semibold'>Take It</button>
          <button className='border px-2 py-1 rounded-lg border-white border-opacity-20 font-semibold'>Delivery</button>
        </div>
        <div className="p-0 overflow-x-auto relative pt-4 pb-4 ">
          <table className="w-full text-sm text-left">
            <thead>
              <tr>
                <th scope="col" className="py-2">
                  Item
                </th>
                <th scope="col" className="py-2">
                  Qty
                </th>
                <th scope="col" className="py-2">
                  Payment
                </th>
              </tr>
            </thead>
            <tbody>
              <>
                <tr>
                  <th scope="row" className="py-3 font-medium whitespace-nowrap text-white">
                    <div className='flex gap-3 items-center'>
                      <img src='/img/image4.png' className='rounded-full w-[40px]' alt='tes' />
                      <div className='flex flex-col gap-1'>
                        <p>Spicy seasoned sea...</p>
                        <p>Rp.43.000</p>
                      </div>
                    </div>
                  </th>
                  <td className="py-4">
                    <div className='flex gap-2 items-center'>
                      <p className='border border-white border-opacity-10 rounded-lg w-[30px] h-[25px] bg-[#393C49] text-white text-center'>{count}</p>
                      <div className='flex flex-col gap-2'>
                        <button onClick={() => setCount(count + 1)}>
                          <img src='/icons/countUp.svg' alt='countUp' />
                        </button>
                        <button onClick={() => setCount(count - 1)}>
                          <img src='/icons/countDown.svg' alt='countDown' />
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="py-4">
                    Rp.86.000
                  </td>
                </tr>
                <tr>
                  <td colspan='3'>
                    <div className='flex items-center gap-5'>
                      <input
                        type='text'
                        defaultValue='Please, just a little bit spicy only.'
                        className='mt-2 px-4 py-3 w-5/6 rounded-lg bg-[#393C49] text-[#E0E6E9] text-sm border border-white border-opacity-30'
                      />
                      <button>
                        <img src='/icons/trash.svg' alt='trash' className='border border-[#FFCA40] p-2 mt-2 rounded-lg' />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="py-3 font-medium whitespace-nowrap text-white">
                    <div className='flex gap-3 items-center'>
                      <img src='/img/image4.png' className='rounded-full w-[40px]' alt='tes' />
                      <div className='flex flex-col gap-1'>
                        <p>Spicy seasoned sea...</p>
                        <p>Rp.43.000</p>
                      </div>
                    </div>
                  </th>
                  <td className="py-4">
                    <div className='flex gap-2 items-center'>
                      <p className='border border-white border-opacity-10 rounded-lg w-[30px] h-[25px] bg-[#393C49] text-white text-center'>{count}</p>
                      <div className='flex flex-col gap-2'>
                        <button onClick={() => setCount(count + 1)}>
                          <img src='/icons/countUp.svg' alt='countUp' />
                        </button>
                        <button onClick={() => setCount(count - 1)}>
                          <img src='/icons/countDown.svg' alt='countDown' />
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="py-4">
                    Rp.86.000
                  </td>
                </tr>
                <tr>
                  <td colspan='3'>
                    <div className='flex items-center gap-5'>
                      <input
                        type='text'
                        className='mt-2 px-4 py-3 w-5/6 rounded-lg bg-[#393C49] text-[#E0E6E9] text-sm border border-white border-opacity-30'
                      />
                      <button>
                        <img src='/icons/trash.svg' alt='trash' className='border border-[#FFCA40] p-2 mt-2 rounded-lg' />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="py-3 font-medium whitespace-nowrap text-white">
                    <div className='flex gap-3 items-center'>
                      <img src='/img/image4.png' className='rounded-full w-[40px]' alt='tes' />
                      <div className='flex flex-col gap-1'>
                        <p>Spicy seasoned sea...</p>
                        <p>Rp.43.000</p>
                      </div>
                    </div>
                  </th>
                  <td className="py-4">
                    <div className='flex gap-2 items-center'>
                      <p className='border border-white border-opacity-10 rounded-lg w-[30px] h-[25px] bg-[#393C49] text-white text-center'>{count}</p>
                      <div className='flex flex-col gap-2'>
                        <button onClick={() => setCount(count + 1)}>
                          <img src='/icons/countUp.svg' alt='countUp' />
                        </button>
                        <button onClick={() => setCount(count - 1)}>
                          <img src='/icons/countDown.svg' alt='countDown' />
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="py-4">
                    Rp.86.000
                  </td>
                </tr>
                <tr>
                  <td colspan='3'>
                    <div className='flex items-center gap-5'>
                      <input
                        type='text'
                        className='mt-2 px-4 py-3 w-5/6 rounded-lg bg-[#393C49] text-[#E0E6E9] text-sm border border-white border-opacity-30'
                      />
                      <button>
                        <img src='/icons/trash.svg' alt='trash' className='border border-[#FFCA40] p-2 mt-2 rounded-lg' />
                      </button>
                    </div>
                  </td>
                </tr>
              </>
            </tbody>
          </table>
        </div>

        <hr className='opacity-10' />
        <div className='flex flex-col gap-2 mt-4'>
          <div className='flex justify-between'>
            <p>Discount</p>
            <p>Rp0</p>
          </div>
          <div className='flex justify-between'>
            <p>Subtotal</p>
            <p>Rp.296.000</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage