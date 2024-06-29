import Nav from './Nav'
import Mobilenav from './Mobilenav';
import Top from './Top';
import Bot from './Bot';
export default function Header() {

  return (
    <header className="header">
      <div className="hidden lg:flex items-center">
        <Nav />
      </div>
      <div className='lg:hidden'>
        <Mobilenav />
      </div>
      <div className='hero-section flex flex-col justify-start'>
        <Top/>
        <Bot/>
      </div>
    </header>
  );
}