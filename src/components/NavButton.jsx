import '../styles/NavButton.css'
import '../styles/Colors.css'
export default function NavButton({ text, href }) {
    const handleClick = (event) => {
        document.querySelectorAll('.navButton').forEach(button => button.classList.remove('active'));
        event.currentTarget.parentNode.classList.add('active');
    };

    return (
        <div className="navButton">
            <a onClick={handleClick}>{text}</a>
        </div>
    );
}