import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Topic from '../Topic/Topic';
import Topics from '../Topics/Topics';
import Part from '../Part/Part'


const Home = () => {
  const parts = useLoaderData();
  console.log(parts)
    return (
        <div>
            
            <Header></Header>
            {/* <Topics></Topics> */}
           <div className='topic-container'>
           {
                parts.data.map(part => <Part
                    key={parts.id}
                    part={part}
                ></Part>)
            }
      
           </div>
         
           
        </div>
    );
};

export default Home;