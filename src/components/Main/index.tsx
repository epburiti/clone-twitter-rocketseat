import React from 'react';

import { 
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  BottonMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon 
} from './styles';

import ProfilePage from '../ProfilePage/index';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Nome usuário</strong>
          <span>312 twitts</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />

      <BottonMenu>
        <HomeIcon className="active"/>
        <SearchIcon/>
        <BellIcon/>
        <EmailIcon/>
      </BottonMenu>
    </Container>
  );
}

export default Main;