import Game from "../Game/Game";
import Slider from '../Slider/Slider';
import './GameList.css';

export default function GameList(props) {

    return (
        <>
            <section class="firstSec">
                <Slider />
                <p>Top played games</p>
            </section>
            <section id="secondSec">
                <h1>All Games</h1>
                <div class="divCont">
                    {
                        props.data.map(element => {
                            return (
                                <>
                                    <Game data={element} />
                                </>
                            )
                        })
                    }
                </div>
            </section>
        </>
    );
}

