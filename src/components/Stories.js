import Story from './Story';

export default function Stories() {

    const stories = [
        { img: "./assets/img/9gag.png", p: "9gag"},
        { img: "./assets/img/meowed.png", p: "meowed"},
        { img: "./assets/img/barked1.png", p: "barked"},
        { img: "./assets/img/nathanwpylestrangeplanet.png", p: "nathanwpyle..."},
        { img: "./assets/img/wawawiwacomicsa.png", p: "wawawiwac..."},
        { img: "./assets/img/respondeai.png", p: "respondeai"},
        { img: "./assets/img/filomoderna.png", p: "filomoderna"},
        { img: "./assets/img/memeriagourmet.png", p: "memeriago"}
    ]
    
    return (
        <div className="stories">

            {stories.map((story) => <Story key={story.img} imagem={story.img} texto={story.p} />)}

            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>

        </div>
    )
}