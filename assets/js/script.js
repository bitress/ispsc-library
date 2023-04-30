var author = '<div style="position: fixed;bottom: 0;right: 20px;background-color: #fff;box-shadow: 0 4px 8px rgba(0,0,0,.05);border-radius: 3px 3px 0 0;font-size: 12px;padding: 5px 10px;">♥ Made with Love by <a href="https://itscyanne.xyz">404 Group Not Found</a> &nbsp;</div>';
var body = document.getElementsByTagName('body')[0];
body.insertAdjacentHTML('beforeend', author);

(function($) {
    $(function() {

        //  open and close nav 
        $('#navbar-toggle').click(function() {
            $('nav ul').slideToggle();
        });


        // Hamburger toggle
        $('#navbar-toggle').on('click', function() {
            this.classList.toggle('active');
        });


        // If a link has a dropdown, add sub menu toggle.
        $('nav ul li a:not(:only-child)').click(function(e) {
            $(this).siblings('.navbar-dropdown').slideToggle("slow");

            // Close dropdown when select another dropdown
            $('.navbar-dropdown').not($(this).siblings()).hide("slow");
            e.stopPropagation();
        });


        // Click outside the dropdown will remove the dropdown class
        $('html').click(function() {
            $('.navbar-dropdown').hide();
        });
    });
})(jQuery);