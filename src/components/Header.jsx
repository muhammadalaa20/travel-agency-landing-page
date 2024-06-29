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
      <div className='hero-section flex flex-col justify-start gap-6 xl:gap-12 lg:gap-12 p-4 xl:p-0 lg:p-0'>
        <Top />
        <Bot />
      </div>
    </header>
  );
}