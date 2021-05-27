import React from 'react'

const Header = (incre) => {
  return (
    <div>
      <h1>
         {incre.course}
      </h1>
      
    </div>
  )
}

const Part = (incre) => {
  return (
    <div>
        <p>
         {incre.part1}     {incre.exercises1} 
         </p>
         <p>

         {incre.part2}      {incre.exercises2}
         </p>
         <p>
         {incre.part3}      {incre.exercises3}
         </p>
         
         
         
      </div>
  )
}

const Content = (incre) => 
{
 
  
  return (
    <> 
            <Part part1={incre.part1}       exercises1={incre.exercises1} />  
            <Part part2={incre.part2}       exercises2={incre.exercises2} />
            <Part  part3={incre.part3}       exercises3={incre.exercises3}/> 
           
    </>
  )
}

const Total = (incre) => {
  return (
    <div>
      <p>
         Number of exercises  {incre.exercises1 + incre.exercises2 + incre.exercises3}
         
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
  return (
    <>
      <Header course={course}  />
      <Content  part1={part1}   exercises1={exercises1} part2={part2}   exercises2={exercises2}  part3={part3}   exercises3={exercises3}/>

      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
      
    
    </>
  )

  }
export default App
