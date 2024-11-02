Portfolio Website - React JS Website
A well designed portfolio to showcase your skills and achievements. A beautiful and functional portfolio with smooth animations. Built using React JS, Sanity, Framer-motion.
Portfolio Website
Explore the docs »

View Demo · Report Bug · Request Feature

Table of Contents
About The Project
Home Page Skills Page Contact Page

Website is completely built using the React JS and Sanity knowledge. No need to be proficient to understand or change the content, basic understanding is enough fill the gaps.

It is completely responsive works fine on most of the devices and highly interactive. Data can be changed using a Content Management Service(CMS), Sanity. Because of this data can be changed anytime even after deployment.

(back to top)

Built With
React.js
Sanity
SCSS
Netlify
(back to top)

Getting Started
Getting started, to avoid hassle at a later part, go ahead and create an account in Sanity and follow the displayed commands!

Prerequisites
Create a folder named **backend_sanity" and navigate the terminal to it.
cd backend_sanity
Install the sanity client
npm install -g @sanity/cli
Login using your preferred way!
Enter the project name, press Y and use the default settings.
Now use the command
sanity start
Now run the following in the terminal
sanity manage
Your project dashboard page pops up in your browser
These are the most important steps


npm install
Replace the Backend Sanity file contents with your sanity file contents (entire folder).
Run the command and a page with your sanity documents appears.
Make sure you are in the right folder path in the terminal.

sanity start
Add your details to the necessary documents, refer Sanity for better understanding.
Create a .env file in the Frontend React directory with the following
REACT_APP_SANITY_PROJECT_ID= "your project id"
REACT_APP_SANITY_TOKEN= "your api token"
Run the final command in the Frontend React.
Make sure you are in the right folder path in the terminal.

npm start
Your website is up and running. Make the necessary changes and deploy it.
To add or change necessary documents in Sanity Studio refer the Sanity Docs, it is very intuitive and easy.
(back to top)

Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
(back to top)

License
Distributed under the MIT License. See LICENSE.txt for more information.

(back to top)


Project Link: https://ashish-behera-portfolio.netlify.app/

(back to top)
