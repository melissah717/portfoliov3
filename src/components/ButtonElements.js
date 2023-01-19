import styled from 'styled-components';
import { Link } from 'react-scroll'


export const Button = styled(Link)`
    border-radius: 10px;
    background: ${({primary}) => (primary ? '#6b627f' : '#6b627f')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark? '#1c2626': '#ffffff')};
    font-size: ${({fontBig}) => (fontBig? '20px': '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    opacity: 50%;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#6b627f': '#6b627f')};
        opacity: 100%
    }

`

export default Button;