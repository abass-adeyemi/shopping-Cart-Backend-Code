let storeItems = {
	1: {
		itemName: 'Dettol Soap',
		price: 200,
	},
	2: {
		itemName: 'Juice',
		price: 550,
	},
	3: {
		itemName: 'Body Cream',
		price: 2000,
	},
	4: {
		itemName: 'Plaintain Chips',
		price: 2500,
	},
	5: {
		itemName: 'Crispy Chicken',
		price: 1250,
	},
	6: {
		itemName: 'Chocolate',
		price: 120,
	},
	7: {
		itemName: 'Plaintain',
		price: 300,
	},
};
let totalAmount = 0;
let itemsCart = [];
let user_input;
let quantity_input;
let cartItem;

let productInput = (userInput, quantityInput) => {
	let amount = storeItems[userInput].price * quantityInput;
	cartItem = {
		itemName: storeItems[userInput].itemName,
		price: storeItems[userInput].price,
		quantityInput,
		amount,
	};
	itemsCart.push(cartItem); // this is pushing the cartItems into the array of itemsCart
};
/* this is used to get the amount => cartItems from the array of itemsCart and adding the previous to current */
let reducer = (previousItems, currentItems) => {
	let sum = previousItems + currentItems.amount;
	console.log(
		'previousItems',
		previousItems,
		'currentItems',
		currentItems,
		'total',
		sum
	);

	return sum;
};

// this is used to control the pop-up
while (true) {
	console.log('i got here');
	user_input = parseInt(
		prompt(
			`Hello,\n Welcome to our store,\n kindly select(1-7) the list of item to purchase,and press 0 to display the invoice.\n 1. Dettol soap.\n 2. Juice \n 3. Body cream.\n 4. Plantain chips\n 5. Crispy chicken \n 6. Chocolate \n 7. Plantain.\n 0. Exit`
		)
	);
	console.log(user_input, typeof user_input);

	if (user_input === 0 || isNaN(user_input) || user_input >= 8) {
		console.log('im zero');

		console.table(itemsCart);
		totalAmount = itemsCart.reduce(reducer, 0);

		break;
	} else {
		//this is used to collect quantity-input
		quantity_input = parseInt(
			prompt(`what the number of quatity of items you are taking`)
		);
		if (!(isNaN(quantity_input) || quantity_input < 1)) {
			// retur
			productInput(user_input, quantity_input);
		}
	}
}

console.table(totalAmount);
alert(`The cost of the total items selected is ${totalAmount}`);
