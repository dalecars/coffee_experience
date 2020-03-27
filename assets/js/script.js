function toggleSidePanel() {
    if ($(".sidePanel").width() === 0) {
        $(".sidePanel").width("60%");
        $('body').addClass('noScroll');
    } else {
        $(".sidePanel").width(0);
        $('body').removeClass('noScroll');
    }
}

function changeIcon(icon) {
  icon.classList.toggle("change");
}

$(document).ready(function(){
    $('.scalize').scalize({
        width : 800,
        height : 500,
        animationSelector :'pulse',
    });
});
