import axios from 'axios';
import { useState } from 'react';

const ReviewForm = ({ movie_id, realoadReviews }) => {

    const initialValue = { name: "", text: "", vote: 0 };
    const [formData, setFormData] = useState(initialValue);

    // funzione di creazione oggetto valori form
    const setFieldValue = (e) => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const urlEndpoint = `http://localhost:3000/movies/${movie_id}/reviews`;

    // invio richiesta al submit del form
    const submitReview = (e) => {
        e.preventDefault();

        axios.post(urlEndpoint, formData, { headers: { 'Content-Type': 'application/json' } })
            .then(
                () => {
                    setFormData(initialValue)
                    realoadReviews()
                }
            )
            .catch(err => console.log(err)
            )

    }

    return (
        <div>
            <header>
                <h5>Add your review</h5>
            </header>
            <form onSubmit={submitReview}>
                <h3> Nome </h3>
                <input type="text" name="name" value={formData.name} onChange={setFieldValue} />

                <h3> Recensione </h3>
                <textarea name="text" value={formData.text} onChange={setFieldValue} ></textarea>

                <h3> Voto </h3>
                <input type="number" min="1" max="5" name='vote' value={formData.vote} onChange={setFieldValue} />

                <button type="submit" className="btn btn-primary">Invia</button>
            </form>
        </div>

    )
}

export default ReviewForm