import Carousel from 'react-bootstrap/Carousel';
import './Slider';

const SlideShow = () => {
    return (
        <>
            <Carousel fade style={{ border: '2px solid darkgrey', boxShadow: '0px 0px 30px 20px rgb(202, 43, 43)',height: '100%' ,width: '80%', margin: 'auto', marginTop: '4rem' }}>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://logowik.com/content/uploads/images/counter-strike-global-offensive6428.jpg"
                        alt="cs-go"
                        style={{ height: '470px'}}
                      
                    />
                    <Carousel.Caption>
                        <h3>Counter Strike Global Offensive</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://guildwars2.staticwars.com/wp-content/themes/guildwars2.com-live/img/og-img.f6214476.jpg"
                        alt="guild wars 2"
                        style={{ height: '470px'}}
                
                    />
                    <Carousel.Caption>
                        <h3>guildwars2</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://cdn.akamai.steamstatic.com/steam/apps/570/capsule_616x353.jpg?t=1650611880"
                        alt="Dota 2"
                        style={{ height: '70%' }}
                    />
                    <Carousel.Caption>
                        <h3>Dota 2</h3>
                    </Carousel.Caption>
                </Carousel.Item >
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://c.nau.ch/i/Q5ar2J8kbLpgewRGKYnLW187APW4o9DMBXvNqln1/1024/activision-blizzard.jpg"
                        alt="WOW"
                        style={{ height: '70%' }}
                    />
                    <Carousel.Caption>
                        <h3>WoW</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://cdn1.epicgames.com/3328b08ac1c14540aa265a1a85c07839/offer/hzd_wide-2560x1440-bd312be05c49cf339097777c493cb899.jpg"
                        alt="Horizon -Zero Dawn-"
                        style={{ height: '70%' }}
                    />
                    <Carousel.Caption>
                        <h3>WoW</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png"
                        alt="Witcher 3"
                        style={{ height: '70%' }}
                    />
                    <Carousel.Caption>
                        <h3>Witcher 3 :Remasterd</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://steamcdn-a.akamaihd.net/steam/apps/457140/capsule_616x353.jpg"
                        alt="oxygen-not-icluded"
                        style={{ height: '70%' }}
                    />
                    <Carousel.Caption>
                        <h3>Oxygen Not included</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://www.quizexpo.com/wp-content/uploads/2022/03/cover-14-1024x591.jpg"
                        alt="LoL"
                        style={{ height: '70%' }}
                    />
                    <Carousel.Caption>
                        <h3>League of legends</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000008122/453d17f26995df6bd67d698c90ba2fd27157a61875e1a9730545da23474c6aaf"
                        alt="Dark-Souls"
                        style={{ height: '70%' }}
                    />
                    <Carousel.Caption>
                        <h3>Dark Souls</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://s1.pearlcdn.com/NAEU/Upload/Manager/MetaTag/228130168b920230309095056103.jpg?v=638167941483918976"
                        alt="black-desert"
                        style={{ height: '70%' }}
                    />
                    <Carousel.Caption>
                        <h3>Black Desert</h3>
                    </Carousel.Caption> */}
                {/* </Carousel.Item> */}
            </Carousel >
        </>

    )
}

export default SlideShow
