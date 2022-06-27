import { Header, Nav, NavigationLink, NavItem } from './AppBar.styled';
import { UserMenu } from '../UserMenu/UserMenu';
import { LogInMenu } from '../LogInMenu/LogInMenu';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/user/userSelectors';

export const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Header>
      <Nav>
        <NavItem>
          <NavigationLink to={'/'}>Home</NavigationLink>
        </NavItem>
        <NavItem>
          <NavigationLink to={'/about-us'}>About us</NavigationLink>
        </NavItem>
      </Nav>

      {isLoggedIn ? <UserMenu /> : <LogInMenu />}
    </Header>
  );
};
