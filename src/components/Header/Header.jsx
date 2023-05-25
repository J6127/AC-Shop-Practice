import { ReactComponent as LogoIcon } from '../../icons/logo.svg';
import { ReactComponent as Toggle } from '../../icons/toggle.svg';
import { ReactComponent as CartIcon } from '../../icons/cart.svg';
import { ReactComponent as Sun } from '../../icons/sun.svg';
import { ReactComponent as Moon } from '../../icons/moon.svg';
import { ReactComponent as Search } from '../../icons/search.svg';

export default function Header (){
    return(
        //<!-- header -->
        <header className="site-header">
          <div className="header-container mx-auto">
            {/*<!-- navbar-toggle --*/}
            <input id="navbar-toggle" className="navbar-toggle" type="checkbox" />
            <label for="navbar-toggle" className="burger-container">
              <Toggle className="icon-toggle cursor-point" />
                {/*<use xlink:href="#svg-icon-toggle"></use>*/}
      
            </label>
    
            {/*<!-- navbar-menu -->*/}
            <nav className="navbar-menu">
              <ul className="nav-list site-menu-list mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">男款</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">女款</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">最新消息</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">客製商品</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">聯絡我們</a>
                </li>
              </ul>
              <ul className="nav-list site-action-list">
                {/*<!-- search -->*/}
                <li className="nav-item">
                  <Search className="nav-icon cursor-point" />
                    {/*<use xlink:href="#svg-icon-search"></use>*/}                          
                </li>
                {/*<!-- cart -->*/}
            <li className="nav-item">
              <CartIcon className="nav-icon cursor-point" />
                {/*<use xlink:href="#svg-icon-cart"></use>*/}
         
            </li>
            <li id="theme-toggle" className="nav-item">
              {/*<!-- moon -->
              <Moon className="nav-icon cursor-point"/>*/}
                {/*<use xlink:href="#svg-icon-moon"></use>*/}
                   
              {/*<!-- sun -->*/}
              <Sun className="nav-icon cursor-point"/>
                {/*<use xlink:href="#svg-icon-sun"></use>*/}

            </li>
          </ul>
        </nav>

        {/*<!-- logo -->*/}
        <a className="header-logo-container" href="/">
          <LogoIcon className="icon-logo cursor-point"/>
            {/*<use xlink:href="#svg-icon-logo"></use>*/}
        </a>
      </div>
      </header>
    )
}