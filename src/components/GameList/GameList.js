import Game from "../Game/Game";
import './GameList.css';

export default function GameList(props){

    return(
        <>
    <section class="firstSec">
        <h1>Welcome to ProjectName</h1>
        <a href="#secondSec"><button>Let's Go</button></a>
    </section>
    <section id="secondSec">
        <h1>All Games</h1>
        <div class="divCont">
            {
                props.data.map(element => {
                    return (
                        <>
                        <Game data={element}/>
                        </>
                    )
                })
            }
        </div>
    </section>
        </>
    );
}

