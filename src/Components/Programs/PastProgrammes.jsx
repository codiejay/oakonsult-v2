import ProgrammeCard from './ProgrammeCard';
import React from 'react';

const PastProgrammes = ({data}) => {
  const [showNoEventAlert, setShowNoEventAlert] = React.useState(true);
  let currentDate = new Date(); 
  let dateString = [currentDate.getFullYear(), currentDate.getMonth()+1, currentDate.getDate()];
  return (
    <div id='pastProgrammes' style={{ display: 'flex' }}>
      { 
        data.map((event, index) => {
          let eventStringDate = event.date.split('-') 
          eventStringDate[1] = parseInt(eventStringDate[1]);
          eventStringDate = eventStringDate.join('');
          if(parseInt(dateString.join('')) > eventStringDate) { 
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

export default PastProgrammes;
