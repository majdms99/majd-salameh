import styled from "styled-components";

export const MenuStyle = styled.nav`
    position: fixed;
    width: 360px;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0.8;
    border-radius: 30px;
   background-color: ${({ bg }) => bg};
    padding: 20px;
`

export const IconsLink = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
`

export const IconItem = styled.li`
    /* padding: 0 15px; */

    &>a{
    width: 30px;
    
    padding: 6px;
    border-radius: 50%;
    text-align: center;
    line-height: 0.5;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    }
    &>a:hover{
        background: #929dd9;
    }
`