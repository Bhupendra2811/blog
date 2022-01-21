// import React from "react";
// import { getPizzaById, updatePizza } from "../actions/pizzaActions";

// import { useEffect, useState } from "react";
// export default function Editblog({ match }) {
//     const [title, settitle] = useState("");
//     const [img, setimg] = useState("");
//     const [paragraph, setparagraph] = useState("");
    
//   return (
//     <div>
//       <h2>Edit Blog</h2>
//         <div>
//           <form onSubmit={editblog}>
//             <input
//               type="text"
//               className="form-control mb-2 mr-sm-2"
//               placeholder="Title"
//               required
//               value={title}
//               onChange={(e) => {
//                 settitle(e.target.value);
//               }}
//             />
//             <input
//               type="text"
//               required
//               className="form-control mb-2 mr-sm-2"
//               placeholder="decription"
//               value={paragraph}
//               onChange={(e) => {
//                 setparagraph(e.target.value);
//               }}
//             />
//             <input
//               type="text"
//               required
//               className="form-control mb-2 mr-sm-2"
//               placeholder="imageurl"
//               value={img}
//               onChange={(e) => {
//                 setimg(e.target.value);
//               }}
//             />
//             <button
//               className="btn mt-5"
//               type="submit"
//               style={{ float: "left" }}
//             >
//               Edit Pizza
//             </button>
//           </form>
//         </div>
//       )
//     </div>
//   );
// }