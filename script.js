/*
Создайте двумерный массив 3 на 3 с любыми числами.
Выведите этот массив в теге <table>, чтобы каждое число было в своей ячейке.
Напишите скрипт, который диагональные элементы сделает равными 1, а остальные 0. То есть элементы[0][0], [1][1], [2][2] – 1, а остальные 0. Сделайте это без цикла.
Выведите через <table> получившийся массив.
Сделайте задачу из 3-го пункта с использованием циклов и, выведя массив на страницу, убедитесь, что результат тот же.
*/

var arr_1 = [5, 4, 9];
var arr_2 = [8, 9, 6];
var arr_3 = [7, 5, 9];
var arr = [arr_1, arr_2, arr_3];
document.write("<table border = '1px'>");
for(i = 0; i < arr.length; i++){
	document.write("<tr style='height:30px;'>");
	for(j = 0; j < arr[i].length; j++){
		document.write("<td style='width:30px;'>");
			document.write(arr[i][j]);
		document.write("</td>")
	}
	document.write("</tr>")
}
document.write("</table>");

document.write("<br>")

var arr_1 = [5, 4, 9];
var arr_2 = [8, 9, 6];
var arr_3 = [7, 5, 9];
var arr = [arr_1, arr_2, arr_3];

arr_1.splice(0,1,1);
arr_1.splice(1,1,0);
arr_1.splice(2,1,0);
arr_2.splice(0,1,0);
arr_2.splice(1,1,1);
arr_2.splice(2,1,0);
arr_3.splice(0,1,0);
arr_3.splice(1,1,0);
arr_3.splice(2,1,1);


document.write("<table border = '1px'>");
for(var i = 0; i < arr.length; i++){
	document.write("<tr style='height:30px;'>");
	for(var j = 0; j < arr[i].length; j++){
		document.write("<td style='width:30px;'>");
			document.write(arr[i][j]);
		document.write("</td>");
	}
	document.write("</tr>");
}
document.write("</table>");

