import React from "react";

class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            factors: [],
            answers: [],
            selected: null,
            selectedClass: null,
        };
    }

    componentDidMount() {
        this.generateNumbers();
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getRandomFactor() {
        const hardNumbers = [2, 3, 4, 5, 6, 7, 8, 9];
        const factors = [...hardNumbers, 0, 1, 10, ...hardNumbers];
        return factors[this.getRandomInt(0, factors.length - 1)];
    }

    generateNumbers = () => {
        const newFactors = [this.getRandomFactor(), this.getRandomFactor()];
        const newAnswers = [];
        const correctAnswer = newFactors[0] * newFactors[1];
        const correctAnswerIndex = this.getRandomInt(0, 3);

        while (newAnswers.length < 4) {
            if (newAnswers.length === correctAnswerIndex) {
                newAnswers.push(correctAnswer);
            } else {
                while (true) {
                    const randomAnswer = this.getRandomFactor() * this.getRandomFactor();

                    if (
                        randomAnswer !== correctAnswer &&
                        !newAnswers.includes(randomAnswer) &&
                        Math.abs(randomAnswer - correctAnswer) <= 15
                    ) {
                        newAnswers.push(randomAnswer);
                        break;
                    }
                }
            }
        }
        this.setState({
            factors: newFactors,
            answers: newAnswers,
            selected: null,
            selectedClass: null,
        });
    };

    handleClick = (value, index) => {
        if (this.state.selected !== null) return;

        const isCorrect = value === this.state.factors[0] * this.state.factors[1];
        this.setState({ selected: index, selectedClass: isCorrect ? "btn-success" : "btn-danger" });
        setTimeout(this.generateNumbers, 2000);
    };

    render() {
        return (
            <div className="px-5 py-4 border rounded-4">
                <h1 style={{ marginBottom: "5rem" }}>
                    Qual o resultado da operação {this.state.factors[0]} x {this.state.factors[1]}?
                </h1>

                <div className="container w-50 g-0">
                    <div className="row row-cols-2 gx-3 gy-3">
                        {this.state.answers.map((value, index) => (
                            <div key={index} className="col">
                                <button
                                    className={`btn ${
                                        index === this.state.selected
                                            ? this.state.selectedClass
                                            : "btn-secondary"
                                    } btn-lg w-100`}
                                    onClick={() => this.handleClick(value, index)}
                                >
                                    {value}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;
