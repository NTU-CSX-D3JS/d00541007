function roundX(val, precision) {
  return Math.round(Math.round(val * Math.pow(10, (precision || 0) + 1)) / 10) / Math.pow(10, (precision || 0));
}

function myFunction1(s1) {
	var yr=s1[0].toString() + " 年 總電力消費量為";
	var ss1= roundX(s1[1], 1);
	var ss2= roundX(s1[2], 1);
	var ss3= roundX(s1[3], 1);
	var ss4= roundX(s1[4], 1);
	var ss5= roundX(s1[5], 1);
	

    var show = "(" + ss1.toString() + "+" + ss2.toString() + "+" + ss3.toString() + "+" + ss4.toString() + "+" +  ss5.toString() + ") = ";
    var sum = (s1[1] + s1[2] + s1[3]+ s1[4] + s1[5]);
    var ans= roundX(sum, 2);
    var str = yr + show + ans.toString();
    return str;
}



function d3select(id) {
	return document.getElementById(id);
}
