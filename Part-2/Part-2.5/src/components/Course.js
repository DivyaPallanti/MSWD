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
    const sum = objective.parts.reduce((total, part) => total + part.exercises, 0)
    return (
        <strong>Number of exercises {sum}</strong>
    )
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

export default Course