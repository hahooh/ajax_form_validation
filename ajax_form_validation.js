function validate_ajax_form(form) {
        var targets = form.find('[data-form-validation=verify]');
        return targets.map(function (key, element) {
            if (!element.checkValidity())
                return element;
        });
    }
