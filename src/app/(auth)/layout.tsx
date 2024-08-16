import { FC, ReactNode } from 'react';


interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return <div className='bg-slate-100 p-10  rounded-md flex flex-col justify-center items-center w-fit mt-10 m-auto'>
    {children}
    </div>;
};

export default AuthLayout;
