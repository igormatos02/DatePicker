# DatePicker
Simple Angular Datepicker

# Usage

<datepicker date="date"></datepicker>

# Parameters

| Name         | Description                              |   Value        | 
| :---         |     :---:                                |           ---: | 
| date         | Bind with controler date var             |  $scope.date   |
| classname    | Same as ng-class                         |  $scope.class  |
| placeholder  | Input placeholder                        |  'dd/mm/yyyy'  | 
| clearbutton  | Show the clear Button                    |  true/false    | 
| datebutton   | Show the date  Button                    |  true/false    |  


# index.html
<pre>
<code>
<script src="dateExtensions.js"></script>
<script src="datepicker.js"></script>
<datepicker date="date" classname="className" placeholder="dd/mm/yyyy" clearbutton ="false" datebutton="true"></datepicker>
</code>
</pre>

# app.js 
<pre>
<code>
    angular.module('application',["app.colorpicker"]);
</code>
</pre>

# controller.js 
<pre>
<code>
   $scope.date = date;
</code>
</pre>





           
                              
