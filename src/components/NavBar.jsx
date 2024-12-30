import '../styles/NavBar.css'
export default function NavBar({children}){
    return (
        <nav className="navBar">
            {children}
        </nav>
    );
}