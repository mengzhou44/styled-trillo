import styled from 'styled-components'

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
   
       height: 7rem;
       background-color: #fff;
       border-bottom:  1px solid  var(--grey-light-1);
`

function  Header() {
    return <HeaderBox>Header</HeaderBox>
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

`

function  Navigation() {
    return <NavigationBox> Nav </NavigationBox>
}

const  HotelViewBox = styled.div`
     background-color: #fff;
`

function  HotelView() {
    return < HotelViewBox > Hotel View </HotelViewBox >
}