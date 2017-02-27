(function() {
    // article links add blank
    var aTags = document.querySelectorAll('article a:not([id])')
    for (var i = 0; i < aTags.length; i++) {
        aTags[i].setAttribute('target', '_blank')
    }
    // mobile nav
    var mobileNav = document.querySelector(".mobile_nav");
    var mobileMenu = document.querySelector(".left");
    var mobileEvent = function(){
        if (mobileNav.open) {
            if(mobileNav.post) {
                mobileNav.style.color="#666";
                mobileNav.innerHTML = "目录+";
            } else {
                mobileNav.style.color="#fff";
            }
            mobileMenu.style.display="none";
            mobileNav.open = 0;
        } else {
            if(mobileNav.post) {
                mobileNav.style.color="#FF6688";
                mobileNav.innerHTML = "目录-";
            } else {
                mobileNav.style.color="#FF6688";
            }
            mobileMenu.style.display="block";
            mobileNav.open = 1;
        }
    }
    if (!mobileNav) {
        mobileNav = document.querySelector(".mobile_content span");
        mobileNav.post = 1;
    }
    if (mobileNav.ontouchend){
        mobileNav.ontouchend = mobileEvent;
    } else {
        mobileNav.onclick = mobileEvent;
    }
    // mobile copyright
    if (is_mobile()) {
        var cc = document.querySelector(".copyright .protocol");
        if (cc) { cc.innerHTML = "CC BY-NC-ND 4.0"; }
        var cu = document.querySelector(".copyright .url");
        if (cu) { cu.innerHTML = cc ? "长按复制或扫码" : "点击查看" }
    }
    // content
    var TOCString = document.querySelector('#markdown-toc').innerHTML
    var contentUl = document.querySelector('.outline ol')
    if(TOCString && contentUl) {
        contentUl.insertAdjacentHTML('afterBegin', TOCString);
    }
}());