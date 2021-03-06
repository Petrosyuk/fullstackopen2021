import React, { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const generateRandomListItem = () =>
    Math.floor(Math.random() * anecdotes.length);
  const getNewAnecdote = () => setSelected(generateRandomListItem);

  const hanldeUpVote = (selected) => {
    const voteCopy = [...votes];
    voteCopy[selected] = voteCopy[selected] + 1;
    setVotes(voteCopy);
  };

  const MostUpvotes = () => {
    let maxVotes = Math.max(...votes);
    let maxIndex = votes.findIndex((elem) => elem === maxVotes);

    return (
      <>
        <h1>Annecdote with most upvotes</h1>
        <p>{anecdotes[maxIndex]}</p>
      </>
    );
  };

  return (
    <>
      {anecdotes[selected]}
      <br />
      <p>{votes[selected]} upvotes.</p>
      <br />
      <button onClick={() => hanldeUpVote(selected)}>Up-vote</button>
      <button onClick={getNewAnecdote}>Next Joke</button>
      <MostUpvotes />
    </>
  );
};

export default App;
