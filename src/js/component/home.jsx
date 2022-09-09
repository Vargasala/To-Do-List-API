// import React, {useState} from "react";

// //include images into your bundle
// //import rigoImage from "../../img/rigo-baby.jpg";





// //create your first component
// const Home = () => {

// 	const [toDo, setToDo] = useState ("")
// 	const [completeList, setCompleteList] = useState ([])
	
	
// const addToDo = (e) => {
		
// 	if (e.key === 'Enter') {
			
//    		setCompleteList = ([...completeList, toDo])
// 		setToDo ("")
// 		}
// 	}

// 	function eliminar (index) {

//     let newList = completeList.filter ((element, i) => {

// 		if (index !== i){
// 			return element;
// 		}

// 	})
// 	setCompleteList (newList);
//     }

// console.log (completeList)


// 	return (
// 		<div className="text-center">
			
// 		<input 
// 		type="text" 
// 		placeholder="What needs to be done?" 
// 		onChange={e => setToDo(e.target.value)} 
// 		onKeyDown={addToDo}
// 		value={toDo}
// 		/> 

// 			<div>
// 				<ul>
// 					{completeList?.map ((item, index) => (

// 					<li className="bg-warning" key={index}>
// 						{item}
// 						<span className="float-end" onClick={()=>eliminar}> x </span>
// 					</li>
					
// 					))}
// 				</ul>
// 			</div>

// 		</div>
// 	);
// };

// export default Home;



import React, {useState} from "react";
 

//create your first component
const Home = () => {
	const [todo,setTodo]=useState("")
	const [list,setList]=useState([])
	
	// const addToList = list.map("<li> list.[] </li>")

	//funcion al clikear "enter" hace que agrege a setList

	const handleKeyDown = (e) => {
		if (e.key === 'Enter'){
			setList([...list, todo])
			setTodo("")
		}
	}

	function eliminar (index){
		let newList = list.filter((element, i)=>{
			if (index !== i){
				return element;
			}
		})
			setList(newList);
		}
		
		console.log(list)


	// const deleteTodo = () => {
	// 	let newTodo = list.filter((item, index) => )
	// }

	return (
			<div className="bg-dark">
				{// ESTE PRIMER DIV TIENE COMO OBJETIVO CENTRAR EL TITULO Y EL INPUT
				 // DONDE SE COLOCAN LAS NOTAS QUE SE QUIEREN AGREGAR
				 // el "onChange" lo que hace es identificar CUALQUIER cosa que el usuario
				 // haga en el input, el "onKeyDown" lo que hace es que al clickear
				 // aplica la funcion "handleKeyDown", esta lo que hace es que si e.key === "Enter"
				 // Entonces actualiza el array
				}
				<div className="container w-50">
					<h3 className="todocolor "> Todo List</h3>
					<input type="text" 
					placeholder="What needs to be done?" 
					onChange={e=>setTodo(e.target.value)}
					onKeyDown = {handleKeyDown}
					value = {todo}
					/>
				</div>

				{// Hice rows y cols para "acomodar mejor la lista de todo"
				}
				<div className="row">
					<div className="col-1"></div>
					<div className="col-6">
						<ul className="justify-content-center text-center">
							

							{ list?.map((item, index) => (
								<li className="bg-warning" key={index}> {item}
									<span className="displayHover float-end" onClick={()=>eliminar(index)}> X</span>
								
								</li>
								))} 
						</ul>
					</div>
					<div className="col-5"></div>
				</div>
			</div>
		
	);
};

export default Home;


//v
