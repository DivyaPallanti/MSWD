import React from 'react';

const Header = ( incre ) => {
	return (
		<div>
			<h1>{ incre.name}</h1>
		</div>
	);
};

const Content = (incre) => {
	return (
		<div>
      <p>
          {incre.parts[0].name}  {incre.parts[0].exercises}
          </p>
          <p>
          {incre.parts[1].name}  {incre.parts[1].exercises}
          </p>
          <p>
          {incre.parts[2].name}  {incre.parts[2].exercises}
      </p>
		
		</div>
	);
};

const Total = (incre) => {
	return (
		<div>
			<p>
				Number of exercises {incre.parts[0].exercises + incre.parts[1].exercises + incre.parts[2].exercises}
			</p>
		</div>
	);
};



const App = () => {

  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


return (
  <div>
  
    <Header name={course} />
    <Content parts={parts} />
    <Total parts={parts} />
    
  </div>
);
};



export default App