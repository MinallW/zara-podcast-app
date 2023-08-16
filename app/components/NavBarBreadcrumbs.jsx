export default function NavBarBreadcrumbs() {
    return (
        <div className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        Inicio
                    </a>
                </li>
                <BreadcrumbLink LinkTitle={'yes'}/>
                <li>
                    <div className="flex items-center">
                        <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Episodio</span>
                    </div>
                </li>
            </ol>
        </div>
    )
}

function BreadcrumbLink({ LinkTitle }) {
    return (
        <>
            <li>
                <div className="flex items-center">
                    <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">{LinkTitle}</a>
                </div>
            </li>
        </>
    )
}