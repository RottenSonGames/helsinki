import { useState } from 'react'

const Course = ({course}) => {
  return (
    <>
      <Header courseName={course.name}/>
      <Content parts={course.parts}/>
      <Total exercises={course.parts.map(part => part.exercises)}/>
    </>
  )
}

const Header = ({courseName}) => {
  return (
    <>
    <h1>{courseName}</h1>
    </>
  )

}

const Content = ({parts}) => {
  return (
    <>
      {parts.map(part => <Part key={part.id}
                               name={part.name}
                               exercises={part.exercises}/>
      )}
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.name}: {props.exercises}</p>
    </>
  )
  
}

const Total = ({exercises}) => {
  return (
    <>
      <p>Total exercises: {exercises.reduce((e1, e2) => e1 + e2)}</p>
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
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
      {courses.map(course => <Course key={course.id}
                                     course={course}/>
      )}
    </>

  )
}

export default App
