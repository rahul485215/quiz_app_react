import { useState,useEffect,useRef } from 'react'
import './Quiz.css'
import Header from './Header'
import Question from './Question'
import NextButton from './NextButton'
import QuestionsLength from './QuestionsLength'
import Timer from './Timer'
import Score from './Score'
import Restart from './Restart'
import { data } from '../../assets/data'


const Quiz = () => {
    const [index,setIndex] = useState(0)
    const [question, setQuestion] = useState(data[index])
    const [lock, setLock] = useState(false)
    const [score, setScore] = useState(0);
    const [result, setResult] = useState(false)
    const [timer,setTimer] = useState(10)
    
    let Option1 = useRef(null)
    let Option2 = useRef(null)
    let Option3 = useRef(null)
    let Option4 = useRef(null)

    let option_array = [Option1,Option2,Option3,Option4]

    useEffect(() => {
        let interval;
        if (timer > 0 && result===false) {
            interval = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
            }, 1000);
            
        } else {
            clearInterval(interval);
            setResult(true)
        }
        return () => clearInterval(interval);
    }, [timer,result]);

    const checkAnswer = (e,ans) =>{
        if(lock===false){
            if(question.ans===ans){
                e.target.classList.add("correct")
                setLock(true)
                setScore(prev=>prev+1)
            }
            else{
                e.target.classList.add("wrong")
                setLock(true)
                option_array[question.ans-1].current.classList.add("correct")
            }
        }
    }

    const next = () => {
        if (lock === true) {
            if(index === data.length-1){
               setResult(true);
               return 0;
            }
            setIndex(prevIndex => {
                const newIndex = prevIndex + 1;
                if (newIndex < data.length) {
                    setQuestion(data[newIndex]);
                    setTimer(10)
                    setLock(false);
                    option_array.forEach(option => {
                        option.current.classList.remove("wrong");
                        option.current.classList.remove("correct");
                    });
                    return newIndex;
                }
                return prevIndex;
            });
        }
    };

    const restart = () =>{
        setIndex(0);
        setQuestion(data[0])
        setScore(0)
        setLock(false)
        setResult(false)
        setTimer(10)
        }
   

    return (
    <div className="container">

            <Header title="Quiz app" />
                {result ? <></>:<> 
                    <Question
                        index={index}
                        question={question}
                        Option1={Option1}
                        Option2={Option2}
                        Option3={Option3}
                        Option4={Option4}
                        checkAnswer={checkAnswer}
                    />

                    <NextButton
                        next={next}
                    />
                    
                    <QuestionsLength
                        index={index}
                        data={data}
                    />

                    <Timer 
                        timer={timer}
                    />
                </>}

                {result?<>
                    <Score 
                        score={score}
                        data={data}
                    />
                    <Restart
                    restart={restart}
                    />
            </>:<></>}
    </div>
  )
}

export default Quiz