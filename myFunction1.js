function myFunction1(s1, s2, s3, s4, s5, yr) {
	var ss1= roundX(s1, 1);
	var ss2= roundX(s2, 1);
	var ss3= roundX(s3, 1);
	var ss4= roundX(s4, 1);
	var ss5= roundX(s5, 1);
	var yr=yr.toString() + "年";

    var show = "(" + ss1.toString() + "+" + ss2.toString() + "+" + ss3.toString() + "+" + ss4.toString() + "+" +  s5.toString() + ") = ";
    var sum = (s1 + s2 + s3 + s4 + s5);
    var ans= round(sum, 2);
    var str = yr + show + ans.toString();
    return str;
}



function d3select(id) {
	return document.getElementById(id);
}
