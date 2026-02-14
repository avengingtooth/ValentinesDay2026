import { Link } from "react-router-dom"

export function Question(props){
    const data = props.data
    return(
        <div id="question">
            <div id="question_header">
                <h2 style={{textDecoration: "underline"}}>Question {props.questionNb + 1}:</h2>
            </div>
            <h2 style={{textAlign: "center"}}>{data.question}</h2>
            <div id="question_grid" style={{gap:"4% 2%"}}>
                {
                    data.options.map((option, index) => {
                        return(
                            <Link to={`/quiz/${index}/${props.questionNb}`}>
                                <button id={index} className="quiz_buttons" onClick={() => {}}>{option}</button>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}