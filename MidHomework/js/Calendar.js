var today = new Date();
 Calendar();
//Calendar date를 입력해주는 함수
function Calendar(){
    var firstDate = new Date(today.getFullYear(), today.getMonth(), 1);
    var lastDate = new Date(today.getFullYear(), today.getMonth()+1, 0);
    var calendarheadYearMonth = document.getElementById("Year_Month");
    calendarheadYearMonth.innerHTML = today.getFullYear() + "년 " + (today.getMonth() + 1) + "월";

    var calendarbody = document.getElementById("calendar_body");

    var cnt = 0;
    for(i = 0; i < firstDate.getDay(); i++){
        cnt = cnt + 1;
    }
    rows = 0;
    for(i = 1; i <= lastDate.getDate(); i++){
      calendarbody.rows[rows].cells[cnt].innerHTML = i;
      cnt = cnt + 1;
      if(cnt == 7){
        rows++;
        cnt = 0;
      }
    }
}
