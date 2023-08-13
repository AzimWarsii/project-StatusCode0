import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Card from './Card1'
import Card2 from './Card2'


const Contents = () => {
  // return (
  //   <div className=' lg:flex justify-center '>
  //   <Link href='/ai-chatbot'>
  //   <div  className="max-w-sm rounded overflow my-10 mx-10 shadow-lg  transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-300">
    
  //   <svg className="w-[190px] h-[170px] mx-20 pt-2 text-gray-700 dark:text-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
  //   <path d="M9 19V.352A3.451 3.451 0 0 0 7.5 0a3.5 3.5 0 0 0-3.261 2.238A3.5 3.5 0 0 0 2.04 6.015a3.518 3.518 0 0 0-.766 1.128c-.042.1-.064.209-.1.313a3.34 3.34 0 0 0-.106.344 3.463 3.463 0 0 0 .02 1.468A4.016 4.016 0 0 0 .3 10.5l-.015.036a3.861 3.861 0 0 0-.216.779A3.968 3.968 0 0 0 0 12a4.032 4.032 0 0 0 .107.889 4 4 0 0 0 .2.659c.006.014.015.027.021.041a3.85 3.85 0 0 0 .417.727c.105.146.219.284.342.415.072.076.148.146.225.216.1.091.205.179.315.26.11.081.2.14.308.2.02.013.039.028.059.04v.053a3.506 3.506 0 0 0 3.03 3.469 3.426 3.426 0 0 0 4.154.577A.972.972 0 0 1 9 19Zm10.934-7.68a3.956 3.956 0 0 0-.215-.779l-.017-.038a4.016 4.016 0 0 0-.79-1.235 3.417 3.417 0 0 0 .017-1.468 3.387 3.387 0 0 0-.1-.333c-.034-.108-.057-.22-.1-.324a3.517 3.517 0 0 0-.766-1.128 3.5 3.5 0 0 0-2.202-3.777A3.5 3.5 0 0 0 12.5 0a3.451 3.451 0 0 0-1.5.352V19a.972.972 0 0 1-.184.546 3.426 3.426 0 0 0 4.154-.577A3.506 3.506 0 0 0 18 15.5v-.049c.02-.012.039-.027.059-.04.106-.064.208-.13.308-.2s.214-.169.315-.26c.077-.07.153-.14.225-.216a4.007 4.007 0 0 0 .459-.588c.115-.176.215-.361.3-.554.006-.014.015-.027.021-.041.087-.213.156-.434.205-.659.013-.057.024-.115.035-.173.046-.237.07-.478.073-.72a3.948 3.948 0 0 0-.066-.68Z"/>
  //   </svg>
  //     {/* <Image 
  //     src="/bot.svg"
  //     width={190}
  //     height={250}
  //     alt="Picture of the author"
  //     className='mx-20 pt-2 shadow-inner'
  //     />  */}
    
  //    <div className="px-6 py-4">
  //      <h1 className="font-bold text-xl mb-2">Trainer</h1>
  //      <a className="text-gray-700 text-base" >
  //        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
  //      </a>
  //      </div>
  //     </div>
  //     </Link>

  //     <Link href='/goals'>
  //     <div  className="max-w-sm rounded overflow my-10 mx-10 shadow-lg  transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-300">
  //     <svg className="w-[190px] h-[170px] mx-20 pt-2 text-gray-700 dark:text-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
  //     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M1 1v14h16M4 10l3-4 4 4 5-5m0 0h-3.207M16 5v3.207"/>
  //     </svg>
  //    {/* <Image 
  //     src="/"
  //     width={500}
  //     height={250}
  //     alt="Picture of the author"/> */}
   
  //    <div className="px-6 py-4"  >
  //      <h1 className="font-bold text-xl mb-2">Goals</h1>
  //      <a className="text-gray-700 text-base" href='/goals' >
  //        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
  //      </a>
  //      </div>
  //     </div>
  //   </Link>

  //   <Link href='/booking'>
  //     <div  className="max-w-sm rounded overflow my-10 mx-10 shadow-lg  transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-300">
  //     <svg className="w-[190px] h-[170px] mx-20 pt-2  text-gray-700 dark:text-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 19">
  //     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"/>
  //     </svg>
  //    {/* <Image 
  //     src=""
  //     width={500}
  //     height={250}
  //     alt="Picture of the author"
  //     /> */}
    
  //    <div className="px-6 py-4" >
  //      <div className="font-bold text-xl mb-2">Diet</div>
  //      <a className="text-gray-700 text-base" href='/booking'>
  //        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
  //      </a>
  //      </div>
  //     </div>
  //     </Link>
  //  </div>

  // )
  return(
    <>
    <div className="pl-6 pt-4 font-inter font-bold text-xl">This Week</div>
      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap lg:ml-40 md:ml-20 ">

          <Card  day={"Sunday"} part={"Tricep"}/>
          <Card2  day={"Monday"} part={"Leg"}/>
          <Card2  day={"Tuesday"} part={"Chest"}/>
          <Card2  day={"Wednesday"} part={"Arms"}/>
          <Card2  day={"Thursday"} part={"Back"}/>
          <Card2  day={"Friday"} part={"Shoulder"} />
          <Card2  day={"Saturday"} part={"Abs"}/>
        </div>
      </div>
      </>
  )
}

export default Contents