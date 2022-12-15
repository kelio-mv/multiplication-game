function Homepage(props) {
    return (
        <div className="px-5 py-4 border rounded-4">
            <h1 style={{ marginBottom: "5rem" }}>Jogo da Tabuada</h1>
            <button
                className="btn btn-primary btn-lg py-1 d-block mx-auto"
                onClick={props.startGame}
            >
                Jogar
            </button>
        </div>
    );
}

export default Homepage;
