import React from 'react';

function Movie(props) {
    if(props.error !== 'False') {
        return (
            <div className="container">
                <table className="table table-sm">
                    <thead>
                    <tr>
                        <th scope="col">Pavadinimas</th>
                        <th scope="col">Aprašymas</th>
                        <th scope="col">IMDB</th>
                        <th scope="col">Trukmė</th>
                        <th scope="col">Režisierius</th>
                        <th scope="col">Plakatas</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{props.title}</td>
                        <td>{props.plot}</td>
                        <td>{props.imdb}</td>
                        <td>{props.time}</td>
                        <td>{props.director}</td>
                        <td><img src = {props.poster}/></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    } else return(
        <div className="alert alert-danger" role="alert">
            Nerasta jokių rezultatų pagal Jūsų paieškos žodžius...
        </div>
    )
}

export default Movie;
