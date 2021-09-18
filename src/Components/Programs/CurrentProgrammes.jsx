import ProgrammeCard from './ProgrammeCard';
import React from 'react';


const CurrentProgrammes = ({data}) => {
  console.log(data);
  let currentDate = new Date(); 
  let dateString = [currentDate.getFullYear(), currentDate.getMonth()+1, currentDate.getDate()];
  const [showNoEventAlert, setShowNoEventAlert] = React.useState(true);
  return (
    <div id='currentProgrammes' style={{ display: 'flex' }}>
      { 
        data.map((event, index) => {
          let eventStringDate = event.date.split('-') 
          eventStringDate[1] = parseInt(eventStringDate[1]);
          eventStringDate = eventStringDate.join('');
          console.log(event);
          if(parseInt(dateString.join('')) < eventStringDate) { 
            return ( 
              <ProgrammeCard
                index={index}
                data={{
                  date: event.date, 
                  title: event.name,
                  content:
                    event.description,
                }}
              />
            )
          }
        })
      }
        <h2 style={{marginTop: '2rem', fontSize: '2.3rem', display: showNoEventAlert ? 'none' : 'block'}}>No upcoming events, please check back</h2> 
    </div>
  );
};

export default CurrentProgrammes;
