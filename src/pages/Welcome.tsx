import Feacture from "./Feacture"

/* eslint-disable react-refresh/only-export-components */
export default () => {

    return (
        <div className="bg-gray-900">
            <header>
                <nav className="pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 sm:flex sm:space-x-6">
                    <a href="javascript:void(0)">
                        <img
                            src="/logo.png" 
                            width={50} 
                            height={50}
                            alt="Logo"
                        />
                    </a>
                    {/* Use flex-grow and ml-auto on the <ul> to push the list to the right */}
                    <ul className="py-4 flex items-center flex-grow space-x-6 sm:ml-auto sm:justify-end">
                        <li>
                            <a href="/login" className="flex items-center text-gray-200">
                                Log In
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="/register" className="flex items-center text-gray-200">
                                Sign In
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
                <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                    <h1 className="text-white font-bold text-4xl xl:text-5xl">
                        Wings Cafe Stock System 
                        <span className="text-indigo-400"> Digital World</span>
                    </h1>
                    <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                        Healthy switcher chefs do all the prep work, like peeding, chopping
                        & marinating, so you can buy mouth watering foods in campus prepared by the best.
                    </p>
                    <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                        <a href="/" className="px-7 py-3 w-full bg-white text-gray-800 text-center rounded-md shadow-md block sm:w-auto">
                            Manage Stock
                        </a>
                    </div>
                </div>
                <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
                    <img src="/stock-remove.png" className="w-full mx-auto sm:w-10/12 lg:w-full rounded-full" />
                </div>
            </section>
            <Feacture/>
        </div>
    )
}
