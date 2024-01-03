import React from 'react';
import Joke from './Joke';
import {
  Jumbotron,
  Container,
  CardColumns
} from 'reactstrap';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: [
        {
	  id: 1,
          setup: "What do you call a cow with no legs?",
          punchline: "Ground beef"
        },
        {
	  id: 2,
          setup: "What do you call a cow with one leg shorter than the others",
          punchline: "Lean beef"
        },
        {
	  id: 3,
          setup: "Where do cows go on dates?",
          punchline: "To the moo-vies!"
        },
        {
	  id: 4,
          setup: "What was the cow's favorite subject in school?",
          punchline: "Cow-culus!"
        },
        {
	  id: 5,
          setup: "Why did the cow have to stand up while watching TV?",
          punchline: "She didn't have a coooow-ch"
        }
      ]
    }
  }

  render() {
    const jokeCards = this.state.jokes.map(j => <Joke joke={j} />);

    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Dana's Cow Jokes</h1>
          <p className="lead">Guaranteed to make you shake your head!</p>
        </Jumbotron>
        <Container fluid>
          <CardColumns>
            {jokeCards}
          </CardColumns>
        </Container>
      </div>
    );
  }
};
