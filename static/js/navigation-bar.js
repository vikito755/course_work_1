$(window).on('load', function() {

    const $fullScreenNav = $('#fullScreenNav');

    $('#navigationOpenButton').on('click', openNav);

    $('#navigationCloseButton').on('click', closeNav);

    function openNav() {
        $fullScreenNav.css('height', '100%');
    }

    function closeNav() {
        $fullScreenNav.css('height', '0%');
    }
})