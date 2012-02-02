/*
 * Every time the form field is changed, sanitize its contents with the given
 * function to only allow input of a certain form.
 */
(function ($) {
    var inputEvents = "input";
    if (!("oninput" in document || "oninput" in $("<input>")[0])) {
        inputEvents += " keypress keyup";
    }

    jQuery.fn.restrict = function(sanitizationFunc) {
        $(this).bind(inputEvents, function(e) {
        	var cursor; 
        	if($.browser.msie && parseInt($.browser.version, 10) <=8){
        		if(e.which == 37 || e.which == 39)
        			var cursor = getCaretPosition($(this));
        	}
            $(this).val(sanitizationFunc($(this).val()));
            if($.browser.msie && parseInt($.browser.version, 10) <=8){
            	if(e.which == 37 || e.which == 39)
            	setCaretPosition($(this), cursor);
            }
        });
    };

    /*
     * Every time the form field is changed, modify its contents by eliminating
     * matches for the given regular expression within the field.
     */
    jQuery.fn.regexRestrict = function(regex){
        var sanitize = function(text) {
            return text.replace(regex, '');
        };
        $(this).restrict(sanitize);
    }
})(jQuery);

function setCaretPosition(elem, caretPos) {
    if(elem != null) {
        if(elem.createTextRange) {
            var range = elem.createTextRange();
            range.move('character', caretPos);
            range.select();
        }
        else {
            if(elem.selectionStart) {
                elem.focus();
                elem.setSelectionRange(caretPos, caretPos);
            }
            else
                elem.focus();
        }
    }
}

function GetCaretPosition (ctrl) {
    var CaretPos = 0;

    if (document.selection) {  // IE
        ctrl.focus ();
        var Sel = document.selection.createRange ();
        var Sel2 = Sel.duplicate();
        Sel2.moveToElementText(ctrl);
        var CaretPos = -1;
        while(Sel2.inRange(Sel))
        {
            Sel2.moveStart('character');
            CaretPos++;
        }
    }

    else if (ctrl.selectionStart || ctrl.selectionStart == '0') {  // Others
        CaretPos = ctrl.selectionStart;
    }
    return (CaretPos);
}