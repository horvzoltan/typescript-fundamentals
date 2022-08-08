import {productsURL} from '../lib';

const prefix = '🐉 ';

export default async function updateOutput(id: string) {
	runTheLarningSamples();
}

function runTheLarningSamples() {
	function displayProductInfo(id: number, name: string) {
		console.log(`${prefix} typed parameters`);
		console.log(`product id=${id} and name=${name}`);
	}

	displayProductInfo(10, 'pizza');
	displayProductInfo(10, 'cheese');

	console.log(`${prefix} function declaration`);
	console.log(addNumbersDeclaration(1, 2));

	function addNumbersDeclaration(x: number, y: number): number {
		return x + y;
	}

	const addNumbersExpression = function (x: number, y: number): number {
		return x + y;
	};

	console.log(`${prefix} expression declaration`);
	console.log(addNumbersExpression(1, 2));

	const sampleProducts = [
		{
			id: 10,
			name: 'Pizza slice',
			icon: 'fas fa-pizza-slice',
		},
		{
			id: 20,
			name: 'Ice cream',
			icon: 'fas fa-ice-cream',
		},
		{
			id: 30,
			name: 'Cheese',
			icon: 'fas fa-cheese',
		},
	];

	function getProductNames() {
		return sampleProducts.map((p) => p.name);
	}

	console.log(`${prefix} return array`);
	console.log(getProductNames());
}