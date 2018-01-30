var categories = ["tbo", "media", "science", "record", "quick", "history", "featured"];

console.log(categories);

for (var i of categories) {

    console.log(i);

    $("picker_bckgrd_" + i)
        .colpick({
            layout: "hex",
            submit: 1,
            color: "#112049",
            onSubmit: function(hsb, hex, rgb, el) {
                $(el).colpickHide();
            },
            onChange: function(hsb, hex, rgb, el, bySetColor) {
                $("#block").css("background-color", "#" + hex);
                $(el).css("border-color", "#" + hex);
                if (!bySetColor) $(el).val("#" + hex);
            }
        })
        .keyup(function() {
            $(this).colpickSetColor(this.value);
        });

    $("picker_color_" + i)
        .colpick({
            layout: "hex",
            submit: 1,
            color: "#f6f6f6",
            onSubmit: function(hsb, hex, rgb, el) {
                $(el).colpickHide();
            },
            onChange: function(hsb, hex, rgb, el, bySetColor) {
                $("#block").css("color", "#" + hex);
                $(el).css("border-color", "#" + hex);
                if (!bySetColor) $(el).val("#" + hex);
            }
        })
        .keyup(function() {
            $(this).colpickSetColor(this.value);
        });
}