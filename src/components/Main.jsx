import Users from "./sub-components/Users";
// import Modal from "./sub-components /Modal";

import  "../styles/main.css"
 export default function Main() {
   const data = [
     { name: "Suldee", score: 10 },
     { name: "Bataa", score: 8 },
     { name: "Suhee", score: 12 },
     { name: "Sharva", score: 15 },
   ];
   return (
     <table class="table">
       <thead>
         <tr className="tr">
           <th scope="col">#</th>
           <th scope="col">Name</th>
           <th scope="col">Score</th>
         </tr>
       </thead>
       <tbody className="tbody">
         {data.map((unit, index) => {
           return (
             <Users name={unit.name} score={unit.score} index={index + 1} />
           );
         })}
       </tbody>
       <button className="PlayBtn">Play</button>
       {/* <Modal /> */}
     </table>
   );
 }
