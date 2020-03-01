import React, {Component} from "react";
import Movies from "../movies/Movies";
import './form.scss';

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
                <div className="form-group container">
                    <label>Įveskite filmo pavadinimą:</label>
                    <input class="form-control" type="text" value={this.state.paieskosZodis} onChange={this.handleChange} />
                </div>
                <div class = "container">
                    <button type="submit" value="Submit" className="btn btn-secondary">Ieškoti</button>
                </div>
            </form>
                <div class = "container movies-table">
                    <Movies title = {this.state.rastasFilmas.Title}
                            plot = {this.state.rastasFilmas.Plot}
                            imdb = {this.state.rastasFilmas.imdbRating}
                            time = {this.state.rastasFilmas.Runtime}
                            director = {this.state.rastasFilmas.Director}
                            poster = {this.state.rastasFilmas.Poster}
                            error = {this.state.rastasFilmas.Response}/>
                </div>
            </div>
        );
    }
}
export default Form;