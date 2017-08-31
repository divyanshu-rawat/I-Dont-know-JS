

function try_something(okay,err){

	setTimeout(function () {
			
		var random = Math.random();
		if(random > 0) okay(random);
		else
			err('Not Found !');

	},1000);


}


try_something(function (response) {
		
	console.log('Random Number Generated - ',response);

},function (err) {
	
	console.log('Error Occured - ', err);
});


/*

	let's talk about same paradigm in Node.js error first call !

*/

function try_something_node(callback){

	setTimeout(function () {
			
		var random = Math.random();
		if(random > 0) callback(null,random);
		else
			callback('Not Found !');

	},1000);


}

/*  error first-style !
	if they pass both err and success value How we will deal with the success value !
*/
try_something_node(function(err,response){

	if (err){ console.log(err);
	}
	else{
		console.log('Random Number Generated - ',response);
	}

})




