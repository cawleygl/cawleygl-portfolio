// import React, { useEffect, useState } from 'react'
// import { useAppContext } from '../../utils/AppContext'
import "./style.css"

const PortfolioPage = () => {
    return (
        <div className="container mt-sm-5 mt-4">
            <div class="row p-2">
                <div class="col-sm-10 ml-sm-4 border-bottom border-dark">
                    <h1 class="font-weight-light">Portfolio</h1>
                </div>
                <div class="col-md-12">
                    <p>A sample of the coding projects and assignments I've completed, with links to deployed projects and
                    GitHub repositories.</p>
                </div>

            </div>
            <div class="container-fluid px-md-5">
                <div class="row mb-md-3">
                    <div class="col-md-4">
                        <div class="card m-2">
                            <img src="Assets/RecipeGenerator.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Nutritious Recipe Generator</h5>
                                <p class="card-text">A web application that allows users to quickly display recipes from a
                            recipe API in different ways, to inspire creativity in the kitchen.</p>
                                <a href="https://egivilza.github.io/NutritiousRecipeGenerator/" class="card-link"
                                    target="_blank">Application</a>
                                <a href="https://github.com/EgiVilza/NutritiousRecipeGenerator" class="card-link"
                                    target="_blank">Repository</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card m-2">
                            <img src="Assets/BurgerEater.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Burger Eater</h5>
                                <p class="card-text">A simple application that allows the user to submit names of burgers, then
                                "eat" them by clicking a button that populates next to it's name.
                        </p>
                                <a href="https://floating-ocean-83726.herokuapp.com/" class="card-link" target="_blank">Application</a>
                                <a href="https://github.com/cawleygl/burger" class="card-link" target="_blank">Repository</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card m-2">
                            <img src="Assets/WorkdayPlanner.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Work Day Scheduler</h5>
                                <p class="card-text">An application that allows the user to schedule out events in a work day,
                                save them for later reference, and see which events have passed and which are still to come.
                        </p>
                                <a href="https://cawleygl.github.io/workday-planner/" class="card-link" target="_blank">Application</a>
                                <a href="https://github.com/cawleygl/workday-planner" class="card-link" target="_blank">Repository</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row mb-md-3">
                    <div class="col-md-4">
                        <div class="card m-2">
                            <img src="Assets/WeatherDashboard.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Weather Dashboard</h5>
                                <p class="card-text">A weather dashboard application that shows current weather
                                conditions in
                            any city, as well as a 5-day forecast.</p>
                                <a href="https://cawleygl.github.io/weather-dashboard/" class="card-link"
                                    target="_blank">Application</a>
                                <a href="https://github.com/cawleygl/weather-dashboard" class="card-link" target="_blank">Repository</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PortfolioPage
