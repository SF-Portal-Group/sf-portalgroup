// Note: This function is not called anywhere in the previous version of this codebase/library

/* Rob Carberry 2024 */
/* Since we are wrapping the item images, we need to customize the pdna set_preview_image function */
function set_preview_image(elem, thumburl, largeurl) {
    // console.log( $(elem).parent().find('a').index($(elem)) );
    var idx = $(elem).parent().find('a').index($(elem));
    var img = $(elem).parents('.image-row,.item-thumbnail').find('.image-container .imgwrap > a > img, .image-container .imgwrap > img, .image-container .imgwrap > label > img');
    var a = $(elem).parents('.image-row,.item-thumbnail').find('.image-container .imgwrap > a');
    var imgbtn = $(elem).parents('.image-row').find('input[type="image"][src!="img/catalog_add.gif"]');
    var mobile_img = $(elem).parents('.detail_image_wrapper').find('#d_preview_image > img');
    // console.log(thumburl + ' :|: ' + largeurl);

    if (img.length) {
        thumburl = largeurl;
        img.attr('src', thumburl);
    }
    else if (imgbtn.length) {
        thumburl = largeurl;
        imgbtn.attr('src', thumburl);
    }
    else if (mobile_img.length) {
        mobile_img.attr('src', thumburl);
    }

    if (a.length) {
        if (largeurl.startswith('img/')) {
            a.attr('href', largeurl);
        }
        else {
            a.attr('onclick', unescape(largeurl));
            // a.attr('href', largeurl);
        }
    }

    // When clicking/changing Thumbnail images on Apparel, change the dropdown as well.
    var colorselect = $(elem).closest('.stretchy_cols.responsive-item.image-row').find('.colorselect');

    if ($(colorselect).length > 0) {
        $(colorselect).prop('selectedIndex', idx);
    }
}