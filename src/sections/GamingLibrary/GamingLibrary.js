import './GamingLibrary.css'
import {GamingLibraryCard, SectionHeader, SectionWrapper} from '../../components/index'
import GamingLibraryData from '../../Data/GamingLibraryData'

const GamingLibrary = () => {

    const cards = GamingLibraryData.map(card =>{
        return <GamingLibraryCard key={card.id} image={card.image} title={card.title} category={card.category} date_added={card.date_added} hours_played={card.hours_played} downloaded={card.downloaded}/>
       }) 

  return (
    <div>
       <SectionWrapper>
        <SectionHeader>Gaming Library</SectionHeader>
        <div className='gaming-library-cards'>

             {cards}   
            
        
        </div>     
        </SectionWrapper>
    </div>
  )
}

export default GamingLibrary
