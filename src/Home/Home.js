import { Link } from "react-router-dom";
import "./Home.css"
import { useState, useEffect } from "react";
import { Hearts } from "../Components/Hearts";
import { Pictures } from "../Components/Pictures";

export function Home (){
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/text.json')
        .then(response => response.json())
        .then(data => setData(data.home))
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    if(!data){
        return(
            <div>Well something isn't working lol...</div>
        )
    }

    return (
        <div id="layout">
            <Hearts></Hearts>
            <Pictures indexes={[0, 1]}></Pictures>
            <div style={{
                height: "80%",
                width: "50%", 
                display: "flex", 
                flexDirection:"column" ,
                justifyContent: "center", 
                alignItems:"center"
            }}>
                <h1>{data.main_header}</h1>
                <p>{data.home_main_text}</p>
                <Link to="/quiz/0">
                    <button className="start_button boogaloo">
                        Start
                    </button>
                </Link>
            </div>
         </div>
    )
}