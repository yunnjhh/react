// Class component
import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";
class App extends React.Component {
    constructor(props) {
        super(props);
        console.log("constructor");
    }
    state = {
        count: 0, // default 값 
        isLoading: true,
        movies: []
    }
    //javascript code 
    // function add, minus 
    add = () => {
        //this.state.count = 1;

        //this.setState({ count : this.state.count + 1 });  
        this.setState(current => ({ count: current.count + 1 })); // 현재의 state를 바로 가져올 수 있다. setState하는 가장 좋은 방법
    };
    minus = () => {
        //this.setState({ count : this.state.count -1 });
        this.setState(current => ({ count: current.count - 1 }));
    };

    // async : movies data를 가져오는 거 기다려라 . 비동기 
    // await : axios 가 끝나기를 기다려라 (axios.get은 완료되기까지 시간이 걸리므로)
    getMovies = async () => {
        const { data: { data } } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort-by=rating");
        // const { data: { data: { movies } } } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort-by=rating");
        // console.log(a);
        const { movies } = data;
        // console.log(data);
        // console.log(movies);

        // this.setState({ movies:movies }); //  앞의 movies = setState , : = , 뒤의 movies = from axios 
        this.setState({ movies, isLoading: false }); // javascirpt. 위에랑 같다. 

        // console.log(movies.data.data.movies);
    }

    componentDidMount() {   // compoenent rendered (component 처음 render 됐을 때)
        // console.log("componentDidMount");

        // setTimeout(() => {
        //     this.setState({isLoading: false, book : "111"})
        // }, 3000); 
        this.getMovies();
    }
    componentDidUpdate() {
        // console.log("component did updated");
    }
    componentWillUnmount() {
        // console.log("component will die"); 
    }
    render() {
        // console.log("render");
        const { isLoading, movies } = this.state;
        const m = movies.filter(movie => (movie.id === 31519));
        console.log(m);
        return (
            <>
                <h1>{this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>minus</button>
                <hr />
                <section className="container">
                    {isLoading
                        ? (<div className="loader">
                            <span className="loader_text">"Loading... "</span>
                        </div>
                        ) : (
                            <div className = "movies">
                                {movies.map(movie => (
                                <Movie 
                                    key = {movie.id} 
                                    id = {movie.id} 
                                    year = {movie.year} 
                                    title = {movie.title} 
                                    summary = {movie.summary} 
                                    poster = {movie.medium_cover_image}
                                    genres = {movie.genres}
                                />   
                                ))} 
                            </div>
                        )
                    }
                </section>
                {/* <div>
                    {
                        movies.map(movie => {
                            const movieId = 31519;
                            if(movieId !== movie.id) {
                                return "false\n"
                            } else {
                                return "ㅇㅇㅇㅇㅇㅇㅇㅇ"
                            }
                        })
                    }

                </div> */}

                <div>
                  {/*
                    data : [
                        USERS : {
                           ID,
                           NAME     
                        }
                    ]
                    }
                  */}
                    {
                        // optional check
                        // data && result && ...
                        // data?.MAP((user) => (
                        //     <p>{user.id}</p>
                        // )) 
                    }
                    <div>
                        <p> {m[0]?.id}</p>
                        <p>{}</p>
                        {
                            m[0]?.title
                        }
                    </div>
                </div>

                <h5>{this.state.book}</h5>
            </>
        )
    }
}

export default App;