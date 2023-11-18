import React from 'react';
import '../App.css';
import biryani from '../assets/biryani.jpg';
import pasta from '../assets/pasta.jpg';
import pizza from '../assets/pizza.jpg';
import person1 from '../assets/person1.jpg';
import person2 from '../assets/person2.jpg';
import person3 from '../assets/person3.jpg';
import { useNavigate } from 'react-router-dom';


function LandingPage(){
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/food`; 
      navigate(path);
    }
    return(
        <div className="App">
        <div className="App-header">
  <div className="block">
        <div className="hi">
          <h1 className="title">Discover a World of Culinary Delights, One Reservation at a Time.</h1>
          <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam ac tortor vitae purus faucibus ornare. Volutpat est velit egestas dui id ornare arcu. Aliquam purus sit amet luctus venenatis lectus magna fringilla. Mattis aliquam faucibus purus in massa tempor. Feugiat in fermentum posuere urna nec. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Ut etiam sit amet nisl purus in mollis nunc sed. Nisl purus in mollis nunc sed id. Nec ullamcorper sit amet risus. Tellus cras adipiscing enim eu turpis. Nulla aliquet enim tortor at auctor urna.
           Non pulvinar Purus in mollis nunc sed.</p>
        </div>
        <div className="hi2">
        <button class="button-54" role="button" onClick={''}>BOOK A TABLE NOW!!!</button>
        <button class="button-54" role="button" onClick={routeChange}>ORDER FOOD NOW!!!</button>
        </div>
        </div>
        </div> {/* appheader  */}
        <div className="featured">
          <h1 className="featured-title">Featured Dishes</h1>
          <div class="row">
          <div class="col-4">
          <img src={biryani} alt="biryani" />  
              <h4>Chicken Biryani</h4>
          <div class="rating">
          </div>
          <p>Rs. 350</p>
          </div>
          <div class="col-4">
          <img src={pasta} alt="pasta" />  
          <h4>Pasta</h4>
          <div class="rating">
          </div>
          <p>Rs. 200</p>
          </div>
          <div class="col-4">
          <img src={pizza} alt="pizza" />  
          <h4>Pizza</h4>
          <div class="rating">
          </div>
          <p>Rs. 699</p>
          </div>
         </div>
         <div className="testimonial">
          <div ><h1 className="testimonial-title">Testimonials</h1></div>
          <div class="row-1">
          <div class="col-3">
            <p>Nice!</p>
            &#9733;&#9733;&#9733;&#9733;&#9733;<br/>
            <img src={person1} alt="person"/>
            <h3>May</h3>
          </div>
          <div class="col-3">
            <p>Best Food</p>
            &#9733;&#9733;&#9733;&#9733;&#9733;<br/>
            <img src={person2} alt="person"/>
            <h3>Binod</h3>
          </div>
          <div class="col-3">
            <p>Must try the Biryani</p>
            &#9733;&#9733;&#9733;&#9733;&#9733;<br/>
            <img src={person3} alt="person"/>
            <h3>Tony</h3>
          </div>
        </div>
         </div>
        </div>
      </div> /*app*/
    );
}
export default LandingPage;
