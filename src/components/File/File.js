import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './File.css'
import { EyeIcon ,EyeSlashIcon} from '@heroicons/react/24/solid';

const File = ({file}) => {
   const {correctAnswer,id, options, question}= file;
   console.log(file)
//    console.log(correctAnswer)
    

   const correctAnswerHandle =()=>{
    alert(correctAnswer)
   }
   const handleRightAnswer =(selectedOption)=>{
   
        if(selectedOption === correctAnswer ){
            alert('right answer')
        }else{
            alert('wrong answer')
        }
   };

    return (
        <div className='file'>
            <h2>{question}</h2>
            
           {
            options.map(option=><p><Button id="btn" onClick={()=>handleRightAnswer(option)}>{option}</Button></p>)
           }
           
           <Button className='icon'>
           <EyeSlashIcon onClick={()=>correctAnswerHandle(correctAnswer)} style={{fontSize: '20px'}} className=" h-6 w-6 text-blue-500"/>
           </Button>
           
        </div>
    );
};

export default File;