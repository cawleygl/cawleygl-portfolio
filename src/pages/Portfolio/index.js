// import React, { useEffect, useState } from 'react'
// import { useAppContext } from '../../utils/AppContext'
import { Col, Container, Row } from 'react-bootstrap';
import PageTitle from '../../components/PageTitle'
import ProjectCard from '../../components/ProjectCard'

//Project screenshot images from Assets folder
import Burger from '../../Assets/BurgerEater.png'
import Recipe from '../../Assets/RecipeGenerator.png'
import Weather from '../../Assets/WeatherDashboard.png'
import Planner from '../../Assets/WorkdayPlanner.png'

import "./style.css"

const PortfolioPage = () => {
    return (
        <Container>
            <PageTitle title="Portfolio" subtitle="Previews of completed coding projects and assignments, with links to deployed projects and GitHub repositories"></PageTitle>
            <Row xs={1} md={2} lg={3}>
                <Col>
                    <ProjectCard asset={Burger} title="Burger Eater" text="A simple application that allows the user to submit names of burgers, then 'eat' them by clicking a button that populates next to it's name." appLink="https://floating-ocean-83726.herokuapp.com/" repoLink="https://github.com/cawleygl/burger"></ProjectCard>
                </Col>
                <Col>
                    <ProjectCard asset={Recipe} title="Nutritious Recipe Generator" text="A web application that allows users to quickly display recipes from a recipe API in different ways, to inspire creativity in the kitchen." appLink="https://egivilza.github.io/NutritiousRecipeGenerator/" repoLink="https://github.com/EgiVilza/NutritiousRecipeGenerator"></ProjectCard>
                </Col>
                <Col>
                    <ProjectCard asset={Weather} title="Weather Dashboard" text="A weather dashboard application that shows current weather conditions in any city, as well as a 5-day forecast." appLink="https://cawleygl.github.io/weather-dashboard/" repoLink="https://github.com/cawleygl/weather-dashboard"></ProjectCard>

                </Col>
                <Col>
                    <ProjectCard asset={Planner} title="Work Day Scheduler" text="An application that allows the user to schedule out events in a work day, save them for later reference, and see which events have passed and which are still to come." appLink="https://cawleygl.github.io/workday-planner/" repoLink="https://github.com/cawleygl/workday-planner"></ProjectCard>
                </Col>
            </Row>
        </Container>
    )
}

export default PortfolioPage
