import React, { useState } from 'react';
import { Container } from 'components/Container';
import { Header } from 'components/Header';
import { Search } from 'components/Search';
import { UserCard } from 'components/UserCard';
import { GithubError, GithubUser, LocalUser } from 'types';
import { isGithubUser } from 'utils/typeguards';
import { extractLocalUser } from 'utils/extract-local-user';
import { defaultUser } from 'mock';

const BASE_URL = 'https://api.github.com/users/';


function App() {
  const [user, setUser] = useState<LocalUser | null>(defaultUser);
  const fetchUser = async (username: string) => {
    const url = BASE_URL + username;

    const response = await fetch(url);
    const user = await response.json() as GithubUser | GithubError;

    if (isGithubUser(user)) {
      setUser(extractLocalUser(user));
    } else {
      setUser(null);
    }
  }
  return (
    <Container>
      <Header />
      <Search hasError={false} onSubmit={fetchUser} />
      {user && (<UserCard {...user} />)}
    </Container>
  );
}

export default App;
