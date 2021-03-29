export const SnackDetails = (snackObject, snackToppings) => {
	// console.log(toppingArr)
	// let toppingHtml = ""
	// toppingArr.forEach(toppingObj => {
	// 	const index = toppingArr.indexOf(toppingObj)
	// 	const length = toppingArr.length - 1
	// 	if (index < length) {
	// 		toppingHtml += `<p>${toppingObj.topping.name}, </p>`
	// 	} else {
	// 			toppingHtml += `<p>${toppingObj.topping.name}</p>`
	// 		}
	// })

	//declare toppingHtml and set to an empty string
	//I have no idea why but it seems like the right thing
	// let toppingHtml = "";
	//if the string that is snackObject.toppings contains
	//a word from snackObject.name
	//put it in anarray
	//
	// if (snackObject.toppings.includes(snackObject.toppings.name)) {
	// 	let toptops= [];
	// 	toptops.push(snackObject.name)
	// 	console.log("test1")
	// 	console.log(toptops)
	// 	let cslTops = toptops.join(",")
	// 	toppingHtml = `${cslTops}`
	// 	console.log("cslTops to follow:")
	// 	console.log(cslTops)
	// }

	return `
	<div class="col">
		<div class="card shadow-sm" >
            <img class="bd-placeholder-img card-img-top"  style="max-width: 540px;" aria-label="Placeholder:${snackObject.name}" preserveAspectRatio="xMidYMid slice" focusable="false" src="${snackObject.snackImg}" alt="${snackObject.name}">
            <div class="card-body">
				<h5 color="primary">${snackObject.name}</h5>
              	<p class="card-text">${snackObject.description}</p>
				 
				  <div class="container">
					<div class="row row-cols-2">
						<div class="col col-details">Type: ${snackObject.type.name}</div>
						<div class="col col-details">Shape: ${snackObject.shape.name}</div>
						<div class="col col-details">Flavor: ${snackObject.inFlavor.name}</div>
						<div class="col col-details">Season: ${snackObject.season.name}</div>
					</div>
					<div class="row row-cols-1">
						<div class="col col-details">${snackToppings.map(topping => {return topping.topping.name}).join(", ")}</div>
					</div>
				</div>
			  	
				<div class="d-flex justify-content-between align-items-center">
					<div class="btn-group">
					<button type="button" class="btn btn-sm btn-outline-secondary" id="editcake__${snackObject.id}" disabled>Edit</button>
					<button type="button" class="btn btn-sm btn-outline-secondary" id="deletecake__${snackObject.id}" disabled>Delete</button>
					</div>
                	<small class="text-muted">Count: ${snackObject.count}</small>
              	</div>
            </div>
    	</div>
	</div>
	`
}

