import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className={`flex gap-5 px-5 py-4`}>
      <span> <NavLink to="/movies">Movies</NavLink>  </span>
      <span> <NavLink to="/wishlist">Wishlist</NavLink> </span>
      <span> <NavLink to="/todo">Todo</NavLink> </span>
      <span> <NavLink to="/github">Github-User </NavLink> </span>
      <span> <NavLink to="/notes">Notes 📃</NavLink> </span>
    </div>
  );
}

export default Header;
