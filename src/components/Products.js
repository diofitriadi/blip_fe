import React from 'react'

const Products = ({ productSettings }) => {
  return (
    <div className='flex flex-col pt-10'>
      <div className='flex gap-16 flex-wrap '>
        <div className='flex flex-col justify-center items-center border border-dashed border-[#FFCA40] hover:border-[#FFF]  text-base text-[#FFCA40] hover:text-[#FFF] w-[221px] h-[299px] rounded gap-2 transition cursor-pointer'>
          <span>+</span>
          <p>Add new dish</p>
        </div>
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
              <button className='flex h-full items-center justify-center bg-[#564730] mt-[1.2rem] w-full p-4 gap-3 rounded-b-lg'>
                <img src='/icons/pencil.svg' alt='pencil' />
                <p className='text-[#FFCA40] text-sm font-semibold'>Edit Dish</p>
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Products