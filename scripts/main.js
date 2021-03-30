console.log('yum, yum, yum');

//import { ddSelection } from "./snacks/DropdownSelectTopping.js";
import { LoginForm } from "./auth/LoginForm.js";
import { RegisterForm } from "./auth/RegisterForm.js";
import { NavBar } from "./nav/NavBar.js";
import { SnackList } from "./snacks/SnackList.js";
import { SnackDetails } from "./snacks/SnackDetails.js";
import { Footer } from "./nav/Footer.js";
import {
	logoutUser, setLoggedInUser, loginUser, registerUser, getLoggedInUser,
	getSnacks, getSingleSnack, getToppings, useSnackCollection, getSnackToppingsRelationships
} from "./data/apiManager.js";

const applicationElement = document.querySelector("#ldsnacks");

//login/register listeners
applicationElement.addEventListener("click", event => {
	event.preventDefault();
	if (event.target.id === "login__submit") {
		//collect all the details into an object
		const userObject = {
			name: document.querySelector("input[name='name']").value,
			email: document.querySelector("input[name='email']").value
		}
		loginUser(userObject)
			.then(dbUserObj => {
				if (dbUserObj) {
					sessionStorage.setItem("user", JSON.stringify(dbUserObj));
					startLDSnacks();
				} else {
					//got a false value - no user
					const entryElement = document.querySelector(".entryForm");
					entryElement.innerHTML = `<p class="center">That user does not exist. Please try again or register for your free account.</p> ${LoginForm()} <hr/> <hr/> ${RegisterForm()}`;
				}
			})
	} else if (event.target.id === "register__submit") {
		//collect all the details into an object
		const userObject = {
			name: document.querySelector("input[name='registerName']").value,
			email: document.querySelector("input[name='registerEmail']").value,
			//I added code below... all new registered users should not have admin rights
			isAdmin: false
		}
		registerUser(userObject)
			.then(dbUserObj => {
				sessionStorage.setItem("user", JSON.stringify(dbUserObj));
				startLDSnacks();
			})
	}
})

applicationElement.addEventListener("click", event => {
	if (event.target.id === "logout") {
		logoutUser();
		sessionStorage.clear();
		checkForUser();
	}
})
// end login register listeners

// snack listeners
applicationElement.addEventListener("click", event => {
	event.preventDefault();

	if (event.target.id.startsWith("detailscake")) {
		const snackId = event.target.id.split("__")[1];
		getSingleSnack(snackId)
			.then(snackObj =>{
				getToppings(snackId)
				.then (snackToppings =>{
				console.log(snackToppings);
				snackToppings
				showDetails(snackObj, snackToppings);
			})
		})
	}
})

applicationElement.addEventListener("click", event => {
	event.preventDefault();
	if (event.target.id === "allSnacks") {
		showSnackList();
	}
})

const showDetails = (snackObj, snackToppings) => {
	const listElement = document.querySelector("#mainContent");
	listElement.innerHTML = SnackDetails(snackObj, snackToppings);
}
//BELOW is a work in progress!!!!!!!!!!!!!!
// applicationElement.addEventListener("click", event => {
// 	if (event.target.id === "allSnacks") {
// 		showSnackList();
// 	}
// })

//let bob = dropdownSelectTopping()



//end snack listeners

const checkForUser = () => {
	if (sessionStorage.getItem("user")) {
		setLoggedInUser(JSON.parse(sessionStorage.getItem("user")));
		startLDSnacks();
	} else {
		applicationElement.innerHTML = "";
		//show login/register
		showNavBar()
		showLoginRegister();
	}
}

const showLoginRegister = () => {
	//template strings can be used here too
	applicationElement.innerHTML += `${LoginForm()} <hr/> <hr/> ${RegisterForm()}`;
}

const showNavBar = () => {
	applicationElement.innerHTML += NavBar();
}

const showSnackList = () => {
	getSnacks().then(allSnacks => {
		const listElement = document.querySelector("#mainContent")
		listElement.innerHTML = SnackList(allSnacks);
	})
}

const showFooter = () => {
	applicationElement.innerHTML += Footer();
}

const startLDSnacks = () => {
	applicationElement.innerHTML = "";
	showNavBar();
	applicationElement.innerHTML += `<div id="mainContent"></div>`;
	showSnackList();
	showFooter();

}

// const displayFunction = () => {

// }

//EXPERIMENT IN PROGRESS
// GetSelectedTextValue = () => {
//         var ddlSelected = document.getElementById("ddTops4");
//         //var selectedText = ddlSelected.options[ddlSelected.selectedIndex].innerHTML;
//        // var selectedValue = ddlSelected.value;
// 		return ddlSelected
//         //alert("Selected Text: " + selectedText + " Value: " + selectedValue);
//     }

// let ddSelection44 = GetSelectedTextValue();


//create an iterable array of all of the snacks
// let alloftheSnacks = snackObject.forEach(element => {
// 	let array42= [];
// 	.push
	
// });



// assign an iterable array of snacks to a variable
//let alloftheSnacks = [1,2]//???????

// if (event.target.id.startsWith("detailscake")) {
// 	const snackId = event.target.id.split("__")[1];
// 	getSingleSnack(snackId)
// 		.then(snackObj =>{
// 			getToppings(snackId)
// 			.then (snackToppings =>{
// 			console.log(snackToppings);
// 			snackToppings
// 			showDetails(snackObj, snackToppings);
// 		})
// 	})
// }

//dropdown function
const ddSelection = (dropdownSelection) => {
const alloftheSnacks = useSnackCollection();
getSnackToppingsRelationships()
.then(relationships =>{
	console.log(relationships)
	const filteredRelationships= relationships.filter(rel => rel.toppingId === parseInt(dropdownSelection))
const snacksArray = filteredRelationships.map(r => r.snack)
	//filter all snacks against the filtered relationships array
	const filteredSnacks = alloftheSnacks.filter(snack => filteredRelationships.some(rel => rel.snackId === snack.id))
	// debugger
	//pass that new filtered array into the snack list below
	const listElement = document.querySelector("#mainContent")
		listElement.innerHTML = SnackList(snacksArray);
		//refactor section using a map on the filter array
})


 for (const snackObject of alloftheSnacks) {
         if(snackObject.toppings.includes(dropdownSelection)){
            {
               let applicableSnackListHtml =`${snackObject} <br>`;
                 return applicableSnackListHtml;
             }
         }
     }
 }

checkForUser();

// when a selection is made it should return a list of snacks that 
// contain the selected topping
const chosenElement = document.querySelector("#ddTops4")
chosenElement.addEventListener("change", (event) => {
	if(event.target.id === "ddTops4") {
		const chosenValue = (event.target.value);
		ddSelection(chosenValue, allSnacks)
	}
})




//EXPERIMENT IN PROGRESS
// let ddSelect = applicationElement.addEventListener("click", event => {
// 		if (event.target.id === "allSnacks") {
// 	 		showSnackList();
// 	 	}
// 	 })

//EXPERIMENT IN PROGRESS
//ddSelection(ddSelection44, allSnacks)


