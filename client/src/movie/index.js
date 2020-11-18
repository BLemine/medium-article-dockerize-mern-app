import React from "react";
import ReactPlayer from 'react-player/youtube'
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Login from "../login";
import { store } from "../store";
import { Instance } from "../services";
import CircularProgress from '@material-ui/core/CircularProgress';

const Movie = (props) => {
    const [movie, setMovie] = React.useState({
        id: "",
        title: "",
        name: "",
        release_date: "",
        first_air_date: "",
        media_type: "movie",
        overview: "Five young mutants, just discovering their abilities while held in a secret facility against their will, fight to escape their past sins and save themselves.",
        vote_average: "6.2",
        original_language: "en",
        poster_path: "/eCIvqa3QVCx6H09bdeOS8Al2Sqy.jpg",
        trailer: ""
    })
    const location = useLocation();
    const history = useHistory();
    const [trailerMessage, setTrailerMessage] = React.useState("");
    const [loading, setLoading] = React.useState(true);

    const getMovieTrailer = (movie_idd) => {
        Instance.post("/movie_trailer",
            {
                movie_id: movie_idd
            })
            .then(res => {
                let aux = location.state;
                aux.trailer = res.data
                setMovie(aux);
                setLoading(false)
            }).catch(ex => {
                setMovie(location.state);
                setTrailerMessage("No trailer Available");
                setLoading(false);
            });
    }
    React.useEffect(() => {
        getMovieTrailer(location.state.id);
    }, [store])
    if (!props.connection) {
        history.push("/login")
        return <Login />
    }else if (loading) return <div style={{ flex: 1, textAlign: "center", marginTop: "15%" }}><CircularProgress color="secondary" /></div>
    return (
        <div style={{ backgroundColor: "#282c34" }}>
            <div style={{ marginBottom: "5%" }}>
                <div style={{ display: "inline-block", position: "relative", top: 10 }}>
                    <img style={{ width: 300, height: 350, marginLeft: 20 }} src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path} />
                </div>
                <div style={{ display: "inline-block", top: 5, width: "60%", marginLeft: 20, position: "relative", color: "white" }}>
                    <p>Title : {movie.title ? movie.title : movie.name} </p>
                    <p>Release Date : {movie.release_date ? movie.release_date : movie.first_air_date} </p>
                    <p>Type : {movie.media_type} </p>
                    <p>Rating : {movie.vote_average} </p>
                    <p>Original Language : {movie.original_language}</p>
                    <p style={{
                        width: "100%", height: 150,
                        overflow: "auto"
                    }}>Overview : {movie.overview} </p>
                </div>
            </div>
            <div style={{ flex: 1, textAlign: "center", minHeight: "60vh", marginLeft: 20, marginTop: 20, position: "relative" }}>
                {movie.trailer && <ReactPlayer width="90%" url={"https://www.youtube.com/watch?v=" + movie.trailer} />}
                {!movie.trailer && <h2 style={{ color: "white" }}>{trailerMessage}</h2>}
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    connection: state.connection
})
export default connect(mapStateToProps)(Movie);