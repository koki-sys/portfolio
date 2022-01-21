import { Link } from "react-router-dom"
import "templates/DashboardHeader/style.css"

export const DashboardHeader = () => {
    return (
        <nav className="flex items-center justify-between flex-wrap header-bg p-4 shadow">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="text-xl tracking-tight header-text">
                    KokiSys Portfolio
                </span>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto"></div>
            <div>
                <div className="text-sm lg:flex-grow">
                    <Link
                        to="/works"
                        className="block mt-4 lg:inline-block lg:mt-0 header-text hover:text-white mr-4"
                    >
                        Works
                    </Link>
                    <Link
                        to="/about"
                        className="block mt-4 lg:inline-block lg:mt-0 header-text hover:text-white"
                    >
                        About
                    </Link>
                </div>
            </div>
        </nav>
    )
}
