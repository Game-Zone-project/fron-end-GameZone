import Game from "../Game/Game";

import Slider from '../Slider/Slider';
import './GameList.css';

export default function GameList(props) {

    return (
        <>
            <section class="firstSec">
            <Slider />
            </section>
            <section id="secondSec">

                <div class="divCont">
                    {
                        props.data.map(element => {
                            return (
                                <>
                                    <Game data={element} reviewHandler={props.reviewHandler} />
                                </>
                            )
                        })
                    }
                </div>
                <br></br>
            </section>
        </>
    );
}

