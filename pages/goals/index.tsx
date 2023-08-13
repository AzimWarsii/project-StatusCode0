'use client'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import Navbar1 from '../../components/Navbar1';



export default withPageAuthRequired(function ProfileApi() {
  const [user, setUser] = useState();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const res = await fetch(`${window.location.origin}/api/page-router-profile`);
      setUser(await res.json());
    })();
  }, []);

  const createPrompt = async () => {
    try{
        const response = await fetch("/api/prompt/new",
        {
            method:'POST',
            body: JSON.stringify({
                prompt:"123",
                userId:"123",
                tag:"123"
            }),
        })
        if (response.ok){
            router.push("/");
        }
    }catch(error){
        console.log(error)
    }
  }
  const input =
    "block py-2.5 px-0 w-full text-sm font-inter text-secondary bg-black border-0 border-b-2 border-green-500 appearance-none focus:outline-none focus:ring-0 focus:border-green-100 peer";
  const label =
    "peer-focus:font-medium bg-black font-inter absolute text-xs  duration-300 transform top-3 -z-10 origin-[0] left-0 text-secondary scale-75 -translate-y-8";



  return (
<>

  
    <div className="justify-center p-8">
      <form>
        <div className="grid grid-cols-3 gap-6">
          <div className=" relative pb-5 z-0 w-full mb-6 col-span-2 bg-transparent group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className={input}
              placeholder=" "
              required
            />
            <label className={label}>
              Monday
            </label>
          </div>
          <div className=" relative pb-5 z-0 w-full mb-6 col-span-1 bg-transparent group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className={input}
              placeholder=" "
              required
            />
            <label className={label}>
              Time
            </label>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className=" relative pb-5 z-0 w-full mb-6 col-span-2 bg-transparent group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className={input}
              placeholder=" "
              required
            />
            <label  className={label}>
              Tuesday
            </label>
          </div>
          <div className=" relative pb-5 z-0 w-full mb-6 col-span-1 bg-transparent group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className={input}
              placeholder=" "
              required
            />
            <label className={label}>
              Time
            </label>
          </div>
        </div>
        <div className="grid  grid-cols-3  gap-6">
          <div className=" relative pb-5 z-0 w-full mb-6 col-span-2 bg-transparent group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className={input}
              placeholder=" "
              required
            />
            <label className={label}>
              Wednesday
            </label>
          </div>
          <div className=" relative pb-5 z-0 w-full mb-6 col-span-1 bg-transparent group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className={input}
              placeholder=" "
              required
            />
            <label className={label}>
              Time
            </label>
          </div>
        </div>
        <div className="grid  grid-cols-3  gap-6">
          <div className=" relative pb-5 z-0 w-full mb-6 col-span-2 bg-transparent group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className={input}
              placeholder=" "
              required
            />
            <label className={label}>
              Thursday
            </label>
          </div>
          <div className=" relative pb-5 z-0 w-full mb-6 col-span-1 bg-transparent group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className={input}
              placeholder=" "
              required
            />
            <label className={label}>
              Time
            </label>
          </div>
        </div>
        <div className="grid  grid-cols-3  gap-6">
          <div className=" relative pb-5 z-0 w-full mb-6 col-span-2 bg-transparent group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className={input}
              placeholder=" "
              required
            />
            <label className={label}>
              Friday
            </label>
          </div>
          <div className=" relative pb-5 z-0 w-full mb-6 col-span-1 bg-transparent group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className={input}
              placeholder=" "
              required
            />
            <label  className={label}>
              Time
            </label>
          </div>
        </div>
        <div className="grid  grid-cols-3  gap-6">
          <div className
          =" relative pb-5 z-0 w-full mb-6 col-span-2 bg-transparent group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className={input}
              placeholder=" "
              required
            />
            <label className={label}>
              Saturday
            </label>
          </div>
          <div className=" relative pb-5 z-0 w-full mb-6 col-span-1 bg-transparent group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className={input}
              placeholder=" "
              required
            />
            <label className={label}>
              Time
            </label>
          </div>
        </div>
        <div className="grid  grid-cols-3  gap-6">
          <div className=" relative pb-5 z-0 w-full mb-6 col-span-2 bg-transparent group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className={input}
              placeholder=" "
              required
            />
            <label className={label}>
              Sunday
            </label>
          </div>
          <div className=" relative pb-5 z-0 w-full mb-6 col-span-1 bg-transparent group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className={input}
              placeholder=" "
              required
            />
            <label className={label}>
              Time
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
    <div className='h-28'>

    </div>
    <Navbar1/>
  
      <pre data-testid="profile-api">{JSON.stringify(user, null, 2)}</pre>
    </>
  );
});