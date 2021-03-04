import { createGlobalStyle } from 'styled-components'

 
import { BreakPoint,  respond} from './media'


const GlobalStyle = createGlobalStyle`

   :root {
        --primary: #eb2f64;
        --primary-light: #FF3366;
        --primary-dark: #BA265D;

        --grey-light-1: #faf9f9;
        --grey-light-2: #f4f2f2;
        --grey-light-3: #f0eeee;
        --grey-light-4: #ccc;
        
        --grey-dark-1: #333;
        --grey-dark-2: #777;
        --grey-dark-3: #999;

        --shadow-dark: 0 2rem 6rem rgba(0,0,0,.3);
        --shadow-light: 0 2rem 5rem rgba(0,0,0,.06);

        --line: 1px solid var(--grey-light-2);
   }


  *,
  *::before,
  *::after
  {
      padding: 0px; 
      margin: 0px; 
      box-sizing: inherit;
  }

  *:focus {
      outline: none;
  }

  html {
        box-sizing:  border-box; 
        font-size: 62.5%;

        ${respond(BreakPoint.large, `
           font-size: 50%; 
       `)}
  }

  body {
     font-family: 'Lato', sans-serif;
     font-weight: 400; 
     line-height: 1.6; 
     color: var(--grey-dark-2);
     background-image: linear-gradient(to right bottom, var(--primary-light), var(--primary-dark));
     background-size: cover; 
     background-repeat: no-repeat;
     min-height: 100vh;
  }

  h1 {
        font-size: 2.25rem;
        font-weight: 300;
        text-transform: uppercase;
        letter-spacing: 1px;
        padding: 1.5rem 3rem;
  }

  h2 {
        font-size:  1.75rem;
        font-weight: 400;
        text-transform: uppercase;
  }

  @keyframes pulsate {
         0% {
             transform: scale(1);
             box-shadow: none; 
         }

         50% {
             transform: scale(1.05);
             box-shadow: 0 1rem 4rem rgba(0,0,0,.25);
         }

         100% {
             transform: scale(1);
             box-shadow: none; 
         }
     }

`

export default GlobalStyle