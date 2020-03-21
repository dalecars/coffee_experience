function toggleSidePanel() {
    if ($(".sidePanel").width() === 0) {
        $(".sidePanel").width("40%");
    } else {
        $(".sidePanel").width(0);
    }
}
