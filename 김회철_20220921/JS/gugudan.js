function gugudan(){
      
  let whatdan = document.getElementById('gugudan').value;
  if(whatdan==""){
    alert('숫자를 입력해주세요');
    return false;
  }
  let result = "--- "+whatdan+"단 --- <br>";

  for(let i=1;i<=9;i++){
    result += whatdan+"X"+i+"="+(whatdan*i)+"<br>";
  }
  let div = document.getElementById('guguResult');
  div.innerHTML = result;
}
function imageP(){
  location.href = "./imagepage.html";
}