
import styled, {keyframes} from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'

export const WelcomeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;
    background-color: #000000;

    :before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
`

export const WelcomeBg = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    overflow: hidden;
    height: 100%;
    width: 100%
    z-index: 1
`

export const Circles = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1
`

export const WelcomeMessage = styled.span`
    color: #ffffff;
    background: #000000;
    font-size: 80px;
    font-weight: bold;
    font-family: 'Raleway', sans-serif;
    text-transform: lowercase;
    
    &:before{
        content: 'Melissa';
        position: absolute;
        mix-blend-mode: difference;
        filter:blur(2px);
    }

`

export const NeonWrapper = styled.div`
    display: inline-flex;
    flex-direction: row-reverse;
    filter: brightness(200%);
    overflow: hidden;
`

export const WelcomeContent = styled.div`
    

`


export const Gradient = styled.span`
    background: linear-gradient(113.58893008880955deg, #3d8bacff 4.927083333333334%,rgba(208, 218, 224,1) 97.84374999999999%);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    mix-blend-mode: multiply;
`
export const shine = keyframes`
    to{
        transform: translate(20%, 20%);
    }
`

export const Dodge = styled.span`
    background: radial-gradient(circle, white, black 25%) center / 25% 25%;
    position: absolute;
    top: -100%;
    left: -100%;
    right: 0;
    bottom: 0;
    mix-blend-mode: color-dodge;
    animation: ${shine} 9s linear infinite;
`
export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`
export const HomeBtnWrapper = styled.div`
    margin-top: 32px;
    display: block;
    flex-direction: column;
    align-items: center;
`