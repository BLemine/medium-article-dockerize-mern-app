import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Instance } from "../services"
import LiveTvIcon from '@material-ui/icons/LiveTv';
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { store } from "../store";
import swal from 'sweetalert';
import CircularProgress from '@material-ui/core/CircularProgress';


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'No Copyright 😊 '}
            <Link color="inherit" href="https://material-ui.com/">
                BLemine
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        //backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: "#4e343d",
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: "#2d2e35"
    },
}));

function Login(props) {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const [localBackgroundImage, setLocalBackgroundImage] = React.useState("url(https://watchaholichome.files.wordpress.com/2018/11/popcorn.gif?w=371)");
    const [user, setUser] = React.useState({
        login: "", password: ""
    });
    const [loading, setLoading] = React.useState(false);

    const signIn = (e) => {
        e.preventDefault();
        setLoading(true);
        Instance.post("/user", {
            login: user.login,
            password: user.password
        }).then(res => {
            setLoading(false);
            if (res.data === "OK") {
                console.log("Welcome user")
                props.sign_In(user.login, user.password)
                history.push("/")
            } else {
                swal("Oops!", "Inputs don't match !", "error");
                console.log("Bad typing")
            }
        }).catch(ex => console.log(ex));
    }
    React.useEffect(() => {
        if (props.connection) {
            history.push("/")
        } else {
            if (location.state !== undefined) {
                alert(location.state.error)
            }
            Instance.get("/images").then(res => {
                setLocalBackgroundImage(res.data[Math.floor(res.data.length * Math.random())]);
            }).catch(ex => console.log(ex));
        }
    }, [store])

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} style={{
                backgroundImage: localBackgroundImage,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LiveTvIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    {!loading &&
                        <form className={classes.form} onSubmit={(ee) => signIn(ee)}>
                            <TextField
                                onChange={(e) => setUser({ ...user, login: e.target.value })}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="login"
                                label="Login"
                                autoFocus
                            />
                            <TextField
                                onChange={(e) => setUser({ ...user, password: e.target.value })}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign In
                        </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="/" variant="body2" style={{ color: "#2d2e35" }}>
                                        Visit the public page ?
                                </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2" style={{ color: "#2d2e35" }}>
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Box mt={5}>
                                <Copyright />
                            </Box>
                        </form>}
                    {loading &&
                        <div style={{ flex: 1, textAlign: "center", marginTop: "15%" }}>
                            <CircularProgress color="secondary" />
                        </div>
                    }
                </div>
            </Grid>
        </Grid>
    );
}

const mapStateToProps = (state) => ({
    connection: state.connection
})
const mapDispatchToProps = (dispatch) => {
    return {
        sign_In: (login, password) => { dispatch({ type: "SIGN_IN", user: { login: login, password: password, bookMarks: [] } }) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);