# Live Link:
[Live Link to Pollidify](https://warm-crag-62563.herokuapp.com)

# Pollidify
Pollidify is a global web application that allows users to create and respond to polls.

# Background and Overview
Ever wondered what everyone's stance is on a specific issue? Well now you can. With Pollidify you can create polls that everyone 
around the world can participate. You can visualize your statistics on each poll you create, with in-depth analysis.

Pollidify is a minimal application created in one week. 

# Functionality & MVP
* user authentication
* creating Polls
* participating in polls
* as the owner of the poll, owners can view statistical analysis
* automated deletion of polls past capacity
* automated closure of polls past expiration date
* production README

**Bonus features**
* notifications
* private poll vs. public poll results
* categories/tags
* demographics
* subscriptions via notifications

# Technologies & Technical Challenges
**MERN stack**
* MondoDB
* React/Redux
* Javascript
* Express 
* Node

**Technical Challenges:**
* Displaying statistical data in a graphical and intuitive way
* Ensuring all polls are anonymous and one-time answer only
* Calculating all votes for a specific poll
* Automatic deletion of expired polls

# Group Members and Work Breakdown
**Chang Ho Lee, Asaf Mohammad, Pavel Aparcana**

**Day 1**
* Discuss structure and basic functions of application - **All**
* Create `users` model and validations - **Asaf**
* Create `users` routes and passports - **Pavel**
* Create `root` component and React skeleton - **Chang**
* Create `session` util and `route` util in frontend - **Chang**
* Create `session` actions in frontend - **Asaf**
* Create `session` reducer and `session-errors` reducer in frontend - **Pavel**
* Create `login-form` component - **Asaf**
* Create `signup-form` component - **Pavel**
* Create `main` component and `nav` component - **Chang**

**Day 2**
* Discuss styling of `landing-page` and `user-auth` pages - **All**
* Style `login` and `signup` forms - **Pavel**
* Style `navbar` - **Asaf**
* Style `landing-page` - **Chang**
* Style `signup` and `login` animations to incorporate them into the `landing-page` - **Pavel**
* Create `polls` model, routes, and actions - **Asaf**
* Create `polls` validations and reducers - **Chang**
* Create `choices` routes - **Asaf**
* Create `choices` model and validations - **Chang**

**Day 3**
* Create `choice` reducer - **Chang**
* Create `choice` util - **Asaf**
* Create `choice` actions - **Pavel**
* Create and style `poll-index` components - **Asaf**
* Create and style `poll-show` components - **Pavel**
* Create and style `user-polls` components - **Chang**
* Create `poll-form` components - **Chang**
* Create `choices` components - **Asaf**
* Add functionality to `navbar` and styling - **Pavel**
* Create `poll-show-choices` container - **Pavel**

**Day 4**
* Style `new-poll-form` - **Pavel**
* Create `votes` model and utils - **Asaf**
* Create `votes` actions and reducers - **Pavel**
* Create `voted-polls` components - **Chang**
* Add redirect functionality to `votes` - **Asaf**
* Create `choice-list` animations - **Pavel**
* Begin `stats-show-page` skeleton components - **Chang**
* Add functionality to `navbar` and styling - **Pavel**
* Debugging - **ALL**

**Day 5**
* Add `polls` limitations and debugging - **All**
* Create delete routes for `poll` and associated cascade deletes and debugging - **All**

**Day 6**
* Create `stats` graph for polls - **Asaf, Chang**
* Edit limitations on `polls` - **Asaf, Chang**

**Day 7**
* Styling - **All**
* Debugging - **All**

**Day 8**
* Create live `expires-in` timer for polls - **Pavel**
* Styling - **All**
* Debugging - **All**

**Day 9**
* Refactor global `state` for application - **All**
* Styling - **All**
* Debugging - **All**
