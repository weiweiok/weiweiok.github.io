// weiwei.blog

function storage_progress() {
    sessionStorage.setItem("list_url", window.location.href);
}
function read_progress() {
    var list_url = sessionStorage.getItem("list_url");
    if (list_url) {
        sessionStorage.removeItem("list_url");
        window.location.href = list_url;
    } else {
        //window.history.back(); //加评论功能后，返回功能会失效并死循环。
        window.location.href = 'http://weiwei.blog';
    }
}


function is_mobile() {  
   var userAgentInfo = navigator.userAgent;  
   var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
   var flag = false;  
   for (var v = 0; v < Agents.length; v++) {  
       if (userAgentInfo.indexOf(Agents[v]) > 0) {
           //document.querySelector("footer i").insertAdjacentHTML("beforeEnd","<br>"+Agents[v]);
           flag = true; break; 
       }
   }  
   return flag;  
} 