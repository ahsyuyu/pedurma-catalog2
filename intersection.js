//form2.calculate.value
var doIntersect=function(){//intersect=共有
	var form=document.getElementById("form");
	var form2=document.getElementById("form2");
	var arr=[];
	var out=[];
	var out_noRepeat=[];
	//var result=[];
	for(var i=0; i<form.recension.length; i++){
		if(form.recension[i].checked){
			//arr[form.recension[i].value]=recen[form.recension[i].value];
			arr.push(recen[form.recension[i].value]);
		}
	}
	//out= 最後交集的結果
	out=arr.reduce(function(prev,now){return intersect(prev,now,form2.calculate.value);});
	out_noRepeat=noRepeat(out);
	var result=doFindAllRecen(out_noRepeat);
	document.getElementById("result").innerHTML=result.join("<br>");
	document.getElementById("amount").innerHTML=out.length;
}

//共有的每個經號去找有各自經號的版本
var doFindAllRecen=function(intersect){ //intersect=找到共有經號的陣列
	var out=[];
	for(var j=0; j<intersect.length; j++){
		var allRecen=findAllRecen(intersect[j]);
		var sutra=addSutraName(intersect[j]);
		var r="<li>"+intersect[j]+sutra+":"+allRecen.join(",")+"</li>";//經號：有此經號的版本
		out.push(r);
	}	
	return out;
}

var addSutraName=function(Jing){
	for(var i=0; i<sutranames.length; i++){
		if(Jing == sutranames[i][0]){
			return sutranames[i][1];
			break;
		}
	}
}
//找有其經號的版本
var findAllRecen=function(Jing){
	var out=[];
	for(var i in recen){
		var j=0;
		while(j<recen[i].length && parseInt(recen[i][j])<parseInt(Jing))j++;
		if(recen[i][j] == Jing){
			out.push(i);
		}
	}
	return out;//有Jing的版本們
}

var intersect=function(arr1,arr2,calculate){
	var result=[];
	var j=0;
	for(var i=0; i<arr1.length; i++){
		while(j<arr2.length && parseInt(arr2[j])<parseInt(arr1[i]))j++;
		if(calculate == "intersect" && arr1[i] == arr2[j]  )result.push(arr1[i]);	
		if(calculate == "unique" && arr1[i] != arr2[j]  )result.push(arr1[i]);		
	}
	//console.log(result);
	return result;
}


var noRepeat=function(arr){
	var unique=[];
	arr.forEach(function(value){
		if (unique.indexOf(value) == -1){
			unique.push(value);
		}
	})
	return unique;
}