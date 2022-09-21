function subm(){
  let id = document.getElementById('user_id').value;
  let pw = document.getElementById('user_pw').value;
  if(id!="" && pw!=""){
    location.href = './mainpage.html';
    
  } else if(id==""){
    alert('아이디를 입력해주세요');
    return false;
  }else if(pw==""){
    alert('비밀번호를 입력해주세요');
    return false;
  }
  
}
function signup(){
  location.href = 'signup.html'
}