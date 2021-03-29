//GOAL:
// if a selected topping from the dropdown menu 
// is equal to one of the toppings that a snack contains
// display the snack or snacks in the html body at ("drop-select").innerHTML


//Function that returns a snack if it contains the selected topping
//Needs to be declared in main.js and figure out how to get the peramters put in correctly
//and figure out how to put the list into a <div>
export const ddSelection = (dropdownSelection, allSnacks) => {
    for (const snackObject of allSnacks) {
        if(snackObject.includes(dropdownSelection)){
            {
               let applicableSnackListHtml =`${snackObject}`;
                return applicableSnackListHtml;
            }
        }
    }
}


// const ddSelection = (dropdownSelection, allSnacks) => {
//     for (const snackObject of allSnacks) {
//         if(snackObject.includes(dropdownSelection)){
//             return true
//            // document.getElementById("drop-select").innerHTML
//         }
//     }
// }



// const showSnackList = () => {
// 	getSnacks().then(allSnacks => {
// 		const listElement = document.querySelector("#mainContent")
// 		listElement.innerHTML = SnackList(allSnacks);
// 	})
// }


// let joe = snackToppings.map(topping => {return topping.topping.name}).join(", ")

// if (joe


// const dropdownSelectTopping = (cslTops2) => {
//     for (i=0; i < thisArray.length; i++)
//     document.getElementById("place-toppingList").innerHTML += (i+1) + ": " + array[i]
// }