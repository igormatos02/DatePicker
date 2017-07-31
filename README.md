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

```<script src="dateExtensions.js"></script>```
```<script src="datepicker.js"></script>```

```<datepicker date="date" classname="className" placeholder="dd/mm/yyyy" clearbutton ="false" datebutton="true"></datepicker>```


# app.js 
<pre>
angular.module('application',["app.colorpicker"]);
</pre>

# controller.js 
<pre>
$scope.date = date;
</pre>





           
                              
