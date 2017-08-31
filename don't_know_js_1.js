

/* 

	why callbacks sucks !
	Asyn Patter - >> callback Hell !


*/



setTimeout(function(){

	console.log('callback one!');

	setTimeout(function(){

		console.log('callback two!');

		setTimeout(function(){

		console.log('callback three!');

		},1000);

	},1000);

},1000);


/* 
	explaining myth about callback Hell !
	so basically callback Hell is something deeper then the Indentation and Nesting !
	
	=> Inversion of Control !!

	How to solve callback issues !!

	refer don't know js_2.js

*/


function one(cb){

	console.log('callback one!');
	setTimeout(cb,1000);
}

function two(cb){

	console.log('callback two!');
	setTimeout(cb,1000);
}

function three(){

	 console.log('callback three!');
}

one(function(){

	two(three);
})







