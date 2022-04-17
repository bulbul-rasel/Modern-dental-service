import React from 'react';

const Blog = () => {
    return (
        <div id='blog' className='container row'>
            <h2 className='text-center text-info'>Question & Answer</h2>

            <div className='col-sm-12 col-md-6 col-lg-6'>
                <h4>1. Difference between authorization and authentication?</h4>
                <h5>Authorization:</h5>
                <p>It determines that users can and cannot access.</p>
                <p>It transmits info using an Access Token.</p>
                <p>Verifies access through terms and policies.</p>

                <h5>Authentication:</h5>
                <p>IT determines that users are who can be access.</p>
                <p>It transmits info using an ID Token.</p>
                <p>It verifies access through password, answer and security question.</p>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-6'>
                <h4>2. Why are you using firebase? What other options do you have to implement authentication?</h4>
                <p>Firebase provides a ideal way to integrate with Google analytics  and perceptive information can be generated through it. The authenticate data is useful in improving user retention for  enhancing the user engagement rate for an application.</p>
                <p>There are lots of authentication system like,Parse,Back4app,Kuzzle AWS Service Provider, OpenIAM GSuit,IBM Cognos etc.</p>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-6'>
                <h4>3. What other services does firebase provide other than authentication?</h4>
                <p>There are many service Firebase provides:</p>
                <p>Firebase provides us web hosting service, We can use firebase as Cloud Storage service, Firebase provides us Google Analytics as well ass Prediction service also. It has cloud Messaging service. Firebase does Remote Configuration also</p>
            </div>


        </div>
    );
};

export default Blog;