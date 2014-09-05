var getKJing=function(Pedurma){
	var out=[];
	for(var i=0; i<Pedurma.length; i++){
		if(Pedurma[i][2].match(/[abcdef]/)){
			Pedurma[i][2]=Pedurma[i][2].substr(0,Pedurma[i][2].length-1);
		}
		out.push(Pedurma[i][2]);
	}
	out.sort(function(a,b){
		return a-b;
	});
	return out;
}

var recen={
		/*    "D":[1,3,5,7,9 ,11,13,15,25,29],
		    "N":[2,3,5,7,11,13,17,19,25,27],
		    "C":[1,3,6,9,12,15,18,21,25,27],
		    "H":[1,5,10,15,20,25,30,35], 	
			"J":[1,2,3,4,5,6,7,8,9,10,11,12],
		    "U":[2,4,6,8,10,12,14,16]};*/

		    "D":getKJing(dPedurma),
		    "N":getKJing(nPedurma),
		    "C":getKJing(cPedurma),
		    "H":getKJing(hPedurma),		
			"J":getKJing(jPedurma),
		    "U":getKJing(uPedurma),};