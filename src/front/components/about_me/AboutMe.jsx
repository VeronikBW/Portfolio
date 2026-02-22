import './aboutMe.css';

export const AboutMe = () => {
    return (
        <>
            <div className="about-container">
                <img
                    src="https://www.shutterstock.com/shutterstock/photos/2057511686/display_1500/stock-photo-an-ash-cat-programmer-in-a-red-bow-tie-and-glasses-is-typing-on-a-keyboard-of-computer-white-2057511686.jpg"
                    alt="Verónica Rodríguez - Gato programador"
                    className="about-image"
                />
                <div className="about-text">
                    <h1> <i className="fas fa-code"></i> Verónica Rodríguez</h1>
                    <p> ¡Hola mundo! No soy un robot, sino un desarrollador full-stack</p>
                    <p>apasionada por la tecnología y la programación.</p>
                </div>
            </div>
        </>
    )
}