interface HeaderProps {
    toggleDarkMode: () => void;
    isdarkMode: boolean;
}

export const Header = ({ toggleDarkMode, isdarkMode }: HeaderProps) => {
    return(
        <div className="flex items-center justify-between p-4 border-b">
            <div>
                <h1>Hi, Paulo André</h1>
            </div>
            <div>
                <button
                    onClick={() => toggleDarkMode()}
                    className="mr-2 p-2 border rounded cursor-pointer dark:bg-primary dark:text-white" 
                    >
                        {isdarkMode ? "Light Mode" : "Dark Mode"}
                    </button>
            </div>
        </div>
    )
}