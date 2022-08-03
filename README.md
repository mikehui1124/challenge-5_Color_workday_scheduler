# challenge-5_Color_workday_scheduler

This is a html and JavaScript source-code for a Work Day Scheduler which is a simple browser calendar that allows a user to save events for each hour of the day to localStorage. On refreshing the application, the saved events will remain in the corresponding time blocks. The app is powered by jQuery.js and Bootstrap, time validations will use the ‘.isCompare’ method from Moment.js API extensively. 

The completed html and JavaScript source-code are available in the following Github repo as Master branch @, https://github.com/mikehui1124/challenge-5_Color_workday_scheduler .
The deployed URL of webpage is available in Github Page @ 
 https://mikehui1124.github.io/challenge-5_Color_workday_scheduler/

•	index.html

•	script.js

•	style.css


Brief description

This calendar consists of a series of time blocks covering daily business hours (9am – 6pm). Color-code of a time block reflects whether it sits at the same hour, before or after the current time-hour. When user fills a time block with text content, he can press the Save Button for that hour to save the text to localStorage, under a specified “hour key” string. 
On refreshing the page, the saved events will remain in the corresponding time blocks until it is updated and saved by user.

Snapshot of the Calendar Application

![image](https://user-images.githubusercontent.com/105307687/182616032-7c4e60b6-83ac-4810-8375-1a826c7811a2.png)


Acceptance criteria

The application will meet the following criteria expected by an employee planner,

-	Opening the daily planner, the current date is displayed at the top of the calendar
-	Scrolling down the page, I am presented with time blocks for standard business hours (9am to 6pm)
-	When viewing time blocks for that day, each time block hour is color-coded to indicate whether it is in the past, present or future.
-	When clicking into a time block, I can enter an event in the text box.
-	When clicking a save button for that time block, the text for that event is saved in local Storage.
-	When refreshing the page, the saved events persist.





Validations of Time Block Content before Saving 

1)	Opening the planner, user has to input text content in a time block before he can save the text content for that hour. Attempt to press the Save Button directly without input text will prompt the user as follows, until the time block is properly filled in. 

![image](https://user-images.githubusercontent.com/105307687/182616130-f2ae7d6a-0b45-4faf-9669-579591a2a00e.png)

2)	In a similar manner, when user press Save Button for certain business hour, the text content for the corresponding time block will be saved to localStorage under a specified “hour key” string. Time content in the other time blocked will not be saved under the corresponding Save Button is pressed.


Responsive Layout depending on Viewport size

BootStrap columns are set up with a mobile-first layout, where size of time block is maximised and the Save Button shrinks. When switch to a large screen viewport, Save Button enlarges responsively and the time block reduces in size. This is demonstrated as follows,




Layout for a mobile viewport

![image](https://user-images.githubusercontent.com/105307687/182616217-c9c03b32-c45e-485b-ac54-c4a9c8bd16f3.png)




Layout for Large Screen Viewport

![image](https://user-images.githubusercontent.com/105307687/182616284-af65dcae-12da-476a-8b30-4f7e2152413d.png)





