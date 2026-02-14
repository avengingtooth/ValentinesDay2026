import { Link, useParams } from "react-router-dom";
import "./QuizAnswer.css"
import { useEffect, useState } from "react";
import { Hearts } from "../Components/Hearts";
import { Pictures } from "../Components/Pictures";
import { Incorrect } from "../Components/Incorrect";
import {Correct} from "../Components/Correct"

export function QuizAnswer(){
    let {id, questionNb} = useParams()
    questionNb = Number(questionNb)
    id = Number(id)

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/text.json')
        .then(response => response.json())
        .then(data => setData(data.questions[questionNb]))
        .catch(error => console.error('Error fetching data:', error));
    }, [questionNb]);

    if(!data){
        return(
            <div>Well something isn't working lol...</div>
        )
    }

    const correct = data.corect_answer === id

    return(
        <div id="layout">
            <Hearts></Hearts>
            <Pictures indexes={correct ? [4,5] : [2,3]}></Pictures>
            {
                correct
                ?
                    <Correct questionData={data} questionNb={questionNb}></Correct>
                :
                    <Incorrect questionData={data} questionNb={questionNb}/>
            }
            <Link to={`/quiz/${questionNb + 1}`}>
                <button id="next_button" className="boogaloo">
                    Next
                </button>
            </Link>
        </div>
    )
}