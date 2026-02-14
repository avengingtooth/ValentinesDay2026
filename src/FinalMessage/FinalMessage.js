import { Hearts } from "../Components/Hearts";
import { Pictures } from "../Components/Pictures";

export function FinalMessage(){
    return(
        <div id="layout">
            <Hearts></Hearts>
            <Pictures indexes={[6,7]}></Pictures>
            <div style={{
                height: "80%",
                width: "50%", 
                display: "flex", 
                flexDirection:"column" ,
                justifyContent: "center", 
                alignItems:"center"
            }}>
                <h1>Happy Valentine's Day Baby</h1>
                <p>
                    Congratulations you made it through answering dumbass questions which have no relevance to anything lol.
                    I love you so fucking much my love I wish I could be with you today so we could spend all day together lying in 
                    bed watching stupid shows getting starbucks and going out for dinner. I honestly don't care what we would do 
                    I would be overjoyed just being able to be with you. Since I can't be with you and get you flowers to finally
                    get rid of you I figured I might as well use the little skills I have and make you something that I can actually
                    give you today. The past 8 months with you have been the best months of my life, you make every day with you 
                    so incredible the bad days become good and the good days are now incredible. I can't wait to spend the rest of my 
                    life loving and annoying you in every way imaginable. Thank you for everything baby thank you for helping me 
                    start to see my worth and to show me that the future is so incredibly bright since I'll get to spend it with you. 
                    I miss you so much you I can't even begin to explain but I'm so lucky to 
                    have you, someone I love so much that I get to miss you this much and inpatiently wait for every time I get to 
                    see you again. 
                    <br/>
                    You're the love of my life baby &#60;3
                    <br/>
                    <br/>
                    Love,
                    <br/>
                    Your wife (Emma)
                </p>
            </div>
        </div>
    )
}