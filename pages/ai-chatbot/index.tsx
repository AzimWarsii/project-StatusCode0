import React, { useEffect, useState } from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';



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
      <h1>ai-chatbot</h1>
      <pre data-testid="profile-api">{JSON.stringify(user, null, 2)}</pre>
    </>
  );
});