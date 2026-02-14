export function Incorrect(props){
    const data = props.questionData
    const questionNb = props.questionNb + 1
    return (
        <div className="answer_card">
            <div id="question_header">
                <h2 style={{textDecoration: "underline"}}>Question {questionNb}:</h2>
            </div>
            <h2 className="boogaloo">INCORRECTTT!!!</h2>
            <p>{data.incorrect}</p>
        </div>
    )
}