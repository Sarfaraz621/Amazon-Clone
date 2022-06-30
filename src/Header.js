import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import SearchIcon from "@mui/icons-material/Search"
import { ShoppingBasket } from '@mui/icons-material'
import { useStateValue} from './StateProvider'

function Header() {
    const [{basket}] = useStateValue();
  return (
    <nav className="header">
        <Link to="/">
        <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon"/>      
            </Link>
            <div className='header_search'>

            <input type="text" className='header_searchInput' />
            <SearchIcon className="header_searchIcon"/>
            </div>

            <div className='header_nav'>
                
                    <div className='header_option'>

                <span className='header_optionLineOne'>Hello</span>
                <span className='header_optionLineTwo'>Sign In</span>
                    </div>
                
                <Link to="/" className="header_link">
                <div className='header_option'>

                <span className='header_optionLineOne'>Returns</span>
                <span className='header_optionLineTwo'>& Orders</span>
                    </div>
                </Link>
                <div className='header_option'>

                <span className='header_optionLineOne'>Your</span>
                <span className='header_optionLineTwo'>Prime</span>
                    </div>
                
                <Link to="/checkout" className='header_link'>
                    <div className='header_optionBasket'>
                        <ShoppingBasket />
                        <span className='header_optionBasketCount'>{basket.length}</span>
                    </div>
                </Link>
            </div>

    </nav>
  )
}

export default Header
