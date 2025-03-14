import axios from "axios";
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";

const initialData = {
    title: "",
    director: "",
    genre: "",
    release_year: 2000,
    abstract: "",
    image: null,
};

const endpointApi = "http://localhost:3000/movies";


const AddMoviePage = () => {

    const navigate = useNavigate();

    const [formDataObj, setFormDataObj] = useState(initialData);



    const setFieldValue = (e) => {
        const { value, name } = e.target;
        if (name === "image") setFormDataObj({ ...formDataObj, image: e.target.files[0] });
        else setFormDataObj({ ...formDataObj, [name]: value });
    }



    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(endpointApi, formDataObj, { headers: { "Content-Type": "multipart/form-data" } })
            .then(
                // Dopo aver aggiunto il film si viene reindirizzati alla home
                () => { navigate("/") }
            )
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            <header> <h1>Add a new book</h1> </header>

            <section id="movie-form">
                <form onSubmit={handleSubmit}>
                    <div>
                        <h3> Titolo </h3>
                        <input
                            name="title"
                            type="text"
                            value={formDataObj.title}
                            onChange={setFieldValue}
                            required
                        />
                    </div>
                    <div>
                        <h3> Regista </h3>
                        <input
                            name="director"
                            type="text"
                            value={formDataObj.director}
                            onChange={setFieldValue}
                            required
                        />
                    </div>
                    <div>
                        <h3> Genere </h3>
                        <input
                            name="genre"
                            type="text"
                            value={formDataObj.genre}
                            onChange={setFieldValue}
                            required
                        />
                    </div>
                    <div>
                        <h3> Anno di uscita </h3>
                        <input
                            name="release_year"
                            type="number"
                            min="1895"
                            max="2040"
                            value={formDataObj.release_year}
                            onChange={setFieldValue}
                            required
                        />
                    </div>
                    <div>
                        <h3> Descrizione </h3>
                        <input
                            name="abstract"
                            type="text"
                            value={formDataObj.abstract}
                            onChange={setFieldValue}
                            required
                        />
                    </div>
                    <div>
                        <h3> Immagine </h3>
                        <input
                            className="form-control"
                            name="image"
                            type="file"
                            onChange={setFieldValue}
                            required
                        />
                    </div>
                    <div>
                        <button className="btn" type="submit">
                            Aggiungi film
                        </button> <br />
                        <Link className="btn" to="/"> Torna alla Home </Link>
                    </div>
                </form>
            </section>
        </>

    )
}

export default AddMoviePage