import React from 'react';
import Loading from "../Loading";

function Card({info, loading,flag}) {
    return (
        <div>
            {
                loading ? <Loading/> : <div className="card">
                    <img src={flag}  className={"card-img-top"} alt="flag"/>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Capital: {info.capital}</li>
                        <li className="list-group-item">Official languages: {info.officialLanguages}</li>
                        <li className="list-group-item">Population: {info.populationEstimate}</li>
                    </ul>
                </div>
            }
        </div>
    );
}

export default Card;

