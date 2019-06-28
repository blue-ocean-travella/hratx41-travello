
# ![alt text](https://github.com/blue-ocean-travello/hratx41-travello/blob/master/travella.png)   Travel done the way you like it!

## Travella Contributors:
Contributor | Contributor
--- | ---
![pic:](https://avatars1.githubusercontent.com/u/42327915?s=400&v=4)|![pic:](https://avatars1.githubusercontent.com/u/42365770?s=400&v=4)
**[Fawnie du Plessis](https://github.com/fduplessis01)**|**[Gladys Benitez](https://github.com/gladysbenitez)**
![Pic:](https://avatars1.githubusercontent.com/u/10273125?s=400&v=4)|![pic:](https://avatars2.githubusercontent.com/u/46075198?s=400&v=4)
**[Jimmy Hung](https://github.com/jmhung)**| **[David Guenther](https://github.com/DcguentherATX)**
![pic:](https://avatars2.githubusercontent.com/u/39739180?s=400&v=4)|![pic:](https://avatars0.githubusercontent.com/u/46331990?s=400&v=4)
**[Maria Navarro](https://github.com/MariaJose)**|**[Louis Rangel](https://github.com/lui914)**
col 2 is centered


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

- 
  * Why
  * What
  * How
  
- 
  * Why
  * What
  * How
  
- 
  * Why
  * What
  * How
  
  
    * Why was it a challenge
    * What did you learn?
  
## Video Demo / Screen shot walkthrough of the app 

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

## Workflow and Key lessons from your team - specifically those related to: Agile, CI/CD, testing, working with external stakeholders, ticketing, and user stories.

    * Your git workflow, style guides, commit guides, etc
    * What did you learn from the process
    * What were key takeaways from stand ups, code reviews, etc
    * Writing tests
    * Link to your trello board, discuss completed tickets

## Any non-MVP tickets (optional)

 - Code refactorings
 - Performance Optimizations
 - Additional features
 - etc

## Notes from your Sprint Retro



## What additional features do you plan to add, how do you plan to implement those features?

    * Future refactoring?
    * Additional dev ops considerations?
    * UI/UX additions?

==================================================

# Welcome to Blue Ocean!
Congratulations and welcome to your first day at Blue Ocean! We are literally an underwater agile software development company.  

Let's begin our tour (don't blink!)...

Trello Board: https://trello.com/b/1Ry424Xs/hratx40-blue-ocean

How do you feel today? [![Build Status](https://travis-ci.com/hratx39-blue-ocean/deep-dive.svg?branch=master)](https://travis-ci.com/hratx39-blue-ocean/deep-dive)

## Your Agile Process
Expect this project to push you outside of your comfort zone. Welcome to your first day of life as a professional developer with a professional workflow.

You will be interacting with and playing various roles consistent with an agile work enviroment. We expect you to build software meeting each of our standards over the next week.

## Minimum requirements
Choose a project based around ideas presented during kick off

Create a backlog of tickets to work through during the week

Participate in a Sprint Planning and a Sprint Retrospective

Attend Daily Standup Meetings

Meet Acceptance Criteria determined by the user

Minimum of 60% test coverage. Tests include unit and integration tests.

Use contiuous integration and continous delivery practices

Deploy early, and often
Always have a working application in master
Create a professional quality Github repo including a Readme, Test Coverage, and Clean Code.

Atleast 50% of the tickets you worked on should be done with a pair. (Include co-authors in your commits)

We're here to help guide you through this process...and potentially throw some wrenches in as well ;)

## Get Started
The PM should clone the repo down to their machine, rimraf the .git, and the create a new repo **on this organization** and push the code up to that repo. The naming convention should follow this format: hratx##-projectname (where ## is your cohort number and projectname is the name of your project).

## Contribution Guidelines
We expect our new software engineers to start contributing to our codebase immediately. That doesn't mean we want maverick manatees swimming wild and munching on whatever looks tastiest with no concern for what other herdmates are doing. That means:
  1. No code shall be written except that which directly addresses a specific ticket.
  2. If you unexpectedly need code which falls outside the scope of your ticket, write a new ticket which requires that code.
  3. Blue Ocean is an agile workspace open to exploring any techniques which improve deliverable cycle speed. **We strongly encourage pair programming tickets with high point values.** Freeform collaboration between different teams on an as-needed basis is also encouraged.
  4. All commit messages and pull request messages shall include the number of the ticket for which the code was written. That makes tracking the meaning behind changes easier over time.
  5. If you have been working on something for several hours and you don't see an end soon in sight, double check the ticket parameters and make sure that you're still coloring within the lines. If that checks out, find a team member to talk with or work with about your ticket. Does it need to be broken into several smaller tickets? Is it too big to be worth working on at this stage of development? Are you approaching the ticket in a sane, process-driven way? Strongly consider pair programming the rest of the ticket if you check any of these boxes.
  6. Each pull request will need to pass tests on Travis CI before it can be reviewed for acceptance.

## Git Workflow
We take version control very seriously here at Blue Ocean. You will be expected to:
  1. Work on separate branches.
  2. Commit often.
  3. Write clear, concise, imperative-mood commit messages with leading ticket numbers. For example, "#21: Add list entry component".
  4. Submit pull requests when looking to merge with the master branch.
  5. **Always pull from master onto your working branch and fix conflicts before submitting a pull request to master.** 
  6. Use `git rebase` to create a linear commit history when creating a pull request. [See details here](https://www.atlassian.com/git/tutorials/merging-vs-rebasing "Merging v. Rebasing"). Additionally use squashing when you rebase to make commit history more readable.
  7. Approve pull requests only if you did not write any of the code submitted for review.
  
[More git workflow information](https://docs.google.com/document/d/1Kuvpv0rs9He9YRmbB_XVOfNKtakjioRAOjEUaGTqFtU/edit?usp=sharing)

## Codebase Overview
The deep-dive codebase is broken into two major pieces: the client and the server. The codebase has three separate package.json files and you will need to validate existing scripts and write new ones which are able to easily move between the top layer of the repo and the two lower layers to help you manage your Node packages. 

## Grading Tickets
We expect all of our software engineers to be capable of assessing the scope of a ticket and grade it on a point scale of difficulty where 1 point is small, 2 is a good size, 3 is large, 5 is huge, and anything above 5 needs to be broken into multiple tickets if possible. This will be tremendously helpful when assigning team members to tickets.

Here are some good practices for arriving at a specific grade when approaching a new topic. You do not need to be familiar with all of these techniques; pick one that works for you and matches with what the rest of your group would pick and stick to it.

### Consider the [Johari Window](https://www.communicationtheory.org/the-johari-window-model/ "Johari Window"). 
  1. If something is a known-known (you have done this thing before more than once), the process to create will be predictable and consistent. That may mean that is a smaller ticket.
  2. If something is a known-unknown (you haven't done it before but you know people who have and can consult them if you're stuck), the process to create will be predictable but inconsistent. That may mean a slightly larget ticket.
  3. If something is an unknown-known or unknown-unknown (you haven't done it before, you're not sure it can be done in the way you imagine, and no one on the team is familiar with how to do it), the creation process will be unpredictable and inconsistent. That will probably mean a larger ticket.
### Consider the breadth and depth of a given ticket. Tickets should be reasonably narrow and shallow.
  1. A broad ticket is one which touches many components.
  2. A deep ticket is one which adds a complex feature, changes many existing features, or adds many simple features within a single component.
  
[More ticketing information](https://docs.google.com/document/d/1i79WKUQuhc8nqrkZ-VHDbWCUL94H1WoIHBhV7K3Lbw8/edit?usp=sharing)


## Developer Operations
Now that you're at a real company with many people who might all need simultaneous but separate access to a single deployed instance, it's time to think about SSH operational security and how to manage multiple users through AWS. Not every member of your team will need access to either AWS credentials or to an SSH key-pair (such a broad distribution can create chaos) but you shoud avoid bottlenecking by wisely distributing access across team members.
  1. [Consult this page](https://docs.aws.amazon.com/IAM/latest/UserGuide/console.html) about setting up permissions from primary AWS account. You will need to set up Identity and Access Management on the primary account and then distribute login credentials to those members of your team who need them. **You should never share your personal credentials with anyone, including other members of your team.**
  2. For SSH access, [review this page](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html). Each team member with an SSH key will be responsible for its security and should review this article on best practices for setting up secure access from your local machine. **You should never share your personal credentials with anyone, including other members of your team.**
  3. You will use Travis CI to run tests, compare branches, and generally manage the quality of the code. [Take a look at their docs here](https://docs.travis-ci.com/user/for-beginners/).
