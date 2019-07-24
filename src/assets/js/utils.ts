declare let $: any;


// ------------------------------------------------------
// @Window load
// ------------------------------------------------------

$(window).on('load', () => {

    // ------------------------------------------------------
    // @Popover
    // ------------------------------------------------------

    $('[data-toggle="popover"]').popover();


    // ------------------------------------------------------
    // @Tooltips
    // ------------------------------------------------------

    $('[data-toggle="tooltip"]').tooltip();


    // ------------------------------------------------------
    // @Form group label
    // ------------------------------------------------------

    $(document).on('change', '.form-group-label .form-control', function() {
        if ($(this).val() && !$(this).hasClass('has-value')) {
            $(this).addClass('has-value');
        } else if (!$(this).val()) {
            $(this).removeClass('has-value');
        }
    });

    $('.form-group-label .form-control').each((index, el) => {
        if ($(el).val()) {
            $(el).addClass('has-value');
        } else {
            $(el).removeClass('has-value');
        }
    });


    // ------------------------------------------------------
    // @Form input password
    // ------------------------------------------------------

    $(document).on('click', '.input-password', function() {
        let i = $(this).find('i');
        let input = $(this).parent().parent().parent().find('input');

        if (i.hasClass('fa-eye-slash')) {
            i.removeClass('fa-eye-slash').addClass('fa-eye');
            input.attr('type', 'text');
        } else {
            i.removeClass('fa-eye').addClass('fa-eye-slash');
            input.attr('type', 'password');
        }

        setTimeout(() => {
            input.focus();
        }, 100);
    });


    // ------------------------------------------------------
    // @Nav
    // ------------------------------------------------------

    let parentRoute = $('nav.sidebar .sidebar-menu a.active').parent().parent();

    if (parentRoute.is('ul.dropdown-menu')) {
        parentRoute.parent().addClass('open');
    }

    $(document).on('click', '.mobile-toggle-nav', function() {
        $(this).toggleClass('is-active');
    });
});
