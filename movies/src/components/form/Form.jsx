import React, {Component} from "react";
import Movies from "../movies/Movies";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {paieskosZodis: '', rastasFilmas: ''};


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({paieskosZodis: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.paieskosZodis);
        fetch(`https://www.omdbapi.com/?apikey=e4db3ced&t=${this.state.paieskosZodis}`)
            .then(response => response.json())
            .then(
                data=>{
                    this.setState({
                        rastasFilmas: data
                    })
                }
            )
    }


    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Ieskomo filmo pavadinimas:
                    <input type="text" value={this.state.paieskosZodis} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
                <Movies title = {this.state.rastasFilmas.Title}
                        plot = {this.state.rastasFilmas.Plot}
                        imdb = {this.state.rastasFilmas.imdbRating}
                        time = {this.state.rastasFilmas.Runtime}
                        director = {this.state.rastasFilmas.Director}
                        error = {this.state.rastasFilmas.Response}/>
            </div>
        );
    }
}
export default Form;