(function () {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))
    {
        if (jQuery("#ie_message")) {
            jQuery('#ie_message').modaal({
                type: 'inline',
                is_locked: false,
                overlay_opacity: 0.8,
                content_source: '#inline_ie_message',
                start_open: true,
                close_text: '<svg class="promo__modaal--close" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 20" style="enable-background:new 0 0 20 20;" xml:space="preserve"><rect x="9" class="st0" width="2" height="20"></rect><rect x="9" transform="matrix(4.456506e-11 1 -1 4.456506e-11 20 -4.456506e-10)" class="st0" width="2" height="20"></rect></svg>'
            });
        }
    }
    return false;
})();