import React, { useEffect, useState } from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import NameCard from '../../components/NameCard';
import Navbar1 from '../../components/Navbar1';



export default withPageAuthRequired(function ProfileApi() {
  const [user, setUser] = useState();

  useEffect(() => {
    (async () => {
      const res = await fetch(`${window.location.origin}/api/page-router-profile`);
      setUser(await res.json());
    })();
  }, []);

  return (
<>
<div className="p-4 font-bold font-body text-5xl text-primary tracking-widest text-center">
        Leaderboard
        <div className="m-auto">
          <NameCard name="Farhan" win="true" />
          <NameCard name="Hatif" />
          <NameCard name="Aman" />
          <NameCard name="Azim" />
          <NameCard name="Obey" />
        </div>
        <div className="p-4 font-bold font-body text-2xl text-danger tracking-widest text-center">
          Previous Week
          <div className="m-auto">
            <NameCard name="Azim" win="true" />
            <NameCard name="Hatif" />
            <NameCard name="Farhan" />
            <NameCard name="Aman" />
            <NameCard name="Obey" />
          </div>
        </div>
      </div>
      <Navbar1 />
      <pre data-testid="profile-api">{JSON.stringify(user, null, 2)}</pre>
    </>
  );
});