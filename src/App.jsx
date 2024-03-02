import { useState, useRef } from 'react';
import logo from './assets/logoColor.png';
import Header from './components/Header';
import Documentation from './components/Documentation';

function App() {

  return (
    <>
      <div className='bg-gradient-to-b from-slate-900 to-slate-500 from-33% h-[100%] flex items-center flex-col'>
        <div className='flex justify-center '>
          <img src={logo} className='h-28 sm:h-36 md:h-48 xl:h-56 2xl:h-64 w-auto mt-24' />
        </div>

        <Documentation />
        <div>
          <h1 className='text-slate-100 font-normal font-sans text-sm lg:text-lg'>2024 www.FrankAzzaro.com | github.com/donziglioni</h1>
        </div>
      </div>
      {/* <div className='bg-gradient-to-b to-slate-900 from-slate-100 from-50% h-[100vh]'>

      </div>
      <div className='bg-gradient-to-b from-slate-900 to-slate-100 from-50% h-[100vh]'>

      </div> */}
    </>

  )
}

export default App;
