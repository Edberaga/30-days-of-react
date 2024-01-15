import React from 'react'
import topPopulation from '../data/population.json'

const Population = () => {
  const max = 7693165599;
  const value = (country, world) => { return (country / world) * 100};

  return (
    <section className='container'>
    <div>
    {topPopulation.tenHighestPopulation.map((par) => {
        return (
            <div 
            className='population-label'>
                <p>{par.country}</p>
                <progress value={value(par.population, max)} max="100">{value(par.population, max)}</progress>
                <p>{par.population}</p>
            </div>
        )
    })}
    </div>
    </section>
  )
}

export default Population