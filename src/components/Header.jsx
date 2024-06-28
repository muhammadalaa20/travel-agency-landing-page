import Nav from './Nav'
import Mobilenav from './Mobilenav';
export default function Header() {

    return (
        <header className="header h-[100vh] dark:grayscale">
          <div className="hidden lg:flex items-center">
          <Nav />
          </div>
          <div className='lg:hidden'>
          <Mobilenav />
          </div>
        </header>
    );
}