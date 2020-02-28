import React from 'react';

function Movie(props) {
    if(props.error !== 'False') {
        return (
            <div className="container">

                <table className="table table-sm table-dark">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">IMDB</th>
                        <th scope="col">Runtime</th>
                        <th scope="col">Director</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{props.title}</td>
                        <td>{props.plot}</td>
                        <td>{props.imdb}</td>
                        <td>{props.time}</td>
                        <td>{props.director}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    } else return(
        <p>dfhdf</p>
    )
}

export default Movie;
