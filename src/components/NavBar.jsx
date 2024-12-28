import '../styles/NavBar.css'
export default function NavBar({children}){
    return (
        <div className="navBar">
            {children}
        </div>
    );
}