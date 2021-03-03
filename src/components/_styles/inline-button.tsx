import styled from 'styled-components'


const  Container = styled.button`
     
     font-size: inherit;
     color: var(--primary);
     background-color: transparent; 
     cursor: pointer;
     display: inline-block;
     padding-bottom: 2px; 
     border: none; 
     border-bottom: 1px solid currentColor;
     transition: all .2s; 

     &:hover{ 
         color: var(--grey-dark-1);
     }

     &:focus {
         animation: pulsate 1s infinite;
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


export default function InlineButton(props: any) {
       return <Container>
           {props.children}
       </Container>
}