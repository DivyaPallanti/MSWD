import React, { useState } from 'react'

const Button = ({ buttClick, text }) => {
  return (
    <button onClick={buttClick}>
      {text}
    </button>
  )
}

const App = () => {
  const matt = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(matt.length).fill(0))

  const handleFlukyClick = () => {
    const duplicate = Math.floor(Math.random() * matt.length)
    setSelected(duplicate)
  }

  const handleVotesClick = () => {
    const vote = [...votes]
    vote[selected] += 1
    setVotes(vote)
  }

  const mostVotes = () => {
    let max = 0
    let indexMax = 0
    votes.forEach((item, index) => {
      if (item > max) {
        max = item
        indexMax = index
      }
    })
    return indexMax
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{matt[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button buttClick={handleVotesClick} text="vote" />
      <Button buttClick={handleFlukyClick} text="next anecdote" />
      <h1>Anecdote with most votes</h1>
      {votes[mostVotes()] === 0 ?
        <>
          <p>There is votes</p>
        </>
        :
        <>
          <p>{matt[mostVotes()]}</p>
          <p>has {votes[mostVotes()]} votes</p>
        </>
      }
    </>
  )
}

export default App