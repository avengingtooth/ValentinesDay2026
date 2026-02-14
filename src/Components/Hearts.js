import FavoriteIcon from '@mui/icons-material/Favorite';

export function Hearts(){
    return(
        <div>
        {
            heartPositions.map(((position, index) =>{
                return(
                    <span key={index}>
                        <FavoriteIcon className='hearts' key={`left${index}`}
                            sx={{
                                top: `${position.top}px`,
                                left: `${position.left}px`,
                                fontSize: `${position.size}rem`,
                                color:`${position.color}`,
                                transform: `rotate(${position.angle}deg)`,
                            }}>
                        </FavoriteIcon>
                        <FavoriteIcon className='hearts' key={`right${index}`}
                            sx={{
                                top: `${position.top}px`,
                                right: `${position.left}px`,
                                fontSize: `${position.size}rem`,
                                color:`${position.color}`,
                                transform: `rotate(${-position.angle}deg)`,
                            }}>
                        </FavoriteIcon>
                    </span>
                )
            }))
        }
        </div>
    )
}

export const heartPositions = [
    {
        "top": "-40",
        "left": "-30",
        "angle": 135,
        "color": "#9c1027",
        "size": "5"
    },
    {
        "top": "50",
        "left": "30",
        "angle": -10,
        "color": "#9c1027",
        "size": "3"
    },
    {
        "top": "30",
        "left": "150",
        "angle": 5,
        "color": "#9c1027",
        "size": "7"
    },
    {
        "top": "-50",
        "left": "110",
        "angle": 5,
        "color": "#9c1027",
        "size": "6"
    },
    {
        "top": "-30",
        "left": "300",
        "angle": -115,
        "color": "#9c1027",
        "size": "7"
    },
    {
        "top": "-45",
        "left": "460",
        "angle": -20,
        "color": "#9c1027",
        "size": "5"
    },
    {
        "top": "-20",
        "left": "660",
        "angle": -130,
        "color": "#9c1027",
        "size": "5"
    },
    {
        "top": "10",
        "left": "540",
        "angle": 15,
        "color": "#9c1027",
        "size": "4"
    },
    {
        "top": "200",
        "left": "90",
        "angle": -130,
        "color": "#9c1027",
        "size": "2"
    },
    {
        "top": "240",
        "left": "20",
        "angle": -15,
        "color": "#9c1027",
        "size": "4"
    },
    {
        "top": "130",
        "left": "100",
        "angle": 10,
        "color": "#9c1027",
        "size": "5"
    },
    {
        "top": "120",
        "left": "-20",
        "angle": 10,
        "color": "#9c1027",
        "size": "7"
    }
]