
var nucleotides = ["A","C","T","G"];
var i = 1;
var randNcltd = Math.round(Math.abs(getRandom(0,4)));


function len()
	{
		var userInput = document.getElementById("len").value;
		document.write(userInput);
	}
		
function getRandom(min, max) {
 	return Math.random() * (max - min) -1 ;
}


function makeSeq(len){
	len = len();
	seqAry=[];
	while ( i < len){
		const seq = nucleotides[Math.round(Math.abs(getRandom(0,4)))];		
		seqAry.push(seq);
		i++;
	//	document.write("<br>");
	};
	document.getElementById("seq").innerHTML = seqAry;
};



function buttontoggle() {
	var x = document.getElementById("seq");
	if (x.innerHTML !== "") {
		console.log('makeseq function ' + makeSeq() )
		makeSeq() 
	} else {
		makeSeq() 
		console.log('empty array')
		
	}
  }


console.log(randNcltd);



