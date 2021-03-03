import styled from 'styled-components'
import InlineButton from '../_styles/inline-button'

const Container = styled.div`
     max-width: 120rem; 
     background-color: var(--grey-light-2);
     margin: 8rem auto; 
     box-shadow: var(--shadow-dark);
     min-height: 50rem; 
`


export default function Home() {
       return  <Container>
         <Header /> 
         <Content />
       </Container>
}

const HeaderBox = styled.header`
       font-size: 1.4rem; 
       height: 7rem;
       background-color: #fff;
       border-bottom:  1px solid  var(--grey-light-2);
       display: flex; 
       flex-direction: row; 
       justify-content: space-between;
       align-items: center; 

       .logo {   
           height: 3.25rem; 
           width: auto;
           margin-left: 2rem; 
       }

       .search {
          flex: 0 0 40%;
          display: flex; 
          justify-content: center; 
          align-items: center; 
          transition: all .5s;

          input {
             font-family: inherit; 
             font-size: inherit; 
             color: inherit; 
             border: none; 
       
             background-color: var(--grey-light-2);
             padding: .7rem 2rem; 
             border-radius:  100px; 
             width: 90%;
             margin-right: -3.25rem;
         
             &:focus{
                 outline: none; 
                 width: 100%;
                 background-color: var(--grey-light-3);
             }

             &::-webkit-input-placeholder {
                font-weight: 100; 
                color:  var(--grey-light-4);
             }
          }
          
          button{
             border: none; 
             background-color: var(--grey-light-2);
             &:focus{
                 outline: none;
              
             }
             &:active {
                 transform: translateY(2px);
             }
            
              padding-top: 2px; 
          }

          input:focus + button {
           background-color: var(--grey-light-3); 
          }

          svg {
             height: 2rem;
             width: 2rem; 
             margin-right: 1rem; 
             fill: var(--grey-dark-3);
          }
       }


       .user-nav {
           
            align-self: stretch; 
            display: flex; 
            justify-content: space-around; 
            align-items: center; 

            & > * {
                height: 100%; 
                padding: 0 2rem;       
                cursor: pointer;
                transition:  all .5s; 
                &:hover {
                   background-color: var(--grey-light-2);
                }
            }
           .icon-box{
                display: flex; 
                align-items: center; 
                position: relative; 
                svg {
                    height: 2.25rem; 
                    width: 2.25rem; 
                    fill: var(--grey-dark-2);
                }
                .notification {
                    font-size: .8rem;
                    width: 1.75rem;
                    height: 1.75rem; 
                  
                    border-radius: 50%;
                    background-color: var(--primary);
                    color: #fff;
                    position: absolute; 
                    top: 2rem;
                    right: 1.25rem; 

                    display: flex; 
                    justify-content:center; 
                    align-items:center;
                }
           }

           .user-box{
              display: flex; 
              align-items: center; 
              img {
                  height: 3.75rem;
                  border-radius: 50%;
                  margin-right: 1rem; 
              }
           }
       }
`

function  Header() {
    return <HeaderBox>
     <img src='./images/logo.png' className='logo' alt='trillo logo' />
     <form action='#' className='search'>
        <input type='text' placeholder='Search Hotels'></input>
        <button type='submit'>
            <svg className='search-icon'>
                <use xlinkHref='./images/sprite.svg#icon-magnifying-glass'></use>
            </svg>
        </button>
     </form>
     <nav className='user-nav'>
         <div className='icon-box'>
             <svg>
                <use xlinkHref='./images/sprite.svg#icon-bookmark'></use>
             </svg>
             <span className='notification'>7</span>
         </div>
         <div className='icon-box'>
             <svg>
                <use xlinkHref='./images/sprite.svg#icon-chat'></use>
             </svg>
             <span className='notification'>13</span>
         </div>
         <div className='user-box'>
              <img src = './images/user.jpg' alt='user photo' />
              <span className='user-name'>Jonas</span>
         </div>
     </nav>
    </HeaderBox>
}




const ContentBox = styled.div`
   display: flex;
   flex-direction: row; 
   justify-content: flex-start;
`

function  Content() {
     return <ContentBox>
          <Navigation />
          <HotelView /> 
     </ContentBox> 
} 


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

function  Navigation() {
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

const  HotelViewBox = styled.main`
    
    background-color: #fff;
    flex: 1;

    .gallery{
         display:  flex; 
        
         img {
             display: block; 
             width: 100%;
         }
    }

    .overview {
        display: flex;
        flex-direction: row; 
        align-items: center;

        .stars{ 
            margin-right: auto; 
            display: flex; 
        }
        svg {
            width: 1.75rem; 
            height: 1.75rem; 
            fill: var(--primary);
        }
        border-bottom:  1px solid  var(--grey-light-2);
    }

    .location {
        font-size: 1.2rem; 
        display: flex; 
        align-items: center; 

        svg {
            margin-right: .5rem; 
        }
    }
    .rating{
        background-color: var(--primary);
        color: #fff;
        margin-left: 3rem; 
        align-self: stretch; 
        padding: 0 2.25rem; 
        display: flex; 
        flex-direction: column;
        justify-content: center; 
        align-items: center; 

        .rating-average{
            font-size: 2.25rem; 
            font-weight: 300; 
            margin-bottom: -3px; 
        }

        .rating-count {
            font-size: .8rem; 
            text-transform: uppercase; 
        }
    }
`

function  HotelView() {
    return < HotelViewBox > 
        <div className='gallery'>
            <figure>
               <img src='./images/hotel-1.jpg' alt='hotel1' />
            </figure>
            <figure>
                <img src='./images/hotel-2.jpg' alt='hotel2' />  
            </figure>
            <figure>
               <img src='./images/hotel-3.jpg' alt='hotel3' />
            </figure>
        </div>
        <div className='overview'>
            <h1>Hotel Las Palams</h1>
            <div className='stars'>
                <svg>
                    <use xlinkHref='./images/sprite.svg#icon-star'></use>
                </svg>
                <svg>
                    <use xlinkHref='./images/sprite.svg#icon-star'></use>
                </svg>
                <svg>
                    <use xlinkHref='./images/sprite.svg#icon-star'></use>
                </svg>
                <svg>
                    <use xlinkHref='./images/sprite.svg#icon-star'></use>
                </svg>
                <svg>
                    <use xlinkHref='./images/sprite.svg#icon-star'></use>
                </svg>
            </div>
            <div className='location'>
                 <svg>
                     <use xlinkHref='./images/sprite.svg#icon-location-pin'></use>
                   </svg>
                   <InlineButton>Albufeira, Portugal</InlineButton>
            </div>
            <div className='rating'>
                 <div className='rating-average'>8.6</div>
                 <div className='rating-count'>429 votes</div>
            </div>
        </div>
        </HotelViewBox >
}