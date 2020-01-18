
			var nucleotides = ["A","C","T","G"];
			var i = 1;

		
function getRandom(min, max) {
 	return Math.random() * (max - min) -1 ;
}


function makeSeq(){

	 while ( i < 30){
 	
 	const seq = nucleotides[Math.round(Math.abs(getRandom(0,4)))];

 	document.write(seq);
 	console.log(seq);

 	i++;
 } 


makeSeq();



var makeSeqDiv = document.createElement("div");
	makeSeqDiv.appendChild(makeSeq());

 document.getElementById("inject").innerHTML = '<h1> Successfully Inject </h1>';
}



 
