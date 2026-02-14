import { useState, useEffect } from "react";
import { Question } from "../Components/Question";
import { Hearts } from "../Components/Hearts";
import { Pictures } from "../Components/Pictures";
import { useParams } from "react-router-dom";
import "./Quiz.css"

export function Quiz(){
    const [data, setData] = useState(null);
    let {questionNb} = useParams()
    questionNb = Number(questionNb)

    useEffect(() => {
        fetch('/text.json')
        .then(response => response.json())
        .then(data => setData(data.questions))
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    if(!data){
        return(
            <div>Loading...</div>
        )
    }

    const pictureIndexes = data[questionNb]? data[questionNb].pictures : [0,0]

    return(
        <div id="layout">
            <Hearts></Hearts>
            <Pictures indexes={pictureIndexes}></Pictures>
            <Question data={data[questionNb]} questionNb={questionNb}></Question>
        </div>
    )
}