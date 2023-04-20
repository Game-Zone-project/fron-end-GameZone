import { useAuth0 } from "@auth0/auth0-react";
import Game from "../Game/Game";

import Slider from '../Slider/Slider';
import './GameList.css';

export default function GameList(props) {
    const { isAuthenticated, logout } = useAuth0();
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

