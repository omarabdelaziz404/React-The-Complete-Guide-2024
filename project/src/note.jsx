/* #EX 1
import React from 'react';
export function MainGoal(){
    return(
        <p>
          My main goal: Learn React in-depth and from the ground up
        </p>    
    );
}

function App() {
  return (
    <div id="app">
      <h1>Time to Practice!</h1>
      <p>
        Build a <code>&lt;MainGoal&gt;</code> component and insert it below this
        text.
      </p>
      <p>
        Your <code>&lt;MainGoal&gt;</code> component should simply output some
        text that describes your main course goal (e.g., &quot;My main goal:
        Learn React in great detail&quot;).
      </p>
      <p>
        <strong>Important:</strong> You custom component must contain the text
        &quot;My main goal:&quot;
      </p>
      <p>
        <strong>Also important:</strong> For the automatic checks to succeed,
        you <strong>must export</strong> your custom component function! Not as
        a default but simply by adding the <code>export</code> keyword in front
        of your function (e.g., <code>export function YOUR_COMPONENT_NAME</code>
        ).
      </p>

      <MainGoal />
    </div>
  );
}
export default App;
*/

/* #EX 2
import React from 'react';

export const userData = {
  firstName: 'Omar', // feel free to replace the name value
  lastName: 'Abdelaziz', // feel free to replace the name value
  title: 'Student', // feel free to replace the title value
};

export function User() {
  return (
    <div id="user" data-testid="user">
      <h2>
        {userData.firstName + " " +userData.lastName}
      </h2>
      <p>{userData.title}</p>
    </div>
  );
}

function App() {
  return (
    <div id="app">
      <h1>Time to Practice</h1>
      <p>Welcome on board of this course! You got this 💪</p>
      <User />
    </div>
  );
}

export default App;
*/

/* #EX 3
export function CourseGoal(props) {
  return (
    <li>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div id="app" data-testid="app">
      <h1>Time to Practice</h1>
      <p>One course, many goals! 🎯</p>
      <ul>
        <CourseGoal 
        title="Learn React"
        description="In-depth"
        />
        <CourseGoal
        />
      </ul>
    </div>
  );
}

export default App;
*/

/* #EX 4
import Card from './Card';

function App() {
  return (
    <div id="app">
      <h1>Available Experts</h1>
      <Card name="Anthony Blake">
        <p>
          Blake is a professor of Computer Science at the University of
          Illinois.
        </p>
        <p>
          <a href="mailto:blake@example.com">Email Anthony</a>
        </p>
      </Card>

      <Card name="Maria Miles">
        <p>
          Maria is a professor of Computer Science at the University of
          Illinois.
        </p>
        <p>
          <a href="mailto:blake@example.com">Email Maria</a>
        </p>
      </Card>
    </div>
  );
}

export default App;
*/

/* #EX 7
export const user = {
  email: '',
  password: '',
  loggedIn: false,
};

function App() {
  function handleLogin() {
    user.email = 'test@example.com';
    user.password = 'test';
    user.loggedIn = true;
  }
 
  return (
    <div id="app">
      <h1>User Login</h1>
      <p>
        <label>Email</label>
        <input type="email" />
      </p>
 
      <p>
        <label>Password</label>
        <input type="password" />
      </p>

      <p id="actions">
        <button onClick={handleLogin}>Login</button>
      </p>
    </div>
  );
}
 
export default App
*/

/* #EX 8
export const user = {
    name: '',
  };
  
  function App() {
    function handleCreateUser(name) {
      user.name = name;
    }
  
    return (
      <div id="app">
        <h1>User Login</h1>
        <p>
          <label>Name</label>
  
          <input type="text" />
        </p>
  
        <p id="actions">
          <button onClick={() => handleCreateUser("omar")}>Create User</button>
        </p>
      </div>
    );
  }
  
  export default App;
*/

/* #EX 9
import { useState } from 'react';
 
export default function App() {
    const [price, setPrice] = useState(100);
    
    function handleClick() {
        setPrice(75);
    }
    
    return (
        <div>
            <p data-testid="price">${price}</p>
            <button onClick={handleClick}>Apply Discount</button>
        </div>
    );
}
*/

/* # Rendering Content Conditionally
          {!selectedTopic ? (
            <p>Please select a topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
*ternary operator ' {!selectedTopic ? ( ' checks whether selectedTopic is truthy or falsy
*If falsy, code inside the () after the ? will be executed ' <p>Please select a topic.</p> '
*else ' : ( ' (If truthy), it displays <div>

OR

{!selectedTopic && <p>Please select a topic.</p>} 
the && will output the value after it ' <p>Please select a topic.</p> ', if the conditon was true ' !selectedTopic ' 

OR

inside app before return
  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
   );
  }

*/

/* #EX 10
import React from 'react';
export default function App() {
    const [isDeleting, setIsDeleting] = React.useState(false);
    // initial value of isDeleting is set to false.
    // setIsDeleting is the function that updates the isDeleting state

    function deleteHandler() {
        setIsDeleting(true);
    }
    // When called, it sets isDeleting to true
    // indicating user is trying to delete and needs to be shown a confirmation message.
 
    function proceedHandler() {
        setIsDeleting(false);
    }
    // When called, it sets isDeleting to false
    // means the confirmation message will be hidden
    
  return (
    <div>
      {isDeleting && <div data-testid="alert" id="alert">
        <h2>Are you sure?</h2>
        <p>These changes can't be reverted!</p>
        <button onClick={proceedHandler}>Proceed</button>
        </div>}
      <button onClick={deleteHandler}>Delete</button>
    </div>    
  );
}
*/

/* #EX 11
import React from 'react';
export default function App() {
    const [highlighted, setHighlighted] = React.useState(false);
    
    function handleClick() {
        setHighlighted(isHighlighted => !isHighlighted);
    }
    
    return (
        <div>
            <p className={highlighted ? 'active' : undefined}>Style me!</p>
            <button onClick={handleClick}>Toggle style</button>
        </div>
    );
}
*/

/* # Tranform array of objects to array of jsx
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
OR
            <CoreConcept {...CORE_CONCEPTS[0]} />
OR
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))} 
*/

/* #EX 12
import React from 'react';
export default function Todo(props) {
    return <li>{props.text}</li>;
}

import React from 'react';
import Todo from './Todo';
import './styles.css';
 
export const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];
 
export default function App() {
    return (
        <ul>
          {DUMMY_TODOS.map(todo => <Todo text={todo} />)}
        </ul>
    );
}
*/