import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div>
            
            <h1 className='text-center mt-5'>Here Are Some Questions with Answers</h1>

    <div class="container  ">

        <div class="p-4 text">
            <div class="p-4 mb-4 ques">
              <h5>1.What is cors?</h5>
              <p>Ans:Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.</p>
            </div>
         
            <div class="p-4 mb-4 ques">
              <h5>2. Why are you using firebase? what other options do you have to implement authentications? </h5>
              <p>Ans :Firebase helps us develop high-quality apps, grow our user base.Each feature works independently, and they work even better together.Firebase provides tools to grow our app and business, for startups & global enterprises.
              Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
              </p>
            </div>
            <div class="p-4 mb-4 ques">
              <h5>3. How does the Private Route works ? </h5>
              <p>Ans :The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.  
              </p>
            </div>
           
            <div class="p-4 mb-4 ques">
              <h5>4.What is Node? How does Node work? </h5>
              <p>Ans : A node is a basic unit of a data structure, such as a linked list or tree data structure. Nodes contain data and also may link to other nodes. Links between nodes are often implemented by pointers.What does 
Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser.
    </p>
                
              
            </div>
           
    

        </div>
        </div>
        </div>
    );
};

export default Blog;