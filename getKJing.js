var getKJing=function(Pedurma){
	var out=[];
	for(var i=0; i<Pedurma.length; i++){
		out.push(Pedurma[i][2]);
	}
	return out;
}

var recen={"J":getKJing(jPedurma),// [1,3,5,7,9 ,11,13,15,25,29]
		   "D":getKJing(dPedurma),//[2,3,5,7,11,13,17,19,25,27]
		   "C":getKJing(cPedurma),
		   "H":getKJing(hPedurma), //[1,3,6,9,12,15,18,21,25,27]
		   "N":getKJing(nPedurma),
		   "H":getKJing(jPedurma),
		   "U":getKJing(uPedurma),};