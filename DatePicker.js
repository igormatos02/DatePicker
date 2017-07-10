angular.module('app.datepicker', []).directive('datepicker', function () {
    return {
        restrict: 'E',
        scope: {
            date: '=',
            classname: '=?',
            placeholder: '=?',
            clearbutton: '=?',
            datebutton: '=?',
        },
        templateUrl: system.application.root + "/application/common/datepicker/datepicker.html",
        controller: function ($scope, $element, $rootScope) {
             
        
            if ($scope.classname == undefined)
                $scope.classname = "";
            if ($scope.placeholder == undefined)
                $scope.placeholder = "dia/mes/ano";
               //$scope.daysInMonth=Date.getDaysInMonth( $scope.currentMonth ,$scope.currentYear)
               $scope.buildCalendar = function(){
                  
                    $scope.dayCount=0;
                    $scope.weeks=[];
                    $scope.firstDayOfMonth=Date.getFirsDayOfMonth($scope.currentYear,$scope.currentMonth);
                    
                    $scope.monthDays= Date.getDaysOfMonth($scope.currentYear,$scope.currentMonth) ;
                    
                    var alldays=[]; 
                    var lastDay=Date.getPreviousMonthLastDay($scope.currentYear,$scope.currentMonth);
                    for($i=0;$i<$scope.monthDays.length+($scope.firstDayOfMonth);$i++)
                        {
                            if($i<$scope.firstDayOfMonth){

                                if(
                                       Date.getCurrentDay()==(lastDay-$scope.firstDayOfMonth+1)
                                    && Date.getCurrentMonth()==$scope.currentMonth
                                    && Date.getCurrentYear()==$scope.currentYear
                                    ){
                                 alldays[alldays.length]={day:(lastDay-$scope.firstDayOfMonth+1),month:-2,isDenied:true};
                                 }
                           else   alldays[alldays.length]={day:(lastDay-$scope.firstDayOfMonth+1),month:-1,isDenied:true};
                       
                           lastDay++;
                            

                        }else {
                                if($scope.date!="" && $scope.date!=undefined
                                    && $scope.startDate.getDate()==$scope.monthDays[$i-$scope.firstDayOfMonth].Day
                                    && ($scope.startDate.getMonth()+1)==$scope.currentMonth
                                    &&  $scope.startDate.getFullYear()==$scope.currentYear
                                    // Selected Day
                                    )
                                    alldays[alldays.length]={day:$scope.monthDays[$i-$scope.firstDayOfMonth].Day,month:1,isDenied:false};
                                else if(
                                        //Current Day 2
                                        Date.getCurrentDay()==$scope.monthDays[$i-$scope.firstDayOfMonth].Day
                                    && Date.getCurrentMonth()==$scope.currentMonth
                                    && Date.getCurrentYear()==$scope.currentYear
                                    )
                                    alldays[alldays.length]={day:$scope.monthDays[$i-$scope.firstDayOfMonth].Day,month:2,isDenied:false};
                                else //days of the month 0 
                                    alldays[alldays.length]={day:$scope.monthDays[$i-$scope.firstDayOfMonth].Day,month:0,isDenied:false};
                                     
                          }
                        }

                        $scope.weekNumber= Math.round(alldays.length/7);
                        if(alldays.length%7>0)
                        $scope.weekNumber++;

                    for($i=0;$i<=$scope.weekNumber;$i++){
                        var days=[];
                        for($j=0;$j<7;$j++){
                                days[days.length]=alldays[$scope.dayCount];
                                $scope.dayCount++;
                                if($scope.dayCount>alldays.length)
                                    break;
                        }
                        $scope.weeks[$scope.weeks.length]={Days:days};
                       
                    }
                     $scope.currentMonthName=Date.getMonthName($scope.currentMonth); 
               }
              
            $scope.buildCalendar();
            $scope.previousMonth=function(){
                  $scope.currentMonth--;
                  if($scope.currentMonth==0){
                        $scope.currentMonth=12;
                        $scope.currentYear--;
                  }
                 $scope.buildCalendar();
            }
            $scope.nextMonth=function(){
                    $scope.currentMonth++;
                  if($scope.currentMonth==13){
                        $scope.currentMonth=1;
                        $scope.currentYear++;
                  }
                 $scope.buildCalendar();
            }
            $scope.setDate=function(Day){
                if (Day.isDenied == true || Day == undefined)
                    return;

                $scope.classname = "";

                $scope.datePanelVisible = false;
                $scope.selectedDate=new Date($scope.currentYear,$scope.currentMonth,Day.day);
                $scope.date=((Day.day+"").length==1?"0"+Day.day:Day.day)+'/'+(($scope.currentMonth+"").length==1?"0"+$scope.currentMonth:$scope.currentMonth)+"/"+$scope.currentYear;
               
            }
            $scope.loaded = false;
            $scope.clearDate = function () {
                $scope.date = "";
              
            }
            $scope.toggleCalendar = function ($event) {
               
                    if ($event.target.parentNode.nodeName == "SPAN")
                        $scope.elementNode = $event.target.parentNode.children[1];
                    else
                        $scope.elementNode = $event.target.parentNode.parentNode.children[1];


                    $scope.datePanelVisible = !$scope.datePanelVisible;
                    if (!$scope.loaded) {
                        if ($scope.elementNode.nodeName == "DIV") {
                            $($scope.elementNode).removeClass("hide");
                            $scope.loaded = true;
                        }
                    }

                  if($scope.datePanelVisible){
                    if($scope.date!="" && $scope.date!=undefined) {
                        $scope.startDate = new Date.newDate($scope.date);
                        $scope.currentDay=$scope.startDate.getDate();
                        $scope.currentMonth=$scope.startDate.getMonth()+1;
                        $scope.currentYear=$scope.startDate.getFullYear();
                    } else{
                        $scope.startDate = new Date(); 
                        $scope.currentDay=$scope.startDate.getDate();
                        $scope.currentMonth=$scope.startDate.getMonth()+1;
                        $scope.currentYear=$scope.startDate.getFullYear();
                    }  
                     $scope.buildCalendar();
                  }
            }
            
        }  
    }
});;
function calc(o,target) {
    var x = getOffset(o);
    var offsetLeft = x.left;
    var offsetRight = window.screen.width - x.right;
    var offsetTop = x.top ;
    var offsetBottom = window.screen.height- x.bottom;
    if (offsetRight+150 > 200 ) {
       
        target.style.left = "0px";
    }else
        if (offsetLeft > 200) {
        target.style.left = "-220px";
    }
    if (offsetBottom - 30 > 200) {
        target.style.top = "25px";
    } else if (offsetTop > 250) {
            target.style.top = "-220px";
        }
   
}
function getOffset(el) {
    el = el.getBoundingClientRect();
    return {
        left: el.left + window.scrollX,
        top: el.top + window.scrollY,
        right: el.right,
        bottom:el.bottom
    }
   
}
