! function(e) {
    function r(r) {
        var a = {
            '[name="c_name"]': "Name",
            '[name="c_email"]': "Email",
            '[name="c_phone"]': "Phone",
            '[name="c_inquiry"]': "Inquiry",
            '[name="_file"]':"File"
        };
        e.each(a, function(e, a) {
            return "" == r.find(e).val() ? (r.find(e).addClass("pcf-error-input"), r.find(".pcf-" + a.toLowerCase() + "-error").text(a + " cannot be empty").addClass("pcf-error-message"), !1) : (r.find(e).removeClass("pcf-error-input"), void r.find(".pcf-" + a.toLowerCase() + "-error").empty())
        })
    }

    function a() {
        var e = "<style type='text/css'>";
        return e += " #pcf { max-width: 200px; } ", e += " .pcf-label { display: block; margin-top: 10px; } ", e += " .pcf-input, .pcf-description { -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; width: 100%; -webkit-border-radius: 3px; border-radius: 3px; border: 1px solid #c0c0c0; padding: 6px 6px;} ", e += " .pcf-submit-button { display: block; margin: 10px 0; } ", e += " .pcf-error-input { border: 1px solid red; } ", e += " .pcf-error-message { color: red; font-size: 85%; } ", e += " .pcf-clearfix { clear: both; } ", e += " .pcf-success { color: green; } ", e += "</style>"
    }

    function n() {
        var e = "<noscript><strong style='color:red;'>Please enable JavaScript to use this form</strong></noscript>";
        return e += "<form id='pcf'>", 
        e += "<label for='c_name' class='pcf-label'>Name:</label>", 
        e += "<input name='c_name' class='pcf-input' type='text' />", 
        
        e += "<span class='pcf-name-error pcf-error-message'></span>", 
        e += "<label for='c_email' class='pcf-label'>Email:</label>", 
        e += "<input name='c_email' class='pcf-input' type='email' />", 
        
        e += "<span class='pcf-email-error pcf-error-message'></span>", 
        e += "<label for='c_phone' class='pcf-label'>Phone:</label>", 
        e += "<input name='c_phone' class='pcf-input' type='tel' />", 

        e += "<span class='pcf-email-error pcf-error-message'></span>", 
        e += "<label for='c_file' class='pcf-label'>Attach File:</label>", 
        e += "<input name='c_file' class='pcf-input' type='file' />", 
        
        e += "<span class='pcf-phone-error pcf-error-message'></span>", 
        e += "<label for='c_name' class='pcf-label'>What do you need?</label>", 
        e += "<textarea name='c_inquiry' class='pcf-description'></textarea>", 
        
        e += "<span class='pcf-inquiry-error pcf-error-message'></span>", 
        e += "<input type='submit' value='Send' class='pcf-submit-button' /><div class='pcf-clearfix'></div>", 

        e += "</form>"
    }
    e.fn.printavoInquiryForm = function(s) {
        e("head").prepend(e(a()));
        var p = e("#printavo-contact-form").html(e(n())).find("#pcf");
        p.prepend("<input type='hidden' name='key' value='" + s + "' />"), p.on("submit", function(a) {
            a.preventDefault();
            var n = r(p);
            0 != n && e.ajax({
                type: "POST",
                data: p.serialize(),
                url: "https://www.printavo.com/form/inquiries",
                beforeSend: function() {
                    p.find(".pcf-form-error").hide(), p.find("[type='submit']").val("Sending..."), p.find("[type='submit']").attr("disabled", "disabled")
                },
                success: function() {
                    p.find("[type='submit']").val("Sent!"), p.append("<span class='pcf-success'>Your inquiry has been sent! We will be in touch.</span>")
                },
                error: function(e, r, a) {
                    console.log(e, r, a), p.find("[type='submit']").val("Send"), p.find("[type='submit']").removeAttr("disabled"), p.append("<span class='pcf-error-message pcf-form-error'>There was an error, please try again.</span>")
                }
            })
        })
    }
}(jQuery);
