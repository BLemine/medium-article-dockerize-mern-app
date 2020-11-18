import './index.css';
import { Instance } from "../services";
import React from "react";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { store } from "../store";
import StarMark from "../components/StarMark";


function Home(props) {
    const [movies, setMovies] = React.useState([]);
    const [showProfileMenu, setShowProfileMenu] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const history = useHistory();
    
    React.useEffect(() => {
        Instance.get("/trending").then(res => {
            setMovies(res.data);
            setLoading(false)
        }).catch(ex => console.log(ex));
    }, [store])
    if (loading) return <div style={{ flex: 1, textAlign: "center", marginTop: "15%" }}><CircularProgress color="secondary" /></div>
    else {
        return (
            <div className="Home">
                <input type="text" placeholder="Search .." style={{ display: "inline-block", padding: 5, width: "70%", height: 30, borderRadius: 12, marginTop: 20 }} />
                <div style={{ display: "inline-block", }}>
                    <a href="/favoris"><FavoriteBorderIcon style={{ display: "inline-block", color: "white", width: 40, height: 40, position: "relative", top: 15, left: 20 }} /></a>
                    <div style={{ display: "inline-block", position: "absolute", top: 20, right: 40 }} onMouseEnter={() => setShowProfileMenu(true)} onMouseLeave={() => setShowProfileMenu(false)}>
                        <AccountCircleIcon style={{ color: "white", width: 40, height: 40, }} />
                        {showProfileMenu &&
                            <div>
                                <a href="#" style={{ width: 50, fontSize: 12, color: "white", top: 10, position: "relative" }} onClick={async () => {
                                    await props.disconnect();
                                    history.push("/login");
                                }}>{props.connection ? "Log out" : "Log-in"}</a>
                            </div>
                        }
                    </div>
                </div>
                <div style={{ marginTop: 20, width: "90%", marginLeft: "5%" }}>
                    {movies.map(movie => {
                        return (
                            <div key={movie.id} style={{ display: "inline-block", width: 250, height: 300, marginTop: 20, marginRight: 20, borderRadius: 12, boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 1), 0 6px 20px 0 rgba(0, 0, 0, 1)" }}>
                                <div style={{ display: "inline-block", width: 250, height: 300, }}>
                                    <img src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path} alt="Norway" style={{ width: "100%", height: "85%" }} onClick={() => history.push({ pathname: props.connection ? "/movie" : "/login", state: props.connection ? movie : { error: "Not Signed In" } })} />
                                    <span style={{ fontSize: 12 }}>{movie.title || movie.name || "untitled"}</span>
                                </div>
                                <div style={{ display: "inline-block", position: "relative" }}>
                                    <StarMark movie={movie} marked={false} add_bookmark={props.add_bookmark} remove_bookmark={props.remove_bookmark} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    connection: state.connection
})
const mapDispatchToProps = (dispatch) => {
    return {
        disconnect: () => dispatch({ type: "DISCONNECT" }),
        add_bookmark: (movie) => dispatch({ type: "ADD_BOOKMARK", movie: movie }),
        remove_bookmark: (movie_id) => dispatch({ type: "REMOVE_BOOKMARK", movie_id: movie_id })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
