import logo from '../assets/pumalogo.png';
import {navItems} from '../constants';
import {menuicon} from '../assets/images/index';

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container mt-[35px] '>
            <a href="/">
                <img src={logo} 
                alt="Logo" 
                width={130}
                height={29} />
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
              {navItems.map((item) => (
                <li key ={item.label} >
                  <a href={item.href} className='font-monts errat leading-normal text-lg text-slate-grey'>
                    {item.label}
                  </a>

                </li>
              ))}

            </ul>
            <div className="hidden max-lg:block">

              <img src={menuicon} alt="Menuicon" width={25} height={25} />

            </div>
        </nav>
    </header>
  )
}

export default Nav
