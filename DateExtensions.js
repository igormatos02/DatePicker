Date.dateIsValid = function(y, m, d) {
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if ((!(y % 4) && y % 100) || !(y % 400)) {
        daysInMonth[1] = 29;
    }
    return d <= daysInMonth[--m]
}

Date.getPreviousYears = function (manyYearsBefore) {
    var lastYears = [];
    var today = new Date();
    var yyyy = today.getFullYear();
    for ($i = 0; $i < manyYearsBefore; $i++) {
        lastYears[lastYears.length] = yyyy - $i;
    }
    return lastYears;
}

Date.getCurrentYear = function () {
    var today = new Date();
    var mm = today.getFullYear();
    return mm;
}

Date.getCurrentMonth = function () {
    var today = new Date();
    var mm = today.getMonth() + 1; 
    if (mm < 10) {
        mm = '0' + mm
    }
    return mm;
}

Date.getCurrentDay = function () {
    var today = new Date();
    var dd = today.getDate();
    if (dd < 10) {
        dd = '0' + dd
    }
    return dd;
}
Date.getCurrentDate = function () {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    today = dd + '/' + mm + '/' + yyyy;
    return today;
}
Date.getMonthName = function (month) {
    var monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return monthNames[parseInt(month, 10) - 1];
}

Date.getYesterday = function () {
    var today = new Date();
    var yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    var dd = yesterday.getDate();
    var mm = yesterday.getMonth() + 1; //January is 0!
    var yyyy = yesterday.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    today = dd + '/' + mm + '/' + yyyy;
    return today;
}
Date.getTomorrow = function () {
    var today = new Date();
    var tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    var dd = tomorrow.getDate();
    var mm = tomorrow.getMonth() + 1; //January is 0!
    var yyyy = tomorrow.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    today = dd + '/' + mm + '/' + yyyy;
    return today;
}
Date.getDaysOfMonth = function (year, month) {
    var numDaysInMonth, daysInWeek, daysIndex, index, i, l, daysArray;

    numDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if ((Date.isLeapYear(year)) && (month == 2))
        numDaysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    daysIndex = { 'Sun': 0, 'Mon': 1, 'Tue': 2, 'Wed': 3, 'Thu': 4, 'Fri': 5, 'Sat': 6 };
    index = daysIndex[(new Date(year, month - 1, 1)).toString().split(' ')[0]];
    daysArray = [];

    for (i = 0, l = numDaysInMonth[month - 1]; i < l; i++) {
        daysArray.push({ Day: (i + 1) } );
        index++;
        if (index == 7) index = 0;
    }
    return daysArray;
}

Date.isLeapYear = function(y) {
    return ((y % 4 == 0) && ((!(y % 100 == 0)) ||
      (y % 400 == 0)));
}

Date.getDaysInMonth = function(mes, ano) {
    var dias_meses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var quant_dias = dias_meses[mes - 1];
    if ((Date.isLeapYear(ano)) && (mes == 2))
        quant_dias = 29;

    return quant_dias;
}

Date.prototype.addDays = function (num) {
    var value = this.valueOf();
    value += 86400000 * num;
    return new Date(value);
}

Date.prototype.getFormatedDate = function (format) {
    var temp = this.valueOf();
    var dateIni = new Date();
    dateIni.setTime(temp);

    if (format == undefined)
        return '';

    var sep = '-';
    if (format.contains('/'))
        var sep = '/';

    if (format == 'DD-MM-YYYY' || format == 'DD/MM/YYYY') {
        return dateIni.getDate() + sep + (dateIni.getMonth() + 1) + sep + dateIni.getFullYear();
    }
    if (format == 'YYYY-MM-DD' || format == 'YYYY/MM/DD') {
        return dateIni.getFullYear() + sep + (dateIni.getMonth() + 1) + sep + dateIni.getDate();
    }
}

Date.convertDateFormat=function (ddmmyyyy) {
    var dateParts = ddmmyyyy.split('/');
    return dateParts[2] + "-" + dateParts[1] + "-" + dateParts[0];
}

Date.newDate = function (ddmmyyyy) {
    var dateParts = ddmmyyyy.split('/');
    return new Date(parseInt(dateParts[2],10),  parseInt(dateParts[1],10)-1,   parseInt(dateParts[0],10));
}

Date.getFirsDayOfWeek = function(year,month){
    var firstDay = new Date(year, month, 1);
    return firstDay.getDay()
}

Date.getFirsDayOfMonth = function(year,month){
   var date = new Date(), y = date.getFullYear(), m = date.getMonth();
   var firstDay = new Date(year, month-1, 1);
   return firstDay.getDay()
}

Date.getPreviousMonthLastDay = function(year,month){
    date = new Date(year, month-1, 1);
    date.setDate(1);
    date.setHours(-1); 
    return date.getDate();
}
