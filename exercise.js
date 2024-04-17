const url = 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '22663b8fc7msh7dacac9c433d8dap166458jsn600c36c6ab90',
		'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
	}
};


 const exercise = (query) => {
 fetch('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle='+ query ,options)
 .then((response)=>{return response.json()  }  )
 .then ((data)=>{console.log(data[0])  


	muscle.innerHTML = data[0].muscle
difficulty.innerHTML = data[0].difficulty
equipment.innerHTML = data[0].equipment
instructions.innerHTML = data[0].instructions
type.innerHTML = data[0].type
 } )


 };
 submit.addEventListener("click", (event) => { 
	event.preventDefault()
	exercise(query.value)
 })
exercise("biceps")
/*muscle group targeted by the exercise. Possible values are:

abdominals
abductors
adductors
biceps
calves
chest
forearms
glutes
hamstrings
lats
lower_back
middle_back
neck
quadriceps
traps
triceps*/