import {BsBag} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import useShop from '../contextApi/context';

const Navbar = () => {

  const {totalItems} = useShop();

  return (
    <div className="navbar">
        <div className="container navbar-main">
            <Link to="/">home</Link>
            <Link to="/cart" className="cart">
                <span>{totalItems}</span>
                <BsBag/>
            </Link>
        </div>
    </div>
  )
}

export default Navbar;