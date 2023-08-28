// import React from 'react';

// export const Exercise4 = () => {
    
//     const style_header = {
//         color:"white",
//         backgroundColor: "DodgerBlue",
//         padding: "10px",
//         fontFamily:"arial"
//     };
//     return (
//         <div>
//         <h1 style={{color: 'red', backgroundColor: 'lightblue'}}>Hello, excercise4!</h1>
//         <p>this is a paragraph.</p>
//         <a href="https://exmple.com">link</a>
//         <form>
//         <input type="text" placeholder="enter text"/>
//         <button type="submit">submit</button>
//         </form>
//         <img src="image.jpg" alt="example"/>
//         <ul>
//         <li> item 1</li>
//         <li> item 2</li>
//         <li> item 3</li>
//         </ul>
//         </div>
//     );
// };

//exercise 3

import React from 'react';
import './Exercise4.css'; // Import the CSS file

export const Exercise4 = () => {
  return (
    <div>
      <h1 style={style_header}>Hello, Exercise4!</h1>
      <p className="para">This is a paragraph.</p> {/* Apply the CSS class */}
      <a href="https://example.com">Link</a>
      <form>
        <input type="text" placeholder="Enter text" />
        <button type="submit">Submit</button>
      </form>
      <img src="image.jpg" alt="Example" />
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
};

const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};





