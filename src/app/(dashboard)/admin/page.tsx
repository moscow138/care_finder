import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import Image from "next/image"
import Link from 'next/link';
import './styles/all.css'
import './styles/style.css'

const page = async() => {

    const session = await getServerSession(authOptions)
    console.log(session);
    if(session?.user){
      return (
        <div>

        <div className="flex flex-1">
            {/* Sidebar */}
            <aside id="sidebar" className="bg-side-nav w-1/2 md:w-1/6 lg:w-1/6 border-r border-side-nav hidden md:block lg:block">

                <ul className="list-reset flex flex-col">
                    <li className=" w-full h-full py-3 px-2 border-b border-light-border bg-white">
                        <Link href="/admin"
                           className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                            <i className="fas fa-tachometer-alt float-left mx-2"></i>
                            Dashboard
                            <span><i className="fas fa-angle-right float-right"></i></span>
                        </Link>
                    </li>
                    <li className="w-full h-full py-3 px-2 border-b border-light-border">
                        <Link href="/add-category"
                           className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                            <i className="fas fa-plus float-left mx-2"></i>
                            Add Category
                            <span><i className="fa fa-angle-right float-right"></i></span>
                        </Link>
                    </li>
                    <li className="w-full h-full py-3 px-2 border-b border-light-border">
                        <Link href="/add-healthcare-home"
                           className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                            <i className="fas fa-hospital float-left mx-2"></i>
                            Add Healthcare Facility
                            <span><i className="fa fa-angle-right float-right"></i></span>
                        </Link>
                    </li>
                    <li className="w-full h-full py-3 px-2 border-b border-light-border">
                        <a href="tables.html"
                           className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                            <i className="fas fa-users float-left mx-2"></i>
                            List users
                            <span><i className="fa fa-angle-right float-right"></i></span>
                        </a>
                    </li>
                
                 
                    <li className="w-full h-full py-3 px-2">
                        <a href="#"
                           className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                            <i className="fas fa-user float-left mx-2"></i>
                            Profile
                            <span><i className="fa fa-angle-down float-right"></i></span>
                        </a>
                    </li>
                </ul>

            </aside>
            {/* --/Sidebar--> */}
            {/* <!--Main--> */}
            <main className="bg-white-300 flex-1 p-3 overflow-hidden">

                <div className="flex flex-col">
                    {/* <!-- Stats Row Starts Here --> */}
                    <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
                        <div className="shadow-lg bg-red-vibrant border-l-8 hover:bg-red-vibrant-dark border-red-vibrant-dark mb-2 p-2 md:w-1/4 mx-2">
                            <div className="p-4 flex flex-col">
                                <a href="#" className="no-underline text-white text-2xl">
                                Welcome to Admin
                                </a>
                                <a href="#" className="no-underline text-white text-lg">
                                {session?.user.username || session.user.name}
                                </a>
                            </div>
                        </div>

                        <div className="shadow bg-info border-l-8 hover:bg-info-dark border-info-dark mb-2 p-2 md:w-1/4 mx-2">
                            <div className="p-4 flex flex-col">
                                <a href="#" className="no-underline text-white text-2xl">
                                    10
                                </a>
                                <a href="#" className="no-underline text-white text-lg">
                                    users
                                </a>
                            </div>
                        </div>

                        <div className="shadow bg-warning border-l-8 hover:bg-warning-dark border-warning-dark mb-2 p-2 md:w-1/4 mx-2">
                            <div className="p-4 flex flex-col">
                                <a href="#" className="no-underline text-white text-2xl">
                                    20
                                </a>
                                <a href="#" className="no-underline text-white text-lg">
                                    Categories
                                </a>
                            </div>
                        </div>

                        <div className="shadow bg-success border-l-8 hover:bg-success-dark border-success-dark mb-2 p-2 md:w-1/4 mx-2">
                            <div className="p-4 flex flex-col">
                                <a href="#" className="no-underline text-white text-2xl">
                                    500
                                </a>
                                <a href="#" className="no-underline text-white text-lg">
                                    Healthcare Facilities
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- /Stats Row Ends Here --> */}

                    {/* <!-- Card Sextion Starts Here --> */}
                    <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">

                        {/* <!-- card --> */}

                        <div className="rounded overflow-hidden shadow bg-white mx-2 w-full">
                            <div className="px-6 py-2 border-b border-light-grey">
                                <div className="font-bold text-xl">Top Categories</div>
                            </div>
                            <div className="table-responsive">
                                <table className="table text-grey-darkest">
                                    <thead className="bg-grey-dark text-white text-normal">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Item</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Current</th>
                                        <th scope="col">Change</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>
                                            <button className="bg-blue-500 hover:bg-blue-800 text-white font-light py-1 px-2 rounded-full">
                                                Hospital
                                            </button>
                                        </td>
                                        <td>4500</td>
                                        <td>4600</td>
                                        <td>
                                            <span className="text-green-500"><i className="fas fa-arrow-up"></i>5%</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>
                                            <button className="bg-primary hover:bg-primary-dark text-white font-light py-1 px-2 rounded-full">
                                                clinics
                                            </button>
                                        </td>
                                        <td>10000</td>
                                        <td>3000</td>
                                        <td>
                                            <span className="text-red-500"><i className="fas fa-arrow-down"></i>65%</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th scope="row">3</th>
                                        <td>
                                            <button className="bg-success hover:bg-success-dark text-white font-light py-1 px-2 rounded-full">
                                                Pharmacy
                                            </button>
                                        </td>
                                        <td>10000</td>
                                        <td>3000</td>
                                        <td>
                                            <span className="text-red-500"><i className="fas fa-arrow-down"></i>65%</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th scope="row">4</th>
                                        <td>
                                            <button className="bg-blue-500 hover:bg-blue-800 text-white font-light py-1 px-2 rounded-full">
                                            Dialysis Centers
                                            </button>
                                        </td>
                                        <td>10000</td>
                                        <td>3000</td>
                                        <td>
                                            <span className="text-green-500"><i className="fas fa-arrow-up"></i>65%</span>
                                        </td>
                                    </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* <!-- /card --> */}

                    </div>
                    {/* <!-- /Cards Section Ends Here --> */}

                    {/* <!-- Progress Bar --> */}
                    <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2 mt-2">
                        <div className="rounded overflow-hidden shadow bg-white mx-2 w-full pt-2">
                            <div className="px-6 py-2 border-b border-light-grey">
                                <div className="font-bold text-xl">Progress Among Categories</div>
                            </div>
                            <div className="">
                                <div className="w-full">

                                    <div className="shadow w-full bg-grey-light">
                                        <div className="bg-blue-500 text-xs leading-none py-1 text-center text-white w-[45%]">
                                             45%
                                        </div>
                                    </div>


                                    <div className="shadow w-full bg-grey-light mt-2">
                                        <div className="bg-teal-500 text-xs leading-none py-1 text-center text-white w-[55%]">
                                             55%
                                        </div>
                                    </div>


                                    <div className="shadow w-full bg-grey-light mt-2">
                                        <div className="bg-orange-500 text-xs leading-none py-1 text-center text-white w-[65%]">
                                             65%
                                        </div>
                                    </div>


                                    <div className="shadow w-full bg-grey-300 mt-2">
                                        <div className="bg-red-800 text-xs leading-none py-1 text-center text-white w-[75%]">75%
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/* <!--/Main--> */}
        </div>
        {/* <!--Footer--> */}
        <footer className="bg-grey-darkest text-white p-2">
            <div className="flex flex-1 mx-auto">&copy; Care Home Finder</div>
        </footer>
        {/* <!--/footer--> */}

    </div>        
        
      )

    }else{
      return <div>Please login to see Admin content</div>
    }
 
}

export default page