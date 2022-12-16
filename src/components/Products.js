import React, { useState } from 'react'
import Swal from 'sweetalert2'

const Products = ({ productSettings }) => {
  const [showAddDish, setShowAddDish] = useState(false)
  const handleSuccess = () => {
    Swal.fire({
      title: '<h1>Create Success</h1>',
      color: '#FFCA40',
      confirmButtonColor: '#FFCA40',
    })
    setShowAddDish(false)
  }
  return (
    <div className='flex flex-col pt-10'>
      <div className='flex gap-16 flex-wrap '>
        <button onClick={() => setShowAddDish(true)}>
          <div className='flex flex-col justify-center items-center border border-dashed border-[#FFCA40] hover:border-[#FFF]  text-base text-[#FFCA40] hover:text-[#FFF] w-[221px] h-[299px] rounded gap-2 transition cursor-pointer'>
            <span>+</span>
            <p>Add new dish</p>
          </div>
        </button>
        {productSettings.map((item, index) => {
          return (
            <div className='flex flex-col items-center border border-[#fff] border-opacity-20 text-sm w-[221px] h-[299px] rounded-lg gap-2 transition pt-4' key={index}>
              <img src={item.image} className='rounded-full w-[125px] h-[180px]' alt="seafood" />
              <div className=' gap-2'>
                <p className='text-center w-[144px]'>{item.info}</p>
                <div className='flex gap-2 text-[#ABBBC2] pt-2 '>
                  <p>Rp.{item.price}.000</p>
                  <span>•</span>
                  <p>{item.qty} bowls</p>
                </div>
              </div>
              <button
                className='flex h-full items-center justify-center bg-[#564730] mt-[1.2rem] w-full p-4 gap-3 rounded-b-lg'
              >
                <img src='/icons/pencil.svg' alt='pencil' />
                <p className='text-[#FFCA40] text-sm font-semibold'>Edit Dish</p>
              </button>
            </div>
          )
        })}
        {showAddDish ?
          <>
            <div className="flex justify-center items-center overflow-hidden fixed inset-0 z-50 outline-none focus:outline-none bg-black/60">
              <div className='absolute right-0 top-0 bg-[#1F1D2B] w-[450px] h-[100vh]'>
                <form>
                  <div className='pl-6'>
                    <button
                      className="bg-transparent border-0 text-black float-right"
                      onClick={() => setShowAddDish(false)}
                    >
                      <span className="text-white opacity-7 h-8 w-8 text-xl block rounded-3xl font-bold mr-5 mt-6 hover:bg-[#564730] bg-[#FFCA40] transition">
                        x
                      </span>
                    </button>
                    <p className='py-5'>Add New Dish</p>

                    <div className='flex gap-5 text-sm'>
                      <button className='bg-[#FFCA40] text-white font-bold py-1 px-2 rounded-lg'>Hot Dishes</button>
                      <button className=''>Cold dishes</button>
                      <button className=''>Button</button>
                      <button className=''>Grill</button>
                    </div>
                  </div>
                  <hr className='mt-5 opacity-10' />
                  <div className='text-[#FFCA40] text-sm'>
                    <div className='flex flex-col items-center justify-center mt-5 ml-10 mr-10 mb-2 border border-dashed border-[#FFCA40] hover:border-white hover:text-white h-[120px] gap-1 cursor-pointer'>
                      <p className='text-2xl'>+</p>
                      <p className='text-base'>Add Picture</p>
                    </div>
                  </div>
                  <div className='px-10'>
                    <label className="block text-gray-700 text-sm font-bold my-2" for="username">
                      Product Name
                    </label>
                    <input className=" px-3 py-2 w-9/12 rounded-lg bg-[#393C49] text-[#E0E6E9] text-sm border border-white border-opacity-30" id="username" type="text" placeholder="Click here..." />
                    <label className="block text-gray-700 text-sm font-bold my-2" for="username">
                      Price
                    </label>
                    <input className=" px-3 py-2 w-9/12 rounded-lg bg-[#393C49] text-[#E0E6E9] text-sm border border-white border-opacity-30" id="username" type="text" placeholder="Click here..." />
                    <label className="block text-gray-700 text-sm font-bold my-2" for="username">
                      Stock
                    </label>
                    <input className=" px-3 py-2 w-6/12 rounded-lg bg-[#393C49] text-[#E0E6E9] text-sm border border-white border-opacity-30" id="username" type="text" placeholder="Click here..." />
                    <label className="block text-gray-700 text-sm font-bold my-2" for="username">
                      Item
                    </label>
                    <input className=" px-3 py-2 w-6/12 rounded-lg bg-[#393C49] text-[#E0E6E9] text-sm border border-white border-opacity-30" id="username" type="text" placeholder="Click here..." />
                  </div>
                  <div className='flex flex-col items-center justify-center my-3'>
                    <button
                      className='bg-[#FFCA40] px-1 py-2 text-white font-bold w-[80%] rounded-lg'
                      onClick={handleSuccess}
                    >
                      Continue To Payment
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </> : ''
        }
      </div>
    </div>
  )
}

export default Products