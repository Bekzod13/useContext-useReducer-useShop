import { useContext } from 'react';
import {BsBag} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import useShop from '../contextApi/context';
import StateContext from '../contextApi/stateContext';

const Navbar = () => {

  const {totalItems} = useShop();
  const {setKey} = useContext(StateContext);

  return (
    <div className="navbar">
        <div className="container navbar-main">
            <Link to="/">home</Link>
            <input type="text" placeholder='Search' onChange={e=>setKey(e.target.value)}  />
            <Link to="/cart" className="cart">
                <span>{totalItems}</span>
                <BsBag/>
            </Link>
        </div>
    </div>
  )
}

export default Navbar;