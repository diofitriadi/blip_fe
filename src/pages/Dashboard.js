import React from 'react'
import Sidebar from '../components/Sidebar'
import mostOrdered from '../api/mostOrdered'
import order from '../api/order'

const Dashboard = () => {
  return (
    <div className='bg-[#252836] flex text-[#fff] font-barlow'>
      <Sidebar />
      <div className='mx-8 mt-3 mb-10'>
        <h1 className='text-3xl font-semibold mb-2'>Dashboard</h1>
        <p className='text-base text-[#ABBBC2]'>Tuesday 2 Feb, 2021</p>
        <hr className='opacity-10 mt-5' />
        <div className='flex gap-10 mt-8'>
          <div className='block bg-[#1F1D2B] w-1/3 py-4 px-5 rounded-lg'>
            <div className='flex items-center gap-3'>
              <img src='/icons/dollar.svg' alt='dollar' />
              <p className='text-sm text-[#50D1AA]'>+32.40%</p>
              <img src='/icons/arrowUp.svg' alt='arrowUp' />
            </div>
            <div className='pt-2'>
              <h2 className='text-2xl font-semibold'>Rp. 151.248.138</h2>
              <p className='text-sm text-[#ABBBC2] pt-2'>Total Revenue</p>
            </div>
          </div>
          <div className='block bg-[#1F1D2B] w-1/3 py-4 px-5  rounded-lg'>
            <div className='flex items-center gap-3'>
              <img src='/icons/dishOrdered.svg' alt='dishOrdered' />
              <p className='text-sm text-[#50D1AA]'>+2.40%</p>
              <img src='/icons/arrowDown.svg' alt='arrowDown' />
            </div>
            <div className='pt-2'>
              <h2 className='text-2xl font-semibold'>23,456</h2>
              <p className='text-sm text-[#ABBBC2] pt-2'>Total Dish Ordered</p>
            </div>
          </div>
          <div className='block bg-[#1F1D2B] w-1/3 py-4 px-5  rounded-lg'>
            <div className='flex items-center gap-3'>
              <img src='/icons/customer.svg' alt='customer' />
              <p className='text-sm text-[#50D1AA]'>+2.40%</p>
              <img src='/icons/arrowUp.svg' alt='arrowUp' />
            </div>
            <div className='pt-2'>
              <h2 className='text-2xl font-semibold'>1,234</h2>
              <p className='text-sm text-[#ABBBC2] pt-2'>Total Customer</p>
            </div>
          </div>
        </div>
        <div className='mt-8 block bg-[#1F1D2B] w-full py-5 px-10 pb-16 rounded-lg'>
          <div className='flex items-center gap-96'>
            <div className='flex flex-col'>
              <h3 className='text-xl '>Order Report</h3>
            </div>
            <button>
              <div className='flex gap-2 border border-white px-3 py-2 rounded grow-0'>
                <img src="/icons/settings.svg" alt="setting" />
                <h5 className='text-sm'>Filter Order</h5>
              </div>
            </button>
          </div>
          <hr className='opacity-10 mt-10' />
          <div className="overflow-x-auto relative pt-4 pb-4">
            <table className="w-full text-sm text-left">
              <thead>
                <tr>
                  <th scope="col" className="py-2">
                    Customer
                  </th>
                  <th scope="col" className="py-2">
                    Menu
                  </th>
                  <th scope="col" className="py-2">
                    Total Payment
                  </th>
                  <th scope="col" className="py-2">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {order.map((item) => {
                  return (
                    <>
                      <tr>
                        <th scope="row" className="py-3 font-medium whitespace-nowrap text-white">
                          <div className='flex gap-3 items-center'>
                            <img src={item.img} className='-mx-2' alt={item.name} />
                            <p>{item.name}</p>
                          </div>
                        </th>
                        <td className="py-4">
                          {item.info}
                        </td>
                        <td className="py-4">
                          Rp. {item.payment}.000
                        </td>
                        <td className="py-4">
                          {item.status === 'Completed' ?
                            <p className='px-1 py-1 bg-[#6BE2BE3D] text-[#50D1AA] rounded-3xl text-center'>
                              {item.status}
                            </p> :
                            item.status === 'Preparing' ?
                              <p className='px-1 py-1 bg-[#9290FE33] text-[#9290FE] rounded-3xl text-center'>
                                {item.status}
                              </p> :
                              item.status === 'Pending' ?
                                <p className='px-1 py-1 bg-[#FFB57233] text-[#FFB572] rounded-3xl text-center'>
                                  {item.status}
                                </p> : ''
                          }
                        </td>
                      </tr>
                    </>
                  )
                })}
              </tbody>
            </table>
          </div>
          <hr className='opacity-10' />
        </div>
      </div>
      <div className='bg-[#1F1D2B] w-1/4 m-5 p-5 h-full rounded-lg'>
        <div className='flex justify-between items-center'>
          <h2>Most Ordered</h2>
          <select className='rounded bg-[#252836] pl-3 py-2 text-sm'>
            <option>Today</option>
            <option>Past Week</option>
            <option>Past Month</option>
          </select>
        </div>
        <hr className='opacity-10 mt-5' />
        <div className='pt-5 pb-10'>
          {mostOrdered.map((item, index) => {
            return (
              <>
                <div className='flex items-center gap-4 pb-5'>
                  <img src={item.img} alt={index} className='rounded-full w-[50px]' />
                  <div className='flex flex-col text-xs gap-1'>
                    <p>{item.info}</p>
                    <p>{item.order} dish Ordered</p>
                  </div>
                </div>
              </>
            )
          })}
        </div>
        <button className='w-full'>
          <div className='text-center mt-4 p-2 border border-red-400 text-red-400 text-sm rounded-lg hover:bg-slate-900 hover:text-white transition hover:border-white'>
            Hide
          </div></button>
      </div>
    </div >
  )
}

export default Dashboard