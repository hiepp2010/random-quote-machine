
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: [],
            randomQuote: [],
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange() {
        let randIndex = Math.floor(Math.random() * this.state.quotes.length);

        this.setState({
            randomQuote: this.state.quotes[randIndex],
        });
    }
    componentDidMount() {
        fetch(
            "https://type.fit/api/quotes")
            .then((res) => res.json())
            .then((json) => {
                let randIndex = Math.floor(Math.random() * json.length);
                this.setState({
                    quotes: json,
                    randomQuote: json[randIndex],
                });
            })
    }
    render() {
        return (
            <div id="quote-box" className="container pt-5">
                <div className="jumbotron">
                    <div className="card">
                        <div className="card-header">Inspirational Quotes</div>
                        <div className="card-body">
                            <div id="author" className="card-text">
                               <h5> {this.state.randomQuote.author} </h5>
                            </div>
                            <div id="text " className="card-title">
                                {this.state.randomQuote.text}
                            </div>


                            <div className="row">
                                <button id="new-quote" className="btn btn-primary ml-3 " onClick={this.handleChange}>New quote</button>
                                <a href="twitter.com/intent/tweet" id="tweet-quote" className="btn btn-warning"><button>T</button> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);