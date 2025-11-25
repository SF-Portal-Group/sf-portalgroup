$(document).ready(function() {
    if ( $(window).width() >= 1025 ) {
        // $("div.responsive_tabs-shell").show();  /*** Only for testing; Show the old Tabs ***/
        // $(".tab_html_wrapper").show();  /*** Only for testing; Show the old Tabs ***/
        // $(".responsive_tabs-shell .before").show();  /*** Only for testing; Show the old Tabs ***/
        // $("div#basket-list-title").show();  /*** Only for testing; Show the old Tabs ***/

        $( "#header-wrapper" ).after('<div id="TabsDiv"><nav id="TabsNav"><ul id="TabsMenu">'); /** Create the top nav place holder **/
        var tabid = '';
        var appendid = '';

        $('#tab_responsive_tabs [id^="tab_"]').each(function() {
            /**** Top most tabs menu item ****/
            if ($("#TMul_" + $(this).attr("id")).length > 0 ) {
                return true;
            } /*** if it has already been created then skip to next ***/

            //console.log( "TOP - " + $(this).find("dfn").first().text() + " : " + $(this).attr("id") + " | " + $(this).find("dfn").length );
            appendid = 'TabsMenu';
            tabid = $(this).attr("id");

            if ($(this).find("dfn").length == 1) {
                $("#" + appendid).append( '<li class="onlyli" id="TMli_' + tabid + '">' + $(this).find("dfn").first().html() + '</li>' ); /**** Top most menu link with no sub items ****/
            }
            else {
                $("#" + appendid).append( '<li class="topli" id="TMli_' + tabid + '">' + $(this).find("dfn").first().text() + '<ul id="TMul_' + tabid + '"></ul></li>' ); /*Top most menu with sub items*/
            }

            /**** Sub tabs menu items ****/
            $(this).children().find('dfn').each(function () {
                //console.log( "---- " + $(this).text() + " == " + $(this).parents('div [id^="tab_"]').parents('div [id^="tab_"]').attr("id") + " /// " + $(this).parents('div [id^="tab_"]').first().attr("id") + " || " + $(this).is(":last-child") );
                if ($(this).is(":last-child")) {
                    appendid = 'TMul_' + $(this).parents('div [id^="tab_"]').first().attr("id");
                    tabid = $(this).parents('div [id^="tab_"]').parents('div [id^="tab_"]').attr("id");

                    if (tabid == 'tab_responsive_tabs') {
                        tabid = 'TabsMenu';
                    }

                    $("#" + appendid).append( '<li class="subtab">' + $(this).html() + '</li>' ); /**** All sub item links ****/
                }
                else {
                    tabid = $(this).parents('div [id^="tab_"]').first().attr("id");

                    if (tabid == 'tab_responsive_tabs') {
                        tabid = 'TabsMenu';
                    }

                    appendid = 'TMul_' + $(this).parents('div [id^="tab_"]').parents('div [id^="tab_"]').attr("id");
                    $("#" + appendid).append( '<li class="subtopli" id="MMli_' + tabid + '">' + $(this).text() + '<ul id="TMul_' + tabid + '"></ul></li>' ); /**** Middle menu with sub items ****/
                }
            });
        });

        // Hide "LandingPage" tab
        $( "li.onlyli:contains('LandingPage')" ).css( "display", "none" );
        $( ".toptabs:contains('undefined')" ).hide();  /** if on a page that tabs are not exposed, hide the place holders. **/

        //Jake Boyd This section moves the logo to the TabsDiv for a better structured responsive design
        if ($('#desklogo').length && $('#TabsDiv').length) {
            $('#desklogo').prependTo('#TabsDiv');
        }
    }
})