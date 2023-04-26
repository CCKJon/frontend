import axios from 'axios'
import React from 'react'
// use a context to have a data store that users can read from and modify within my app.js where the todo.js is a consumer of that context
//
function TodoItem(props) {
    const deleteTodoHandler = (title) => {
        axios.delete(`http://localhost:8000/api/todo/${title}`)
            .then(res => console.log(res.data))
    }


    return (
        <div>
            <p>
                <span style={{fontWeight: 'bold, underline'}}>
                    {props.todo.title} : </span> {props.todo.description}

                    <button 
                    onClick={() => deleteTodoHandler(props.todo.title)} 
                    className='btn btn-outline-danger my-2 mx-2' 
                    style = {{'borderRadius': '50px',}}>
                        X
                    </button>
            </p>
            
            <hr/>
        </div>
    )
}
export default TodoItem


// import axios from "axios";
// import React from "react";

// function TodoItem(props) {
//   const deleteTodoHandler = (title) => {
//     axios
//       .delete("http://localhost:8000/api/todo/${title}")
//       .then((res) => console.log(res, res.data));
//   };
//   return (
//     <div>
//       <div>
//         <span style={{ fontWeight: "bold, underline" }}>
//           {props.todo.title} :{" "}
//         </span>{" "}
//         {props.todo.description}
//         <button
//           onClick={() => deleteTodoHandler(props.todo.title)}
//           className="btn btn-outline-danger my-2 mx-2"
//           style={{ borderRadius: "50px" }}
//         >
//           <svg
//             width="1em"
//             height="1em"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             fill="currentColor"
//             class="ui-svg-inline"
//           >
//             <path d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
//           </svg>
//         </button>
//         <hr></hr>
//       </div>
//     </div>
//   );
// }

// export default TodoItem;
