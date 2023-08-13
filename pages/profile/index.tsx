import React, { useEffect, useState } from 'react';
import { useUser } from "@auth0/nextjs-auth0/client";
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import Image from "next/image";



export default withPageAuthRequired(function ProfileApi() {
  const [userr, setUser] = useState();
  const { user, error, isLoading } = useUser();

  useEffect(() => {
    (async () => {
      const res = await fetch(`${window.location.origin}/api/page-router-profile`);
      setUser(await res.json());
    })();
  }, []);

  return (
<>
<div className="bg-black">
      <div className="container mx-auto p-6">
        <div className="max-w-sm mx-auto bg-black rounded-lg shadow-md overflow-hidden">
          <div className="relative h-40 bg-hospital-bg">
            <Image
              src="/7.png"
              alt="Profile Picture"
              width={5000}
              height={5000}
              className="w-40 h-40 mx-auto mt-6 rounded-full border-4 border-white shadow-md"
            />
          </div>
          <div className="p-4">
            <h1 className="text-xl font-semibold text-white">{user.name}</h1>
            <p className="text-sm text-white-600">
              Age: <span  className="number">35</span> | Gender: Male
            </p>
            <p className="text-sm text-white-600">
              ID: <span className="number">123456789</span> | Blood Type: O+
            </p>
          </div>

          <div className="p-4 border-t border-gray-200">
            <h2 className="text-lg font-semibold text-white-800 mb-2">
              Health Details
            </h2>
            <p className="text-sm text-white-600">
              <span className="font-semibold">Weight:</span>{" "}
              <span className="number">70</span> kg
            </p>
            <p className="text-sm text-white-600">
              <span className="font-semibold">Height:</span>{" "}
              <span className="number">175</span> cm
            </p>
            <p className="text-sm text-white-600">
              <span className="font-semibold">Allergies:</span>{" "}
              <span className="text">None</span>
            </p>
            <p className="text-sm text-white-600 pt-4">
              <a href="/api/auth/logout" className="font-semibold">Logout</a>{" "}
              
            </p>
          </div>
        </div>
      </div>
    </div>
      <pre data-testid="profile-api">{JSON.stringify(userr, null, 2)}</pre>

    </>
  );
});