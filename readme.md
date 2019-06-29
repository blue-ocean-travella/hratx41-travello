
# <img src="https://github.com/blue-ocean-travello/hratx41-travello/blob/master/travella.png" width="100" height="100" />  Travel done the way you like it!


## Travella Contributors:

![pic:](https://avatars1.githubusercontent.com/u/42327915?s=400&v=4)|![pic:](https://avatars1.githubusercontent.com/u/42365770?s=400&v=4) | ![Pic:](https://avatars1.githubusercontent.com/u/10273125?s=400&v=4)|![pic:](https://avatars2.githubusercontent.com/u/46075198?s=400&v=4) | ![pic:](https://avatars2.githubusercontent.com/u/39739180?s=400&v=4)|![pic:](https://avatars0.githubusercontent.com/u/46331990?s=400&v=4)
:---: | :---: | :---: | :---: | :---: | :---:
**[Fawnie du Plessis](https://github.com/fduplessis01)**| **[Gladys Benitez](https://github.com/gladysbenitez)** | **[Jimmy Hung](https://github.com/jmhung)** | **[David Guenther](https://github.com/DcguentherATX)** | **[Maria Navarro](https://github.com/MariaJose)**|**[Louis Rangel](https://github.com/lui914)**

## Introduction

This project was a brief 1-week sprint where our team tried to complete an MVP for an external user **Eric Anthony**

 - Our goal is to do MVP with some additional functionality. 
 - Vissually we want the application to look amazing and include some additional features beyond MVP.

## What does the app do? 

 - Travella is a personal travel assistant application. 
 - Travella builds an unique customized travel itinerary according to the users travel dates and destination. 
 - Travella is for any traveller, experience or first time traveller.
 - Travella addresses a very specific need, it customize your travel needs and give you selective options.
 - Travella assist by addressing the issues of the internet being flooded with none relevent info. 
 - Travella only gives the user relevent current info.
 - Users will enter their destination and travel dates and the app does all the work for you!
 - Travella will offer you an array of options that are all categorized.
 - Users custom build their itinerary at a click of a button.
 - User can edit changes or delete any options choosen and easily make changes to their itinerary.

## Tech stack

- ReactJS
- JavaScript
- Axios
- MongoDB
- NodeJS and Express
- Google API 
- Bootstrap
- Figma
- Jest
- Travis CI

## Technical Challenges and research that you anticipated

- Using figma to visually build out the user interface
  * Why
  * What
  * How

- Using the React vertical time line library to create an itenerary with a vertical time line
  * Best option to visaully display the itenarary for our travel application
  * Obstacles we faced was working with with the main back ground images and bootstrap modals
  * Reading documentations with trail and error until we resolved all bugs
  
- Using React bootstrap for styling and modals
  * Bootstrap offered grid styling layout with an option to use cards and modals. For our project this was a perfect fit.
  * Obstacles we faced was modals hidden behind the back ground.
  * 
  
- Git workflow
  * Ensuring the team follows a set workflow as we working off one code base. 
  * Correctly working off feature branches when the team creates new features. 
  * Rebase to development and testing the code via a pull request before it gets merged into master. 
  * As the code base is deployed we want to ensure that the code is working bug free before it gets merged with master.
  * We set up a Git Workflow document for the team to guide everyone and also did one on one session.
  
- Navigation of front end pages
  * Why
  * What
  * How
  
- Data flow between each component, server and database
  * Ensuring that the team fully understand the data stucktures we will be working with.
  * Ensuring each team member knows the flow of data and how each component will interact with the data.
  * Ensuring each team member understand when data will be store in state or in the database.
  * We did whiteboard session with the whole team talking and drawing out the flow of data.
  * Team members worked in pairs and groups to ensure everyne is interacting with the data correctly.
  
- Using Google API to scrape data from Google
  * Why
  * What
  * How
  
- Testing with Jest and Travis CI
  * Why
  * What
  * How
  
-
 

    * Why, what was the plan to overcome those challenges?
    * What did you learn?
  
## Challenges that were unexpected

- GitWorklow - Rebasing after each feature and understanding and following the Gitwrokflow set out
  * The team did not follow everything outlined in the Gitworkflow. Rebasing after each feature did not take place.
  * This caused a lot of additional manual work where we needed to copy over code before we could review it.
  * The team will ensure that they pratice and undertand the Gitworkflow outlined in the future before any coding starts.
  
- Data from the API
  * Fully understanding what the data is the we getting back from the API and how we will structure the data.
  * Better communication on a daily basis on the data points, flow and structure.
  * Whiteboard the data flow and data reveived from the API and how the rest of the team will interact with the data.
  
- Implementing more testing after each feature
  * The team did not implement testing after each feature.
  * In the future we need to follow the Gitworkflow and add testing to this process
  * No coding will be reviewed with out testing done first.

  
## Video Demo / Screen shot walkthrough of the app 

### Wire Frame Screen Shots

![:pic](https://github.com/blue-ocean-travella/hratx41-travello/blob/master/Travella%20Wire%20Frame%20One.png)

![:pic](https://github.com/blue-ocean-travella/hratx41-travello/blob/master/Travella%20Wire%20frame%20Two.png)

![:pic](https://github.com/blue-ocean-travella/hratx41-travello/blob/master/Travella%20Wire%20Frame%20Three.png)


    * What were the user stories /  what was MVP (mention Minimal Viable Product)
  
## How does the app work?

- The user enters in a destination on the Search Bar Page component of the React Application.
- The application makes an API call to Express server. 
- The Express server makes an API call to Google API and scrape the appliable data needed.
- The data received from Google API is constructed into an object and send to state in React.
- The Category Page component extracts the data from state and display the data according to the users category preferences.
- The user makes seletions in each category and these options selected are send back to the Express server.
- The Express server saves the data into MongoDB with a quiery and uses the user name as a reference when saving the options.
- The Itenarary Page component make a Express server request for the applicable optiond according to the users name.
- The server makes a quiery to the databse for the data and send the options back to the Itenanrary Page componant.
- The Itenarary Page component displays the options using Reacts time line library
- The user have the option to delete the options selected in the itenarary, or display more info on options.

    * What happens behind the scenes when the user interacts with it? 
    * OR What are all the place the data travels?  What happens to that data?
    * Optionally include a diagram
    * How does the tech stack come together?

## What research was required?

- Researching APIs to scrape and use for the data that is needed for this travel assistant application.
    * Google API
    * Flicker API
    * OnSplash API
- Researching new technologies and additional libreries with React.
    * Boostrap for styling
    * Matrial UI  for styling
    * Travis CI for Testing
    * Jest for testing
    * React router for pagenation
    * React vertical Time Line component for the itinerary time line page
    * React Google maps to add maps to all pages and activities

## Workflow and Key lessons from your team - specifically those related to: Agile, CI/CD, testing, working with external stakeholders, ticketing, and user stories.

- The team followed Agile workflow methodology
- Everyone did amazing work on the style guides.
- The team only did work when a ticket was issued
- Detailed user stories was created during the meetings with the external stakeholders
- We need to follow the Gitworkflow more carefully and adhere to the procedures set out with regards to rebasing
- Commit messages need to be more descriptive
- Testing need to be done after each feature and before any reviewing is actioned

    * Your git workflow, style guides, commit guides, etc
    * What did you learn from the process
    * What were key takeaways from stand ups, code reviews, etc
    * Writing tests
    * Link to your trello board, discuss completed tickets

## Any non-MVP tickets (optional)

 - Code refactorings
 - Performance Optimizations
 - Additional features

## Notes from your Sprint Retro
  
- The team worked well together, there where effective communications and team work

- Everyone in the team had great soft skills

- Everyone on the team followed the Agile methodology

- The team leverage off each others strenghts

- The user interface visuals was very well planned out and thought thru

- The team did pairing work on all the different features and components

- The team had one vision on styling

- Over all the team work in harmony and there was a great vibe in the team

- Morning standups
    * In the future include an overview of how the frontend developing team and the backend devolping team is doing
    * Discuss more in detail any additional interactions that is needed between front and back end teams
    
- Setting up a moch data base
    * For future projects we need to setup a moch data base with moch data
    * We need to better understand what data the API is giving us back vs what we expected to get back

## What additional features do you plan to add, how do you plan to implement those features?

- Additional features
     - [ ] Adding a login page with authentication
     - [ ] Adding multiple users
     - [ ] Adding multiple cities to the itinerary
     - [ ] Adding multiple dates to the itinerary
     - [ ] Email/google calendar or share with friend options to itinarary
     - [ ] Swapping around activities on the itineratry time line
     - [ ] Clicking on the icons on the itinaray page to give you similar option to change the activity
     - [ ] If time is already allocated to an activity the user is informed.

    * Future refactoring?
    * Additional dev ops considerations?
    * UI/UX additions?



