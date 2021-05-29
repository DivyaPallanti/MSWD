import React from 'react'

const Header = (pr) => {
  return (
    <div>
      <h1>
         {pr.course}
      </h1>
      
    </div>
  )
}
const Content = (pr) => {
  return (
    <div>
      <p>
         {pr.part1}       {pr.exercises1}

         </p>
         <p>
         {pr.part2}             {pr.exercises2}
         </p>
        <p>
        {pr.part3}        {pr.exercises3}
        </p>
         
      
      
    </div>
  )
}

const Total = (pr) => {
  return (
    <div>
      <p>
         Number of exercises  {pr.total}
         
      </p>
      
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const total =  exercises1 + exercises2 + exercises3



  return (
    <>
      <Header course={course}  />
      <Content part1={part1}  exercises1={exercises1}/>
      <Content part2={part2}   exercises2={exercises2} />
      <Content part3={part3}   exercises3={exercises3} />
      <Total total={total} />
     



    </>
  )

  }
export default App
