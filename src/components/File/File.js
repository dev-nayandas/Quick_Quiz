import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './File.css'
import { BeakerIcon, EyeIcon } from '@heroicons/react/24/solid';

const File = ({file}) => {
   const {correctAnswer,id, options, question}= file;
//    console.log(correctAnswer)
    

   const correctAnswerHandle =()=>{
    alert({correctAnswer})
   }
   const handleRightAnswer =()=>{
   
        if(Button.value === correctAnswer ){
            alert('right answer')
        }
   };

    return (
        <div className='file'>
            <h2>{question}</h2>
            
           {
            options.map(option=><p><Button id="btn" onClick={handleRightAnswer}>{option}</Button></p>)
           }
           
           <div >
           <EyeIcon onClick={correctAnswerHandle} style={{fontSize: '20px'}} className=" h-6 w-6 text-blue-500"/>
           </div>
           
        </div>
    );
};

export default File;