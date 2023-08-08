# Proficiency demonstration

The purpose of this repository is to provide a sample codebase that will allow you to demonstrate proficiency in Angular and Javascript. In all cases, please let your pairing partner know what you are thinking as much as possible, and feel free to ask questions! This is not intended as a demonstration of how much you have memorized, but how well you can code, troubleshoot and reason. Looking things up is OK, just let your pairing partner know what you are looking up when you do so. 

Please note that it is not expected that you will get through the entire thing, and you may be asked to skip some parts of or entire sections. This is not a reflection of anything other than time constraints.

## ANGULAR 

1. Navigate to the `/angular-proficiency` folder  
2. Create a new branch for this test  
3. How would you ensure that everyone would use the same version of npm when running the app? (18.10.0) Why would this be important?
4. Install necessary NPM modules and start Angular. You can view the application at http://localhost:4200.
5. Create a new user and log in.

### PART I - Bug fixes

1. When you navigate to the New Article page, there's a visual bug that duplicates the menu. Please fix the error.
2. On the New Article page, there are console errors. Please identify and fix the root problem so the errors do not occur.

### PART II - New feature

The application currently has the ability for users to "favorite" articles and display the articles that they've favorited. We'd like to add a new page where author users can see which of their posts that have been favorited, as well as how many times that article has been favorited.

1. Make a new route "/profile/{user}/favorited" that copies the layout of the existing articles pages (e.g., /profile/{user}) and shows up as a tab on the profile screen.
2. Add a new method to the Articles service that returns the user's articles filtered to those that have been favorited.
3. Display just the title and the number of favorites on the page (design is not super important, just make it look decent).

### PART III - Enhancement

The application profile settings screen currently has no validation.

1. For frontend validation, please make all fields required.  
2. The username field should require at least 3 characters.
3. The password field should meet basic security requirements.
4. The email field should require a valid email address.

## JAVASCRIPT

This is a simple toy project to display your Javascript proficiency. In between each step, you should refresh the page to make sure things are working as you expect. If you have any questions or comments, please make them known.

1. Stop the Angular server. Navigate to `/js-proficiency`. Install the necessary NPM modules and start the server with `npm run serve`. You can view the application at http://127.0.0.1:4200. You will not need to worry about anything else NPM related for this portion.
2. Before looking at the page, examine the code in index.html and main.js for validity. If you find any errors, fix them.
3. Move the reference to main.js to the bottom of the head tag. Make any necessary changes to the code to ensure it runs.
4. 
    a. WHAT: The div identified as theFirstObject should be copied to the div with an ID of target. The object should have the same appearance in both places  
    b. WHEN: The button titled "Copy first object" is clicked  
    c. HOW: Listen for and bind the button click event in index.js   
    d. WHERE: All logic should be in the buttonHandler method "makeFirstChange"  
5. 
    a. WHAT: The div identified as theSecondObject should be moved to the div with an ID of target, before the first object in the DOM  
    b. WHEN: The button titled "Move second object" is clicked  
    c. HOW: Listen for and bind the button click event in index.js  
    d. WHERE: All logic should be in buttonHandler method "makeSecondChange"  
6. Remove changeText function invocation in index.js.
7. 
    a. WHAT: Change the footer text to the value of the footerText variable immediately. Also make a call to https://meowfacts.herokuapp.com, and change the contents of the H1 to the contents of the 'data' variable from the response.  
    b. WHEN: The button titled "Change text" is clicked  
    c. HOW: Listen for and bind the button click event in index.js  
    d. WHERE: All logic should be in the buttonHandler method "makeThirdChange"  

At the end of the session, please commit all changes and push your branch to the repo.
