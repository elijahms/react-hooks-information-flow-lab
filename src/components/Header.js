
export const Header = ({handleDarkModeClick, isDarkMode}) => {
    
    return (
        <div className={"App " + (isDarkMode ? "dark" : "light")}>
        <header>
            <h2>Shopster</h2>
                <button onClick={handleDarkModeClick}>
                {isDarkMode ? "Dark" : "Light"} Mode
                </button>
        </header>
        </div>
    )
}

export default Header
