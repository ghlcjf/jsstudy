function subm(){
  let id = document.getElementById('user_id').value;
  let pw = document.getElementById('user_pw').value;
  let pwch = document.getElementById('user_pwch').value;
  let name = document.getElementById('user_name').value;
  let email = document.getElementById('user_email').value;
  let tel = document.getElementById('user_tel').value;
  if(id!="" && pw!="" && pwch==pw && pwch!="" && name!="" && email!="" && tel!=""){
    location.href = './mainpage.html';
    
  } else if(id==""){
    alert('아이디를 입력해주세요');
    return false;
  }else if(pw==""){
    alert('비밀번호를 입력해주세요');
    return false;
  }else if(pwch==""){
    alert('확인 비밀번호를 입력해주세요')
    return false;
  }else if(pw!=pwch){
    alert('비밀번호를 다시 확인해주세요');
    return false;
  }else if(name==""){
    alert('이름을 입력해주세요')
    return false;
  }else if(email==""){
    alert('이메일을 입력해주세요')
    return false;
  }else if(tel==""){
    alert('전화번호를 입력해주세요')
    return false;
  }
}