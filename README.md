## :seedling: **Getting Started with this project**

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Please, visit the following link for instructions on how to start it: [create-react-app](https://create-react-app.dev/

# **Project Preview**

**_Press play to watch a preview of this project_**

[video.webm](https://user-images.githubusercontent.com/98957023/179722414-69d4b9fc-28f0-4801-82f7-dc1de5c61cc8.webm)

---

# **Description**

This delivery is based on a technical test of a large company in the e-commerce sector, which is looking for front end developers in Barcelona. This project is a technical test: consuming API data, displaying it in a list, and implementing the detail of each item in the list.

The website you have to develop is an information website about Star Wars ships! The list of ships with the detailed information of each one of them will have to be shown.

# :mortar_board: **What I have learnt**

- Review components, useState, useEffect and React in general.
- useLocalStorage.
- useLocation.
- Practice React routes.
- Data consumption of an API with Axios, the concept of pagination.

---

# **Instructions**

## **_Level 1_** :star:

### ***Exercise 1***

To get started, the first thing you have to implement is the main screen in which the list of ships is displayed.

When you get the list of ships from the server, you will see that it returns a lot of interesting data about each ship, but on the main screen we will only show the most important data so as not to saturate it with information.

Data to display for each ship in the list:

- Ship name

- Model

![alt text](-------)
--- 
### ***Exercise 2***

In this exercise you have to create the sheet for each ship, showing all its details.

Don't worry about the "films" and "pilots" field for each ship for now, later we will show in the file of each ship its pilots and movies in which it appears. As you can see, this API, despite being free, is very complete, allowing us to make an informative Star Wars website, very interesting!

Just as there is this Star Wars API, there are many other themed ones, imagine how many different websites you can make to improve your portfolio!

The user will be able to access the details of each ship by clicking on each of the ships in the list:

![alt text](-------)


---

### ***Exercise 3***

GREAT!, you already have a basic version of the website created, in which the user can view the list of ships and see the file for each one by clicking on it.

The negative part, as you may have noticed, is that we have limited the website to 10 ships. If you look at the response of the API call, you will see that it indicates that there are a total of 36 ships, which we will show to the user on demand.

You must implement a button at the end of the list of ships , with the text "view more", which allows more ships to be obtained from the server and added to the list of ships shown to the user.

Bonus : it is preferable to implement an infinite scroll , which loads more ships as the user scrolls the web.

Help : You will need to make use of pagination, please refer to the project description if in doubt as there is a short description of pagination and the URL to be implemented.
---
### ***Exercise 4***

Change the styles as you see fit. The only criteria is that it looks as close as possible to the official Star Wars website.
---
### ***Exercise 5***

As we have done in the previous installments, we will implement a welcome home page , and through a button, it will be possible to access the main page of ships. For this, you must use React 's routing .

In addition to the access button on the main page, the user will have access to the main page via the upper navigation bar.

To this end, if you have not yet implemented the component, you will need to create the top navigation bar.
---

### ***Exercise 6***

You must implement a login and registration screen , where through local storage , since we do not have a user authentication server, they can register and log in later if they exist.

In this exercise showing the result of the console login/registration is sufficient.

