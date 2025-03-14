const ReviewCard = ({ reviewProp }) => {

    const { name, vote, text } = reviewProp

    return (
        <div>
            <h3>{vote}/5</h3>
            <p>{text}</p>
            <h4>Scritto da: {name}</h4>
        </div>
    )
}

export default ReviewCard