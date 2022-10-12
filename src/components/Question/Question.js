import React from 'react';
import { useLoaderData } from 'react-router-dom';
import File from '../File/File';

const Question = () => {
    const quiz = useLoaderData();
    const file = quiz.data.questions[0].question;
    console.log(quiz)
    return (
        <div>
            {/* <h2>{quiz.data.questions.length}</h2> */}

            {
              quiz.data.questions.map(file=> <File
              key={quiz.data.questions.id}
              file={file}
              ></File>)  
            }
        </div>
    );
};

export default Question;