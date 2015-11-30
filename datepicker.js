var month = ['January','February','March','April','May','June','July','Augest','September','October','November','December'];
var array_index = 0;
var d = new Date();
var display_one,display_two;
var month_value = d.getMonth() + 1;
var month_set = 0;
var detach;

  function myDatePicker() {
      detach = $("#table1,#table2").show();
      display_one = "<table id = 'table1' border = '1'>"
      display_one += "<tr>"
      display_one += "<td><font onclick = 'clickSelection(0)' class = 'cursor'><button> < </button> </font></td>"
      display_one += "<td id = 'sta'><font id = 'month'>" + month[d.getMonth()] +" &nbsp;&nbsp; </font></td>"
      display_one += "<td><font onclick = 'clickSelection(1)' class = 'cursor'><button> > </button></font></td>"
      display_one += "<td><select id='year' onchange = 'dropDownSelection()'>"
      display_one += "<option value='2015'>2015</option>"
      display_one += "<option value='2014'>2014</option>"
      display_one += "<option value='2013'>2013</option>"
      display_one += "<option value='2012'>2012</option>"
      display_one += "<option value='2011'>2011</option>"
      display_one += "<option value='2010'>2010</option>"
      display_one += "</select></td>"
      display_one += "</tr>"
      display_one += "</table>";

      $("#table1").html(display_one);

      display_two = "<br /><table id = 'table2' border = '1'><tr>"
      display_two += "<th>Sun</th>"
      display_two += "<th>Mon</th>"
      display_two += "<th>Tue</th>"
      display_two += "<th>Wed</th>"
      display_two += "<th>Thu</th>"
      display_two += "<th>Fri</th>"
      display_two += "<th>Sat</th>"
      display_two += "</tr>"

      var set_days = 0;
      var no_of_days = new Date(d.getFullYear(),d.getMonth()+1,0).getDate();
      var d1=new Date();
      d1.setFullYear(d.getFullYear(),d.getMonth(),1); //set the first day of the current month and current year
      var first = d1.getDay();  // taking day of the current month

      for ( var rows = 0; rows < 6; rows++) {
          display_two += "<tr>"
          for (var coloumn = 0; coloumn < 7; coloumn++) {
              if ( first !== 0) {
                  display_two += "<td onclick = 'textValue("+ rows +" , "+ coloumn + ")'></td>"
                  first--;
              }
              else {
                  if (no_of_days === set_days)
                      {
                          display_two += "<td onclick = 'textValue("+ rows +" , "+ coloumn + ")'></td>"
                      }
                  else {
                      display_two += "<td onclick = 'textValue("+ rows +" , "+ coloumn + ")'>" + (++set_days) + "</td>"
                  }
              }
          }
              display_two += "</tr>"
      }

      display_two += "</table>";
      $("#table2").html(display_two);
 }


  var boolean = true;
  function clickSelection(value) {
      boolean ? incrementDecrement(value,d.getMonth()) : incrementDecrement(value,array_index);
      boolean = false;
  }
  function incrementDecrement(value,index) {
       flag = false;
       array_index = index;
       if (value === 0) {
          if (array_index === 0 ) {
            $("#month").text(month[array_index]);
            setMonthDays(array_index);
          }
          else{
              --array_index;
              $("#month").text(month[array_index]);
              setMonthDays(array_index);
          }
      }
      else {
          if (value === 1) {
              if (array_index === 11) {
                   $("#month").text(month[array_index]);
                   setMonthDays(array_index);
                }
              else {
                  ++array_index;
                  $("#month").text(month[array_index]);
                  setMonthDays(array_index);
              }
          }
      }
      month_set = array_index;
      month_value = array_index;
      month_value++;
  }


  var flag = true;
  function dropDownSelection() {
      flag ? setMonthDays(d.getMonth()) : setMonthDays(month_set);
      flag = false;
  }
  function setMonthDays(index) {
      var index = index;
      var year = parseInt($("#year").val());
      var set_days = 0;
      var no_of_days = new Date(year,index + 1,0).getDate();
      var d1=new Date();
      d1.setFullYear(year,index,1); //set the first day of the specified month and year
      var first = d1.getDay();  // taking day of the specified month

      for ( var rows = 1; rows <= 6; rows++) {
          for (var coloumn = 0; coloumn < 7; coloumn++) {
              if ( first !== 0) {
                  $("#table2 tr:eq("+ rows +") td:eq("+ coloumn +")").html("");
                  first--;
              }
              else {
                  if (no_of_days === set_days)
                      {
                          $("#table2 tr:eq("+ rows +") td:eq("+ coloumn +")").html("");
                      }
                  else {
                      ++set_days;
                      $("#table2 tr:eq("+ rows +") td:eq("+ coloumn +")").html(set_days);
                  }
              }
          }
      }
  }
  function textValue(row,coloumn) {
      row = row + 1;
      var year_value = 2015;
      $("#table2 tr:eq(" + row +") td:eq(" + coloumn +")").css({"background-color": "yellow", "color": "blue"});
      var day_value = parseInt($("#table2 tr:eq(" + row +") td:eq(" + coloumn +")").text());
      console.log(year_value,month_value,day_value);
      $("#result").val(day_value + "/" + month_value + "/" + year_value);
      detach = $("#table1,#table2").hide();
  }
