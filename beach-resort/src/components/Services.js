import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaSun} from 'react-icons/fa'

export default class Services extends Component {
  state={
    services:[
      {
        icon:<FaCocktail/>,
        title:'Free Coctails',
        info:'Get your free coctails at nearest bar on us.'
      },
      {
        icon:<FaHiking/>,
        title:'Endless Hiking',
        info:'We provide you with information about nearest sights and views.'
      },
      {
        icon:<FaShuttleVan/>,
        title:'Free Shuttle',
        info:'With us, you will never have a problem to arrive to the property.'
      },
      {
        icon:<FaSun/>,
        title:'Sunniest Destinations',
        info:'We offer destinations in the most sunny areas of the world.'
      }
    ]
  }
  render() {
    return (
      <section className="services">
       <Title title='services' />
       <div className="services-center">
        {this.state.services.map((item,index) => {
          return <article key={index} className="service">
            <span>{item.icon}</span>
            <h6>{item.title}</h6>
            <p>{item.info}</p>
          </article>
        })}
       </div>
      </section>
    )
  }
}
