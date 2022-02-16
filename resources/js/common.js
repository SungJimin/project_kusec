$(document).ready(function () {

    // include html
    $(".load-html").each(function () {
        $(this).load(this.dataset.source);
    });
    
});