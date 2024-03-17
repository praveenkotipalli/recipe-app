import React from 'react';
import './About.css';
import GitLogo from "../../assets//GitHub_Invertocat_Logo.svg.png";
import Linkedin from "../../assets//LinkedIn_icon.svg.png";
import Gmail from "../../assets/Gmail_icon_(2020).svg.png"
const About = () => {
  return (
    <div className="about-container">
      <div className="animated-background"></div>
      
      <div className="content">

        <h1>How our Recipe App works</h1><br></br><br></br>
        
        <p className='para'>
        Welcome to your brand new kitchen companion - the Recipe App! Whether you're a seasoned chef or just starting out, this app makes finding the perfect recipe a breeze. Here's how to get the most out of it:<br></br><br></br>

        <b>1. Finding Inspiration:</b>

    Search by Ingredient: Do you have a fridge full of leftovers and no idea what to make? No problem! Enter the ingredients you have on hand in the designated search bar. You can add multiple ingredients to broaden your options.
    Search by Meal Type: Craving a hearty pasta dish or a light and refreshing salad? Simply select your desired meal type from the provided options.<br></br>

<b>2. Exploring Your Options:</b>

    Recipe List: The search will display a list of recipes that match your criteria. Each recipe will have a title, a brief description, and potentially an image to whet your appetite.
    Selecting a Recipe: Click on the recipe title that catches your eye to get all the details.<br></br>

<b>3. Diving into the Recipe:</b>

    In-depth Information: The detailed recipe page provides all the information you need to create your culinary masterpiece. This includes:
        A complete list of ingredients with quantities.
        Step-by-step instructions.<br></br><br></br>


Ready to get cooking?  Open the Recipe App and embark on a delicious culinary journey!  With its user-friendly interface and vast recipe database, you'll be whipping up amazing meals in no time.
        </p>
        <div className='contactWrapper'>
        <h1>Contact Us</h1>
        <div className='iconsWrapper' >
          <a href="https://github.com/praveenkotipalli">
            <img className="iconWrapper" src={GitLogo} alt='git'/> 
          </a>
          <a href="https://www.linkedin.com/in/praveenkumarkotipalli/">
          <img className="iconWrapper" src={Linkedin} alt='Linkedin'/>
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
          <img className="iconWrapper" src={Gmail} alt='Gmail'/>
          </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
