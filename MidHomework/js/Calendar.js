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
    var rnt = 0;
    for(i = 0; i < firstDate.getDay(); i++){
        cnt = cnt + 1;
    }

    for(i = 1; i <= lastDate.getDate(); i++){
      //7일이 되면 다음 줄로 넘어가야한다.
      if(cnt == 7){
        rnt++;
        cnt = 0;
      }
      //Calendar 숫자 입력
      calendarbody.rows[rnt].cells[cnt].innerHTML = i;
      //색 변경 부분
      if(i < today.getDate()){
        calendarbody.rows[rnt].cells[cnt].style.backgroundColor = "#e3e4ea";
      }else if(i == today.getDate()){
        calendarbody.rows[rnt].cells[cnt].style.backgroundColor = "#96e3ff";
        //속성 추가 - Double Click 시 일정 추가 관련
        calendarbody.rows[rnt].cells[cnt].ondblclick = function(table, date){
          return function(){
              AddPlan(table, date);
          };
        }(calendarbody.rows[rnt].cells[cnt], i);
        //ondblclick="AddPlan()"
      }else if(i > today.getDate()){
        calendarbody.rows[rnt].cells[cnt].style.backgroundColor = "#d9e8ce";
        //속성 추가 - Double Click 시 일정 추가 관련
      }

      cnt = cnt + 1;
    }

}

function AddPlan(table, date){
  // Get the modal
  var calendarbody = document.getElementById("calendar_body");
  var addplan_modal = document.getElementById('AddPlan');
  var content = document.getElementById('addplancontent');
  var span = document.getElementsByClassName("cancel")[0];
  var save = document.getElementsByClassName("add")[0];
  content.childNodes[1].innerHTML = date + "일 일정추가";

  addplan_modal.style.display = "block";
  span.onclick = function() {
    addplan_modal.style.display = "none";
  }

  save.onclick = function() {
    if(table.childElementCount < 4){
      //Input value 가져오기
      var planning = document.getElementById("planning");
      var planning_list = planning.value;
      //List 만들기
      var calendarbody_input = document.createElement('div');
      calendarbody_input.setAttribute("id", "plan_list");
      var calendarbody_input_data = document.createTextNode(planning_list);
      calendarbody_input.appendChild(calendarbody_input_data);
      //X button - List
      var deletebutton = document.createElement('span');
      deletebutton.setAttribute("class", "plan_delete");
      var deletebuttontext = document.createTextNode("x");
      deletebutton.appendChild(deletebuttontext)

      deletebutton.onclick = function(list){
        deletebutton.parentElement.remove();
      }

      calendarbody_input.appendChild(deletebutton);
      table.appendChild(calendarbody_input);
      addplan_modal.style.display = "none";
      planning.value = null;
    }
    else console.log(table.childElementCount);
  }
}

function ChangePlanList(table, list){

}
