$(".banner_ul li").click(function () {
    $(this).addClass("bannerli").siblings().removeClass("bannerli");
})

jQuery(".picScroll-left").slide({
    titCell: ".hd ul",
    mainCell: ".bd ul",
    autoPage: true,
    effect: "left",
    autoPlay: true,
    vis: 3,
    trigger: "click"
});

function tabs(menu,cont,cur){
    menu.click(function() {
        var index = menu.index(this);
        $(this).addClass(cur).siblings().removeClass(cur);
        cont.children().eq(index).fadeIn().siblings().hide();
    });
}


