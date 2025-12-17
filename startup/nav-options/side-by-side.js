$("#header_logo img").appendTo("#header-wrapper");
$("#header-wrapper").append(`<nav><ul class="nav">`);

$(`#tab_responsive_tabs [id^="tab_"]`).each(function() {
    // If the tab has no sub-items, add it to the nav as a link.
    // If it does have sub-items, add it to the nav as a hoverable container.
    if ( $(this).find("dfn").length == 1 ) {
        $(".nav").append(`<li>${ $(this).find("dfn").first().html() }</li>`);
    }
    else {
        let sub = $(`<ul class="nav__tab-item">`);
        let menu = $(`<li class="nav__tab-menu"><a><span>${ $(this).find("dfn").first().text() }</span><i class="fa fa-sort-desc"></i></a></li>`)

        $(this).children().find('dfn').each(function() {
            if ( $(this).is(":last-child") ) {
                sub.append(`<li>${ $(this).html() }</li>`);
            }
        });

        menu.append(sub);
        $(".nav").append(menu);
        // Bad code; there's no reason for this to use a tab ID instead of just looping
        /*$(".nav").append(`
            
                <a>
                    <span>${ $(this).find("dfn").first().text() }</span>
                    <i class="fa fa-sort-desc"></i>
                </a>
                <ul class="tab-submenu" id="nav-${tabID}"></ul>
            </li>
        `);*/
    }
});