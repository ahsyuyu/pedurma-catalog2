var doIntersect=function(){//intersect=共有
	var form=document.getElementById("form");
	var arr=[];
	var out=[];
	//var result=[];
	for(var i=0; i<form.recension.length; i++){
		if(form.recension[i].checked){
			//arr[form.recension[i].value]=recen[form.recension[i].value];
			arr.push(recen[form.recension[i].value]);
		}
	}
	out=arr.reduce(function(prev,now){return intersect(prev,now);});
	var result=doFindAllRecen(out);
	document.getElementById("result").innerHTML=result.join("<br>");
}
//共有的每個經號去找有各自經號的版本
var doFindAllRecen=function(intersect){ //intersect=找到共有經號的陣列
	var out=[];
	for(var j=0; j<intersect.length; j++){
		var allRecen=findAllRecen(intersect[j]);
		var r="<li>"+intersect[j]+":"+allRecen.join(",")+"</li>";//經號：有此經號的版本
		out.push(r);
	}	
	return out;
}
//找有其經號的版本
var findAllRecen=function(KJing){
	var out=[];
	for(var i in recen){
		var j=0;
		while(j<recen[i].length && recen[i][j]<KJing)j++;
		if(recen[i][j] == KJing){
			out.push(i);
		}
	}
	return out;//有KJing的版本
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

