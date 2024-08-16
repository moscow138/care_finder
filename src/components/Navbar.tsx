import Link from 'next/link';
import { Button, buttonVariants } from './ui/button';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import UserNav from './UserNav';
import Image from 'next/image';

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className='flex items-center justify-between bg-gray-300'>
      <div className='flex gap-5 items-center'>
        <Link href='/'>
          <Image src='/carefinder.png'
          className='rounded-md ml-1'
          alt='logo'
          width={100}
          height={100}
          />
        </Link>  
        <Link href='/'>
        <h2>Home</h2>
        </Link>
        <Link href='/about'>
        <h2>About</h2>
        </Link>
     {session?.user ? <Link href='/admin'><h2>Admin</h2></Link> : null}
    
      </div>
      <div className=' bg-gray-100 p-[6px] rounded-md w-[40%] gap-2 hidden md:flex'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
       <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
       </svg>
       <input type='text' className='bg-transparent outline-none w-full' aria-label='search' placeholder='Search here' />
      </div>
      
      <h2>
      {session?.user ? (
       <UserNav />
              ): (
          <Link className={buttonVariants()} href='/sign-in'>
          Sign in
        </Link>
      )}
      </h2>
    </div>
  );
};

export default Navbar;
