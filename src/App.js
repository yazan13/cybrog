import './App.css'
import {Container} from './components/index'

import {Header, Hero, MostPopular, GamingLibrary, Footer} from './sections/index'

const App = () =>{
   return(
   <div>
   
            <Header />
            <Container>
               <Hero/>
               <MostPopular/>
               <GamingLibrary/>
            </Container>
           <Footer /> 
            
   </div>
   )
    
}

export default App