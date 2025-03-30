import { useState } from 'react'

const Button = ({onClick, text}) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  )
}

const Statistics = (props) => {
  if (props.all == 0) {
    return (<div>Give feedback first bitch!</div>)
  }

  else return (
    <div>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={props.all} />
      <StatisticLine text="average" value={props.average} />
      <StatisticLine text="positive" value={props.positive} />
    </div>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <div>
      {text}: {value}
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [totalFeedback, setTotalFeedback] = useState(0)
  const [totalScore, setTotalScore] = useState(0)
  // const [average, setAverage] = useState(0)

  const increaseGood = () => {
    setGood(good + 1)
    setTotalFeedback(totalFeedback + 1)
    setTotalScore(totalScore + 1)
  }

  const increaseNeutral = () => {
    setNeutral(neutral + 1)
    setTotalFeedback(totalFeedback + 1)
  }

  const increaseBad = () => {
    setBad(bad + 1)
    setTotalFeedback(totalFeedback + 1)
    setTotalScore(totalScore - 1)
  }

  const getAverage = () => {
    if (totalFeedback >= 1) {
      return totalScore/totalFeedback
    }

    else return 0
  }

  const getPositivePercent = () => {
    if (totalFeedback >= 1) {
      return good / totalFeedback * 100
    }
    else return 0
  }

  return (
    <div>
      <h2>Give feedback</h2>
      <Button onClick={increaseGood} text="good" />
      <Button onClick={increaseNeutral} text="neutral" />
      <Button onClick={increaseBad} text="bad"/>

      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}
                  all={totalFeedback} average={getAverage()} positive={getPositivePercent()}/>
    </div>
  )
}

export default App
