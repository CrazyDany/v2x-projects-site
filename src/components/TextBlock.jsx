import '../styles/TextBlock.css'

export default function TextBlock({ children }) {
    return (
        <section className='textBlock'>
            {children}
        </section>
    );
}