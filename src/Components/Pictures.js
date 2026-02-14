import LeoPool from "../Images/LeoPool.png"
import LeoNYC from "../Images/LeoNYC.webp"
import Judging from "../Images/Judging.jpg"
import MiddleFinger from "../Images/MiddleFinger.jpg"
import Correct from '../Images/Correct.jpg'
import Bonnet from "../Images/Bonnet.jpg"
import Metro from "../Images/Metro.jpg"
import PinkyPromise from "../Images/PinkyPromise.jpg"
import RawNoodles from "../Images/RawNoodles.jpg"
import Oscars from "../Images/Oscars.jpg"
import PinkHair from "../Images/PinkHair.jpg"
import PurpleHair from "../Images/PurpleHair.jpg"
import FaceMasks from  "../Images/FaceMasks.jpg"
import DrunkEmma from  "../Images/DrunkEmma.jpg"
import BabyCorona from  "../Images/BabyCorona.jpg"
import ReadingMamie from "../Images/ReadingMamie.jpg"
import ReadingLetter from "../Images/ReadingLetter.jpg"
import FifaApril from "../Images/FifaApril.jpg"
import LightNYC from "../Images/LightNYC.jpg"
import CoquetteLeo from "../Images/CoquetteLeo.jpg"
import Fishing from "../Images/Fishing.jpg"
import BrokenToe from "../Images/BrokenToe.jpg"
import BeachKaraoke from "../Images/BeachKaraoke.jpg"
import Kissing from "../Images/Kissing.jpg"
import Graduation from "../Images/Graduation.jpg"
import InHisArms from "../Images/InHisArms.jpg"
import SandDick from "../Images/SandDick.jpg"

export function Pictures(props){
    return(
        <div>
        {
            props.indexes.map((index) => {
                const data = images[index]
                return(
                    <img src={data.src} className="photos" key={index} alt=""
                        style={{
                            top: `${data.top}px`,
                            left: `${data.left}px`,
                            right: `${data.right}px`,
                            boxShadow: `${data.shadow}`
                        }}>
                    </img>
                )
            })
        }
        </div>
    )
}

const shadowLeft = "rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px"
const shadowRight =  "rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px"

const images = [
    {
        "src": LeoPool,
        "top": "370",
        "left": "50",
        "shadow": shadowLeft    
    },
    {
        "src": LeoNYC,
        "top": "370",
        "right": "50",
        "shadow": shadowRight
    },
    {
        "src": Judging,
        "top": "370",
        "left": "50",
        "shadow": shadowLeft
    },
    {
        "src": MiddleFinger,
        "top": "370",
        "right": "50",
        "shadow": shadowRight
    },
    {
        "src": Correct,
        "top": "370",
        "left": "50",
        "shadow": shadowLeft
    },
    {
        "src": Correct,
        "top": "370",
        "right": "50",
        "shadow": shadowRight
    },
    {
        "src": Bonnet,
        "top": "370",
        "left": "50",
        "shadow": shadowLeft
    },
    {
        "src": Metro,
        "top": "370",
        "right": "50",
        "shadow": shadowRight
    },
    {
        "src": PinkyPromise,
        "top": "370",
        "left": "50",
        "shadow": shadowLeft
    },
    {
        "src": RawNoodles,
        "top": "370",
        "right": "50",
        "shadow": shadowRight
    },
    {
        "src": Oscars,
        "top": "370",
        "left": "50",
        "shadow": shadowLeft
    },
    {
        "src": Graduation,
        "top": "370",
        "right": "50",
        "shadow": shadowRight
    },
    {
        "src": PinkHair,
        "top": "370",
        "left": "50",
        "shadow": shadowLeft
    },
    {
        "src": PurpleHair,
        "top": "370",
        "right": "50",
        "shadow": shadowRight
    },
    {
        "src": Fishing,
        "top": "370",
        "left": "50",
        "shadow": shadowLeft
    },
    {
        "src": FaceMasks,
        "top": "370",
        "right": "50",
        "shadow": shadowRight
    },
    {
        "src": BabyCorona,
        "top": "370",
        "left": "50",
        "shadow": shadowLeft
    },
    {
        "src": DrunkEmma,
        "top": "370",
        "right": "50",
        "shadow": shadowRight
    },
    {
        "src": ReadingMamie,
        "top": "370",
        "left": "50",
        "shadow": shadowLeft
    },
    {
        "src": ReadingLetter,
        "top": "370",
        "right": "50",
        "shadow": shadowRight
    },
    {
        "src": FifaApril,
        "top": "370",
        "left": "50",
        "shadow": shadowLeft
    },
    {
        "src": LightNYC,
        "top": "370",
        "right": "50",
        "shadow": shadowRight
    },
    {
        "src": CoquetteLeo,
        "top": "370",
        "left": "50",
        "shadow": shadowLeft
    },
    {
        "src": BrokenToe,
        "top": "370",
        "right": "50",
        "shadow": shadowRight
    },
    {
        "src": BeachKaraoke,
        "top": "370",
        "left": "50",
        "shadow": shadowLeft
    },
    {
        "src": SandDick,
        "top": "370",
        "right": "50",
        "shadow": shadowRight
    },
    {
        "src": Kissing,
        "top": "370",
        "left": "50",
        "shadow": shadowLeft
    },
    {
        "src": InHisArms,
        "top": "370",
        "right": "50",
        "shadow": shadowRight
    }
]