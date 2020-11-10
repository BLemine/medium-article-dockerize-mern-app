import './index.css';
import { Instance } from "../services";
import React from "react";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CircularProgress from '@material-ui/core/CircularProgress';

function App() {
    const [movies, setMovies] = React.useState([]);
    const [showProfileMenu, setShowProfileMenu] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        Instance.get("/trending").then(res => {
            setMovies(res.data.results);
            setLoading(false)
        }).catch(ex => console.log(ex));
    },[])
    if (loading) return <div style={{flex:1,textAlign:"center",marginTop: "15%"}}><CircularProgress color="secondary" /></div>
    else {
        return (
            <div className="App">
                <div className="App-header">
                    <input type="text" placeholder="Search .." style={{ display: "inline-block", padding: 5, width: "70%", height: 30, borderRadius: 12, marginTop: 20 }} />
                    <div style={{ display: "inline-block", marginLeft: 70 }}>
                        <FavoriteBorderIcon style={{ display: "inline-block", color: "white", width: 40, height: 40, position: "relative", top: 20, right: 40 }} />
                        <div style={{ display: "inline-block", position: "relative", top: 20, right: 20 }} onMouseEnter={() => setShowProfileMenu(true)} onMouseLeave={() => setShowProfileMenu(false)}>
                            <AccountCircleIcon style={{ color: "white", width: 40, height: 40 }} />
                            {showProfileMenu &&
                                <div>
                                    <a href="#" style={{ fontSize: 12, color: "white" }}>Log out</a>
                                </div>
                            }
                        </div>
                    </div>
                    <div style={{ marginTop: 20, width: "90%", marginLeft: "5%" }}>
                        {movies.map(movie => {
                            return (
                                <div key={movie.id} style={{ display: "inline-block", width: 250, height: 300, marginTop: 20, marginRight: 20, borderRadius: 12, boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 1), 0 6px 20px 0 rgba(0, 0, 0, 1)" }}>
                                    <img src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path} alt="Norway" style={{ width: "100%", height: "85%" }} />
                                    <span style={{ fontSize: 12 }}>{movie.title || movie.name || "untitled"}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }

}

export default App;
