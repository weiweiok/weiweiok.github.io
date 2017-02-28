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
    var TOCString = document.querySelector('#markdown-toc')
    var contentUl = document.querySelector('.outline ol')
    if(TOCString && contentUl) {
        contentUl.insertAdjacentHTML('afterBegin', TOCString.innerHTML);
    }
    // mobile comment
    var coment_theme  = '<style type="text/css">';
        coment_theme += '#js-tie-sdk-wrapper .tie-title-bar.z-fix-mode { background: none; padding:0; } ';
        coment_theme += '#js-tie-sdk-wrapper .tie-title-bar .tie-title { display: none; } ';
        coment_theme += '#js-tie-sdk-wrapper .tie-title-bar .user-info{ float: none; margin:0; padding:0; } ';
        coment_theme += '#js-tie-sdk-wrapper .tie-title-bar .fix-input{ margin: 0; text-indent: -9999em; border-radius:0; height: 2rem; background: #f5f4df; border: 1px solid #d3d3d3; } ';
        coment_theme += '#js-tie-sdk-wrapper .tie-tab-bar{ display: none; } ';
        coment_theme += '#js-tie-sdk-wrapper .tie-panel-bar{ margin: 0; } ';
        coment_theme += '#js-tie-sdk-wrapper .tie-list .single-tie{ border: 1px dotted #d3d3d3; margin-bottom: 0.2rem; } ';
        coment_theme += '#js-tie-sdk-wrapper .tie-list .single-tie .tie-bdy .bdy-inner{ margin-left: 0.2rem; } ';
        coment_theme += '#js-tie-sdk-wrapper .tie-list .single-tie .photo, ';
        coment_theme += '#js-tie-sdk-wrapper .tie-panel-bar .tie-empty-tip, ';
        coment_theme += '#js-tie-sdk-wrapper .tie-panel-bar .tie-no-more{ display: none; border: none; }';
        coment_theme += '</style>';
    var comment_try_count = 0;
    var comment_refresh_theme = function() {
        if (comment_try_count >= 60) { clearInterval(comment_timer); } else { comment_try_count ++; }
        var comment_iframe = document.getElementById("tie-js-sdk-ifr").contentWindow.document.querySelector("body");  
        if (comment_iframe) { 
            comment_iframe.insertAdjacentHTML("beforeEnd", coment_theme);
            clearInterval(comment_timer);
            return;
        }
    }
    if (is_mobile()) {
        //var comment_timer = setInterval(comment_refresh_theme, 500);
        document.querySelector("#cloud-tie-plastic-surgery").style.display="block";
    }
})();