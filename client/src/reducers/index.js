import { Instance } from "../services";

const initState = {
    user: localStorage.getItem("loggedUser") !== null ? JSON.parse(localStorage.getItem("loggedUser")) : { bookMarks: [] },
    connection: localStorage.getItem("loggedUser") !== null
}
const bookMarkExists = (movie_id) => {
    let result = false;
    let local = JSON.parse(localStorage.getItem("loggedUser"));
    for (let i in local.bookMarks) {
        if (local.bookMarks[i].id === movie_id)
            result = true;
    }
    return result;
}
const initBookMarks = () => {
    Instance.get("/bookmarks")
        .then(res => {
            for (let i in res.data) {
                bookMark(res.data[i])
            }
        }).catch(ex => console.log(ex))
}
const deleteBookMark = (movie_id) => {
    let local = JSON.parse(localStorage.getItem("loggedUser"));
    if (bookMarkExists(movie_id)) {
        for (let i in local.bookMarks) {
            if (local.bookMarks[i].id === movie_id) {
                local.bookMarks.splice(i, 1);
            }
        }
        localStorage.setItem("loggedUser", JSON.stringify(local));
    }
}
const bookMark = (movie) => {
    let local = JSON.parse(localStorage.getItem("loggedUser"));
    if (!bookMarkExists(movie.id)) {
        local.bookMarks.push(movie);
        localStorage.setItem("loggedUser", JSON.stringify(local));
    }
}
const disconnect = async (state) => {
    if(state.user.bookMarks.length!==0){
        Instance.post("/reinit_bookmarks").then(res => { 
            Instance.post("/bookmarks", state.user.bookMarks).then(res => {}).catch(ex => { })
        }).catch(ex => { });
    }else{
        Instance.post("/reinit_bookmarks").then(res => { }).catch(ex => { });
    }
    localStorage.removeItem("loggedUser");
}
export default (state = initState, action) => {
    switch (action.type) {
        case "SIGN_IN": {
            localStorage.setItem("loggedUser", JSON.stringify(action.user));
            initBookMarks();
            return {
                user: action.user,
                connection: true
            };
        }
        case "DISCONNECT": {
            disconnect(state);
            return {
                user: { bookMarks: [{}] },
                connection: false
            }
        }
        case "ADD_BOOKMARK": {
            bookMark(action.movie);
            return {
                ...state,
                user: JSON.parse(localStorage.getItem("loggedUser"))
            };
        }

        case "REMOVE_BOOKMARK": {
            deleteBookMark(action.movie_id);
            return {
                ...state,
                user: JSON.parse(localStorage.getItem("loggedUser"))
            }
        }
        default:
            return state;
    }

}