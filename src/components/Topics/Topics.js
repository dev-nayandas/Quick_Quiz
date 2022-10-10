import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useLoaderData();
    console.log(topics)
    return (
        <div>
            <h2>This is Topics page</h2>
            <h3>Total data {topics.data.length}</h3>

            {
                topics.data.map(topic  => <Topic
                    key={topics.data.id}
                    topic ={topic}
                ></Topic>)
            }
        </div>
    );
};

export default Topics;