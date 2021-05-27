import React, { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = ({ easy, moderate, difficult, all, average, positive }) => {
  if (easy === 0 & moderate === 0 & difficult === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <table>
      <tbody>
        <tr><Statisticline result="easy" value={easy} /></tr>
        <tr><Statisticline result="moderate" value={moderate} /></tr>
        <tr><Statisticline result="difficult" value={difficult} /></tr>
        <tr><Statisticline result="all" value={all} /></tr>
        <tr><Statisticline result="average" value= {average} /></tr>
        <tr><Statisticline result="positive" value={positive + '%'} /></tr>
      </tbody>
    </table>
  )
}

const Statisticline = ({ result, value }) => {
  return (
    <td>{result}   {value}</td>
  )
}

const App = () => {
  const [easy, setEasy] = useState(0)
  const [moderate, setModerate] = useState(0)
  const [difficult, setDifficult] = useState(0)

  const handleEasyClick = () =>
    setEasy(easy + 1)

  const handleModerateClick = () =>
    setModerate(moderate + 1)

  const handleDifficultClick = () =>
    setDifficult(difficult + 1)

    const all = easy + moderate + difficult
    
    const average = ((easy - difficult) / all)

    const positive = (easy / all) * 100


  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={handleEasyClick} text="easy" />
      <Button handleClick={handleModerateClick} text="moderate" />
      <Button handleClick={handleDifficultClick} text="difficult" />
      <h1>statistics</h1>
      <Statistics easy={easy} moderate={moderate} difficult={difficult} all={all} average={average} positive={positive} />
    </>
  )
}

export default App