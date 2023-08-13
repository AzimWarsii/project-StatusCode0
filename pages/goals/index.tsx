'use client'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';



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



  return (
<>
      <h1>Goals</h1>
      <pre data-testid="profile-api">{JSON.stringify(user, null, 2)}</pre>
    </>
  );
});