import styled from 'styled-components'


const NavigationBox = styled.nav`
    background-color: var(--grey-dark-1);
    flex: 0 0 18%;
    padding-top: 3rem; 
    display: flex; 
    flex-direction: column;
    justify-content: space-between; 

    ul {
        font-size: 1.4rem; 
        list-style: none; 
    }

    li {
        &:not(:last-child) {
            margin-bottom: .5rem; 
        }
        position: relative;
    }

    li::before{
        content: '';
        position: absolute; 
        top: 0;
        left: 0;
        height: 100%;
        width: 3px;
        background-color: var(--primary);
        transform: scaleY(0);
        transition: transform .2s, width .4s cubic-bezier(1,0,0,1) .2s, background-color .1s;
    }

    li:hover::before,
    .active::before {
        width: 100%;
        transform: scaleY(1);
    }

    li:active::before {
        background-color: var(--primary-light);
    }

    a:link, a:visited {
        color: var(--grey-light-1);
        text-decoration: none;
        text-transform: uppercase;
        display: block;
        padding: 1.5rem 3rem;
        position: relative;
        z-index: 10;
        display: flex;
        align-items: center;
    }

    svg {
        height: 1.75rem; 
        width: 1.75rem; 
        margin-right: 2rem; 
        fill: currentColor;
    }

    .legal{
        font-size: 1.2rem;
        color: var(--grey-light-4);
        text-align:center; 
        padding: 2.5rem; 
    }
`

export default function  Navigation() {
return <NavigationBox> 
       <ul>
           <li className='active'>
               <a href='#'>
                <svg>
                  <use xlinkHref='./images/sprite.svg#icon-home'></use>
                </svg>
                <span>Hotel</span>
               </a>
           </li>
           <li>
               <a href='#'>
                <svg>
                  <use xlinkHref='./images/sprite.svg#icon-aircraft-take-off'></use>
                </svg>
                <span>Flight</span>
               </a>
           </li>
           <li>
               <a href='#'>
                <svg>
                  <use xlinkHref='./images/sprite.svg#icon-key'></use>
                </svg>
                <span>Car rental</span>
               </a>
           </li>
           <li>
               <a href='#'>
                <svg>
                  <use xlinkHref='./images/sprite.svg#icon-map'></use>
                </svg>
                <span>Tours</span>
               </a>
           </li>
       </ul>
       <div className='legal'>
           &copy; 2021 Copyright by Trillo. All Rights Reserved.
       </div>
     </NavigationBox>
}
