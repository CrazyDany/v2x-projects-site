import '../styles/NavButton.css'
import '../styles/Colors.css'
export default function NavButton({text, href}){
    return (
        <div className="navButton">
            <a href={href}>{text}</a>
        </div>
    );
}