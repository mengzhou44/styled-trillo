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

    .details {
        display: flex; 
        padding: 4.5rem; 
        background-color: var(--grey-light-1);
        border-bottom: var(--line);
        font-size: 1.4rem; 
    }

    .description {
        padding: 3rem; 
        flex: 0 0 60%;
        margin-right: 4.5rem; 
        box-shadow: var(--shadow-light);

        .paragraph:not(:last-of-type) {
            margin-bottom: 2rem;
        }

        ul {
            list-style: none;
            margin: 3rem 0; 
            padding: 3rem; 
            border-top: var(--line);
            border-bottom: var(--line);
            display: flex; 
            flex-wrap: wrap; 
        }

        li {
            flex: 0 0 50%;
            margin-bottom:  .7rem;
        }

        li::before {
            content: '';
           
            display: inline-block; 
            margin-right: 1rem; 
            height: 1rem;
            width: 1rem; 
            background-color:  var(--primary);
            mask-image: url('./images/chevron-thin-right.svg');
            mask-size: cover; 
        }

        .recommend {
            font-size: 1.3rem; 
            color: var(--grey-dark-3);
            display: flex; 
            justify-content: space-between;
            align-items: center; 
            img {
                box-sizing: content-box; 
                height: 4rem;
                width:  4rem;
                border-radius: 50%;
                &:not(:last-child) {
                    margin-right: -1.15rem;
                }
                &:not(:first-child) {
                    border: 3px solid  #fff;
                }
            }
        }
    }

    .user-reviews {
       
        flex: 1;
        background-color: #fff;
        box-shadow:  var(--shadow-light);
        padding: 3rem; 
        margin-bottom: 3.5rem; 

        display: flex;
        flex-direction: column;
        align-items: center; 

        img {
            width: 4.5rem; 
            height: auto; 
            border-radius: 50%;
        }

        figure {
            margin-bottom: 2rem; 
            box-shadow: var(--shadow-light);
            border: 1px solid var(--grey-light-1);
            padding: 1rem; 
            position: relative; 
        
            &::before {
                content: '\\201C';
                position: absolute;
                top: -2.75rem;
                left: -1rem;
                line-height: 1;
                font-size: 20rem;
                color:  var(--grey-light-2);
                font-family: sans-serif;
                z-index: 1;
            }
        }

        .user-text {
             position: relative; 
             z-index: 10; 
         }
         
        figcaption {
            display: flex;
            margin: 3rem 0; 
            align-items: flex-end;

            .user-box {
                margin-right: auto; 
                margin-left: 1.5rem; 
                flex: 0 0 8rem;
            }
            .name {
                font-size: .9rem; 
                font-weight: 600; 
                text-transform: uppercase; 
            }
            .date {
                 font-size:  .9rem; 
                 color: var(--grey-dark-3);
            }
            .review-rating {
        
                font-size: 2.2rem; 
                font-weight: 300; 
                color:  var(--primary);
            }
        }
    }

    .call-to-action {
        display: block; 
        padding: 3rem; 
        display: flex; 
        flex-direction: column;
        align-items: center; 

        h2 {
            margin-bottom: 2rem; 
        }

        button {
           font-size: 1.6rem;
           text-transform: uppercase;
           color: var(--grey-light-1);
           background-image: linear-gradient(to right bottom, var(--primary-light), var(--primary-dark));
           border: none;
           border-radius: 100px; 
           cursor: pointer; 
           transition: all .2s; 
           box-shadow: var(--shadow-light);
           position: relative;
           overflow: hidden; 

           &:focus {
               animation: pulsate 1s infinite;
           }
           
        }


          
        .visible, .invisible{
            display: inline-block;
            height: 100%;
            width: 100%;
            transition: all .2s;
        }

        .visible {
            padding: 2rem 7.5rem;
        }

        .invisible {
            position: absolute;
            padding: 2rem 0;
            left: 0;
            top: -100%;
        }
         
        button:hover .invisible {
            top: 0;
        }
        button:hover .visible {
            transform: translateY(100%);
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
        <div className='details'>
            <div className='description'>
                           <p className='paragraph'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
                            </p>
                            <p className='paragraph'>
                                Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
                            </p>
                            <ul>
                                <li >Close to the beach</li>
                                <li >Breakfast included</li>
                                <li >Free airport shuttle</li>
                                <li >Free wifi in all rooms</li>
                                <li >Air conditioning and heating</li>
                                <li >Pets allowed</li>
                                <li >We speak all languages</li>
                                <li >Perfect for families</li>
                            </ul>
                            <div className='recommend'>
                                <p className='count'>
                                    Lucy and 3 other friends recommend this hotel.
                                </p>
                                <div className='friends'>
                                    <img src='./images/user-3.jpg' alt='Friend 1' />
                                    <img src='./images/user-4.jpg' alt='Friend 2' />
                                    <img src='./images/user-5.jpg' alt='Friend 3' />
                                    <img src='./images/user-6.jpg' alt='Friend 4' />
                                </div>
                            </div>
            </div>
            <div className='user-reviews'>
                            <figure>
                                <blockquote className='user-text' >
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
                                </blockquote>
                                <figcaption>
                                    <img src='./images/user-1.jpg' alt='User 1' />
                                    <div className='user-box'>
                                        <p className='name'>Nick Smith</p>
                                        <p className='date'>Feb 23rd, 2017</p>
                                    </div>
                                    <div className='review-rating'>7.8</div>
                                </figcaption>
                            </figure>

                            <figure >
                                <blockquote>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.
                                </blockquote>
                                <figcaption >
                                    <img src='./images/user-2.jpg' alt='User 1' />
                                    <div className='user-box'>
                                        <p className='name'>Mary Thomas</p>
                                        <p className='date'>Sept 13th, 2017</p>
                                    </div>
                                    <div className='review-rating'>9.3</div>
                                 </figcaption>
                            </figure>

                            <InlineButton>Show all <span>&rarr;</span></InlineButton>
                
            </div> 
        </div>
        <div className='call-to-action'>
                 <h2>
                                Good news! We have 4 free rooms for your selected dates!
                 </h2>
                 <button>
                       <span className='visible'>Book now</span>
                       <span className='invisible'>Only 4 rooms left</span>
                 </button>
          </div>

        </HotelViewBox >
}