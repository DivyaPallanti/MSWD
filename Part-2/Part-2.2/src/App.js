import React from 'react'

const Header = ({ objective }) => {
  return (
      <h2>{objective.name}</h2>
  )
}

const Part = (props) => {
  return (
      <p>
          {props.part.name} {props.part.exercises}
      </p>
  )
}

const Content = ({ objective }) => {
  return (
      <div>
          {objective.parts.map((part) => <Part part={part} />)}
      </div>
  )
}


const Total = ({ objective }) => {
const sum=objective.parts[0].exercises + objective.parts[1].exercises + objective.parts[2].exercises
return (
   <strong>total of {sum} exercises</strong>
		
	);
}

const Course = ({ objective }) => {
  return (
      <>
          <Header objective={objective} />
          <Content objective={objective} />
          <Total objective={objective} />
      </>
  )
}
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    
  ]

  return (
    <>
      
      {courses.map(objective => <Course objective={objective} />)}
    </>
  )
}

export default App