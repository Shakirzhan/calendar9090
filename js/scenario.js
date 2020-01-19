var d = document,
		m = q('#month'),
		c = q('#container'),
		date = new Date(),
		strDate = '' + date,
		strDate = strDate.split(' '),
		buiCalendarMonth = q(".bui-calendar__month"),
		buiCalendarControlPrev = q(".bui-calendar__control--prev"),
		buiCalendarControlNext = q(".bui-calendar__control--next"),
		txt = date.getMonth() + 1;



var monthGlobal = {
		'Jan': 'январь',
		'Feb': 'февраль',
		'Mar': 'март',
		'Apr': 'апрель',
		'May': 'май',
		'Jun': 'июнь',
		'Jul': 'июль',
		'Aug': 'август',
		'Sep': 'сентябрь',
		'Oct': 'октябрь',
		'Nov': 'ноябрь',
		'Dec': 'декабрь',
	};



m.innerText = date.getMonth() + 1;

var getNumMonth = date.getMonth();

dateDisplay(getNumMonth);

function q(el) {
	return d.querySelector(el);
}

buiCalendarControlNext.onclick = function() {
	
	if (txt >= 12) {
		txt = 12;
	} else {
		txt = txt + 1;
		m.innerText = txt;
	}
	dateDisplay(txt - 1);
	c.innerHTML = getDate(txt, 2020);

	var table = q("table");
	table.addEventListener("click", clTable);
	get_num();
}

buiCalendarControlPrev.onclick = function() {
	if (txt <= 1) {
		txt = 1;
	} else {
		txt = txt - 1;
		m.innerText = txt;
	}
	dateDisplay(txt - 1);
	c.innerHTML = getDate(txt, 2020);

	var table = q("table");
	table.addEventListener("click", clTable);
	get_num();
}

c.innerHTML = getDate( date.getMonth() + 1 , 2020);

get_num();

var table = q("table");

table.addEventListener("click", clTable);

function clTable(e) {
	var el  = e.target,
			val;

	if ( !( el.classList.contains("selected") ) ) {
		
		val = el.getAttribute("value");
		if ( val == "0" ) {
			return false;
		}
		el.classList.add("selected");
		sendNum( val );
		countNum();
	} else {
		el.classList.remove("selected");
		val = el.getAttribute("value");
		del_num( val );
		countNum();
	} 
}

function dateDisplay(txt) {
	var date = new Date( 2020, txt, 1 ),
			strDate = '' + date,
			strDate = strDate.split(' '),
			monthStr = capitalizeFirstLetter( monthGlobal[ strDate[1] ] );

	buiCalendarMonth.innerText = `${monthStr} ${strDate[3]}`;
}

function sendNum(value) {
 
  var xhr = new XMLHttpRequest();

  xhr.open('POST', 'php/send_num.php', false);

  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onreadystatechange = function() {
    if ( xhr.readyState == 4 ) {
      // console.log( xhr.responseText );
    } 
  }
  
  xhr.send(`num=${value}`);
}

countNum();

function countNum() {
 	var btn = q( ".buttonCustom" );

  var xhr = new XMLHttpRequest();

  xhr.open('POST', 'php/count.php', false);

  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onreadystatechange = function() {
    if ( xhr.readyState == 4 ) {
    	btn.innerText = xhr.responseText;
    } 
  }
  
  xhr.send();
}

function get_num() {
 
  var xhr = new XMLHttpRequest();

  xhr.open('POST', 'php/get_num.php', false);

  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onreadystatechange = function() {
    if ( xhr.readyState == 4 ) {
      var json = JSON.parse( xhr.responseText ),
      		el;
      if ( json ) {
      	for (var it in json) {
      		if ( json[it] !== "null" ) {
	      		el = q( `td[value="${json[it]}"]` );
	      		if ( el ) {
	      			el.classList.add("selected");
	      		}
	      	}	
      	}
      }

    } 
  }
  
  xhr.send();
}

function del_num(value) {
 
  var xhr = new XMLHttpRequest();

  xhr.open('POST', 'php/del_num.php', false);

  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onreadystatechange = function() {
    if ( xhr.readyState == 4 ) {
    	// console.log( xhr.responseText );
    } 
  }
  
  xhr.send(`num=${value}`);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getDate(num, num_year) {
	var getTag = '';	
	var month = {
		'Jan': 'январь',
		'Feb': 'февраль',
		'Mar': 'март',
		'Apr': 'апрель',
		'May': 'май',
		'Jun': 'июнь',
		'Jul': 'июль',
		'Aug': 'август',
		'Sep': 'сентябрь',
		'Oct': 'октябрь',
		'Nov': 'ноябрь',
		'Dec': 'декабрь',
	};
	var week = {
		'Mon': 'понедельник',
		'Tue': 'вторник',
		'Wed': 'среда',
		'Thu': 'четверг',
		'Fri': 'пятница',
		'Sat': 'суббота',
		'Sun': 'воскресенье',
	};
	var week4 = {
		'Mon': 'пн',
		'Tue': 'вт',
		'Wed': 'ср',
		'Thu': 'чт',
		'Fri': 'пт',
		'Sat': 'сб',
		'Sun': 'вс',
	};
	// номер месяца
	var num_month = num - 1;
	/**
	 * функция возращает количество дней в месяце
	 * @param  {[число]} x [номер месяца]
	 * @return {[число]}   [кол во дней]
	 */
	function f(x) { 
		return 28 + (x + Math.floor(x/8)) % 2 + 2 % x + 2 * Math.floor(1/x); 
	}
	// кол во дней
	var count_days = f( num );

	getTag += '<table>'; 
	
	getTag += '<tr>';
		for (var key in week4) {
			
			getTag += `<td value="0"> ${week4[key]} </td>`;
		}
	
	getTag += '</tr>';
	
	var boo4 = true;
	var boo5 = false;
	localStorage['i'] = 1;
	localStorage['index'] = 1;

	var week3 = get_date(num_year, num_month, 1);
	var boo3 = true;
	var boo2 = true;
	count_minus = 2;
	
	var count_w = 1;
	var count_w2 = 0;
	var temp = '';
	for (var i = 1; i <= count_days; i++) {
		if (count_w == 7) {
			count_w2++;
			count_w = 1;
		}
		count_w++;
		if (i == 1 && boo3) {
			for (var key in week) {
				if (boo2) {
					
					if (key == week3[0]) {
						boo2 = false;
						boo3 = false;
					}
					--count_minus;
				}
			}
			i = count_minus;
		}
		
		temp += get_temlate( get_date(num_year, num_month, i), i, count_days);

		var week2 = get_date(num_year, num_month, count_days);
		if ( i == count_days) {
			var boo = false;
			var count_arr = -1;
			
			
			for (var key in week) {
				if (key == week2[0]) {
					boo = true;
				}
				if (boo) {
					count_arr++;
				}
			}
			count_days = count_days + count_arr;
		}
	}
	getTag += temp;
	getTag += '</table>';
	return getTag;

	/**
	 * получает данные о дате
	 * @param  {[число]} year  [год]
	 * @param  {[число]} month [месяц]
	 * @param  {[число]} day   [день]
	 * @return {[массив]}       [датта]
	 */
	function get_date(year, month, day) {
		var date = new Date( year, month, day );
		var str = '' + date;
		var arr = str.split(' ');
		return arr;
	}
	/**
	 * вывод шаблона
	 * @param  {[массив]} arr       [дата]
	 * @param  {[число]} i         [description]
	 * @param  {[число]} num_month [description]
	 * @return {[type]}           [description]
	 */
	function get_temlate(arr, i, count_days, tag = '') {
		if(arr[0] == 'Mon') {
			tag += '<tr>';
		}


		tag += `<td value="${arr[2]}.${arr[1]}"> ${arr[2]} </td>`;


		if (arr[0] == 'Sun') {
			tag += '</tr>';
		}

		return tag;
	}

	// Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec 

	// Mon Tue Wed Thu Fri Sat Sun
}