import React from "react";
import StarIcon from '@material-ui/icons/Star';

const StarMark = (props) => {
    const [marked, setMarked] = React.useState(props.marked || false) // has to take the value 'props.marked'
    const [color, setColor] = React.useState(marked ? "yellow" : "white");
    return <StarIcon style={{
        cursor: "pointer",
        position: "absolute",
        bottom: 250, right: 10,
        color: color
    }} onClick={() => {
        setMarked(!marked);
        setColor(marked ? "yellow" : "white");
        if(marked){
            props.add_bookmark(props.movie)
        }else{
            props.remove_bookmark(props.movie.id)
        }
    }} />
}
export default StarMark;