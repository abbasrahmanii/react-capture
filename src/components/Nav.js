import React from "react";
//Style
import styled from "styled-components";

const Nav = () => {
    return (
        <StyledNav>
            <h1><a id="logo" href="#">Capture</a></h1>
            <ul>
                <li><a href="#">1. Abbout Us</a></li>
                <li><a href="#">2. Our Work</a></li>
                <li><a href="#">3. Contact Us</a></li>
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    padding: 1rem 10rem;
    background: #282828;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    a {
        color: white;
        text-decoration: none;
    }
    ul {
        list-style: none;
        display: flex;
        li {
            padding-left: 7rem;
            position: relative;
        }
    }
    #logo {
        font-size: 1.5rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
    }
`;

export default Nav;