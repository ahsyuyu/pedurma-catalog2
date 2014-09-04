var recen={"J":[1,3,5,7,9 ,11,13,15,25,29],//jPedurma
		   "D":[2,3,5,7,11,13,17,19,25,27],
		   "H":[1,3,6,9,12,15,18,21,25,27]};

var doIntersect=function(){
	var form=document.getElementById("form");
	var arr=[];
	var out=[];
	for(var i=0; i<form.recension.length; i++){
		if(form.recension[i].checked){
			//console.log(form.recension[i].value);
			//arr[form.recension[i].value]=recen[form.recension[i].value];
			arr.push(recen[form.recension[i].value]);
		}
	}
	out=arr.reduce(function(prev,now){return intersect(prev,now);});
	document.getElementById("result").innerHTML=out.join(",");
}

var intersect=function(arr1,arr2){
	var result=[];
	var j=0;
	for(var i=0; i<arr1.length; i++){
		while(j<arr2.length && arr2[j]<arr1[i])j++;
		if(arr1[i] == arr2[j])result.push(arr1[i]);			
	}
	//console.log(result);
	return result;
}