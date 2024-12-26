import style from './about.module.css'

function about() {
    return(
        <section id="section" className={style.container}>
            <h1 className={style.title}>About</h1>
            <h3>Hello,</h3>
            <h2>I'm Ajith G</h2>
            <h3>Bachelor in Data Science</h3>
            <p>
              I am a second year Engineering student in the department of Artificial Intelligence and Data Science (AI&DS) at Velammal Engineering College. I secured overall CGPA of 8.575 at the end of my first year. I am certified in several programming languages including Python, C, C++, Java, JavaScript, HTML, CSS, Dart and I have experience with the Flutter framework. 
            </p>


        </section>
    );
}

export default about;