# 05 Third-Party APIs: Work Day Scheduler
**Deployed link: https://brento20.github.io/dailyPlanner/**

**GitHub Repo Link: https://github.com/Brento20/dailyPlanner**

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria


|element| status |
|--|--|
|Page loads, linked on GitHub| Done |
|Time blocks display with time, text area and save icon|Done|
|Time is displayed from moment.js|Done|
|You can enter text and save it to local storage|Done|
|Entries remain after refreshing the page |Done|
|Time blocks are color coded for present/future|Still working on|
|Final product closely matches provided screenshots|Done|


## Logic Plan

1. Build the basic time slot containers.
2. Using moment.js fill the header with the current date.
3. Build a function to change the colour of the time block according to the time.
      - try something like if time >= current time set colorXXX else if time == current time set colorYYY. Have the default color be grey so it only changes if it meets these conditions.
4. Build a text input for tasks, have the input set to local storage as an array like (time, comment).
5. Get local storage to fill the text box on load.


## Images of application