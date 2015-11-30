
var d = new Date();
var display_one,display_two;
var month = d.getMonth() + 1,year = d.getFullYear();

  function myDatePicker() {

      $("#table1,#table2").show();
      display_one  = "<table>"
      display_one += "<tr>"
      display_one += "<td><select id ='month' onchange = 'setMonthDays()'>"
      display_one += "<option value='0'>January</option>"
      display_one += "<option value='1'>February</option>"
      display_one += "<option value='2'>March</option>"
      display_one += "<option value='3'>April</option>"
      display_one += "<option value='4'>May</option>"
      display_one += "<option value='5'>June</option>"
      display_one += "<option value='6'>July</option>"
      display_one += "<option value='7'>Augest</option>"
      display_one += "<option value='8'>September</option>"
      display_one += "<option value='9'>October</option>"
      display_one += "<option value='10' selected>November</option>"
      display_one += "<option value='11'>December</option>"
      display_one += "</select>"

      display_one += "<td><select id='year' onchange = 'setMonthDays()'>"
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

      display_two = "<br /><table border = '1'><tr>"
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
                  display_two += "<td  onclick = 'textValue("+ rows +" , "+ coloumn + ")'></td>"
                  first--;
              }
              else {
                  if (no_of_days === set_days)
                      {
                          display_two += "<td  onclick = 'textValue("+ rows +" , "+ coloumn + ")'></td>"
                      }
                  else {
                      display_two += "<td  onclick = 'textValue("+ rows +" , "+ coloumn + ")'>" + (++set_days) + "</td>"
                  }
              }
          }
              display_two += "</tr>"
      }

      display_two += "</table>";
      $("#table2").html(display_two);
  }

  function setMonthDays() {
       month = parseInt($("#month").val());
       year = parseInt($("#year").val());
      var set_days = 0;
      var no_of_days = new Date(year,month + 1,0).getDate();
      var d1=new Date();
      d1.setFullYear(year,month,1); //set the first day of the specified month and year
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
      $("#table2 tr:eq(" + row +") td:eq(" + coloumn +")").css({"background-color": "yellow", "color": "blue"});
      var day_value = parseInt($("#table2 tr:eq(" + row +") td:eq(" + coloumn +")").text());
      $("#result").val(day_value + "/" + month + "/" + year);
      $("#table1,#table2").hide();
  }
  function focuss(){
    $("#table2 td").focus(function(){
      $("span").css("background-color","#ebf5fb");
  });
  }
