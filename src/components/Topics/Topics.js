import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Topic from '../Topic/Topic';
import './Topics.css'

const Topics = () => {
    const topics = useLoaderData();
    console.log(topics)
    return (
        
        <div>
            {/* <Header></Header> */}
            <div className='topic-container'>
            {/* <h2>This is Topics page</h2>
            <h3>Total data {topics.data.length}</h3> */}

            {
                topics.data.map(topic  => <Topic
                    key={topics.id}
                    topic ={topic}
                ></Topic>)
            }
            
            
        </div>
        </div>
    );
};

export default Topics;