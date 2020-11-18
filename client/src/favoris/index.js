import React from "react";
import "./index.css";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { store } from "../store";
import StarMark from "../components/StarMark";

function Favoris(props) {
    const [showProfileMenu, setShowProfileMenu] = React.useState(false);
    const history = useHistory();

    React.useEffect(() => {
        if (!props.connection) {
            history.push({ pathname: "/login", state: { error: "Not signed in" } })
        }
    }, [store])
    return (
        <div className="Favoris">
            <div style={{ display: "inline-block" }}>
                <HomeIcon style={{ color: "white", width: 40, height: 40, position: "relative", top: 15, right: 20, cursor: "pointer" }} onClick={() => history.push("/")} />
            </div>
            <input type="text" placeholder="Search .." style={{ display: "inline-block", padding: 5, width: "70%", height: 30, borderRadius: 12, marginTop: 20 }} />
            <div style={{ display: "inline-block", }}>
                <a href="/favoris"><FavoriteBorderIcon style={{ display: "inline-block", color: "white", width: 40, height: 40, position: "relative", top: 15, left: 20 }} /></a>
                <div style={{ display: "inline-block", position: "absolute", top: 20, right: 20 }} onMouseEnter={() => setShowProfileMenu(true)} onMouseLeave={() => setShowProfileMenu(false)}>
                    <AccountCircleIcon style={{ color: "white", width: 40, height: 40,  }} />
                    {showProfileMenu &&
                        <div>
                            <a href="/login" style={{ width:50, fontSize: 12, color: "white",top:10, position: "relative"}} onClick={() => props.disconnect()}>Log out</a>
                        </div>
                    }
                </div>
            </div>
            <div>
                {props.user.bookMarks.length === 0 &&
                    "Empty List !"
                }
                {props.user.bookMarks.map(movie => {
                    return <div key={movie.id} style={{ display: "inline-block", width: 250, height: 300, marginTop: 20, marginRight: 20, borderRadius: 12, boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 1), 0 6px 20px 0 rgba(0, 0, 0, 1)" }}>
                        <div style={{ display: "inline-block", width: 250, height: 300, }}>
                            <img src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path} alt="Norway" style={{ width: "100%", height: "85%" }} onClick={() => history.push({ pathname: props.connection ? "/movie" : "/login", state: props.connection ? movie : { error: "Not Signed In" } })} />
                            <span style={{ fontSize: 12 }}>{movie.title || movie.name || "untitled"}</span>
                        </div>
                        <div style={{ display: "inline-block", position: "relative" }}>
                            <StarMark marked={true} movie={movie} add_bookmark={props.add_bookmark} remove_bookmark={props.remove_bookmark} />
                        </div>
                    </div>
                })}
            </div>
        </div>)
}

const mapStateToProps = (state) => ({
    connection: state.connection,
    user: state.user
});
const mapDispatchToProps = (dispatch) => ({
    remove_bookmark: (movie_id) => dispatch({ type: "REMOVE_BOOKMARK", movie_id: movie_id }),
    add_bookmark: (movie) => dispatch({ type: "ADD_BOOKMARK", movie: movie }),
    disconnect: () => dispatch({ type: "DISCONNECT" }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Favoris)