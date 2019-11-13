import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

export default class Services extends Component {

    state={
        services: [
            {
                icon: <FaCocktail/>,
                title: "free cocktails",
                info: "example lorem "
            },
            {
                icon: <FaHiking/>,
                title: "free hiking",
                info: "example lorem "
            },
            {
                icon: <FaShuttleVan/>,
                title: "free shuttle van",
                info: "example lorem "
            },
            {
                icon: <FaBeer/>,
                title: "strongest beer",
                info: "example lorem "
            },
        ]
    }

    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map((item, index)=>{
                        return (
                        <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>);
                    })}
                </div>
                
            </section>
        )
    }
}
