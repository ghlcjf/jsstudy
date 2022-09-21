function subm(){
  let s = confirm('게시글을 등록하시겠습니까?');
  if(s){
    location.href = "./bulletinboard.html";
  }
}
function cancle(){
  let c = confirm('취소하시겠습니까?');
  if(c){
    return true;
  }else {
    return false;
  }
}
function board(){
  location.href = "./bulletinboard.html";
}