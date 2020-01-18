
			var nucleotides = ["A","C","T","G"];
			var i = 1;
			var randNcltd = Math.round(Math.abs(getRandom(0,4)));


		
function getRandom(min, max) {
 	return Math.random() * (max - min) -1 ;
}


console.log(randNcltd);



 while ( i < 30){
 	
 	const seq = nucleotides[Math.round(Math.abs(getRandom(0,4)))];


 	document.write(seq);
 //	document.write("<br>");
 	i++;
 } 

 
