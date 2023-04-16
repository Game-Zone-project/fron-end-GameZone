import Game from "../Game/Game";


export default function GameList(props){

    return(
        <>
            {
                props.data.map(element => {
                    return (
                        <>
                        <Game data={element}/>
                        </>
                    )
                })
            }
        </>
    );
}