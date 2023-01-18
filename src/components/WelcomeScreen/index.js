import React, { useState } from 'react'
import { WelcomeContent, HomeBtnWrapper, WelcomeContainer, Dodge, WelcomeMessage, NeonWrapper, Gradient, ArrowRight, ArrowForward } from './WelcomeElements'
import Button from '../ButtonElements'

const WelcomeScreen = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <WelcomeContainer id="home">
            {/* <WelcomeBg> */}
                {/* <Circles>

                </Circles> */}
                <WelcomeContent>
                    <NeonWrapper>
                        <WelcomeMessage>
                            Melissa
                        </WelcomeMessage>
                        <Gradient></Gradient>
                        <Dodge></Dodge>
                    </NeonWrapper>
                    <HomeBtnWrapper>
                        <Button to="about" onMouseEnter={onHover} onMouseLeave={onHover}>
                            Learn More {hover ? <ArrowForward />: <ArrowRight />}
                        </Button>
                    </HomeBtnWrapper>
                </WelcomeContent>
            {/* </WelcomeBg> */}

        </WelcomeContainer>

    )
}

export default WelcomeScreen