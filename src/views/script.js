var categories = ["tbo", "media", "science", "record", "quick", "history"];

for (var i of categories) {
    $("#picker_bckgrd_" + i)
        .colpick({
            layout: "hex",
            submit: 1,
            color: "#f6f6f6",
            onSubmit: function(hsb, hex, rgb, el) {
                $(el).colpickHide();
            },
            onChange: function(hsb, hex, rgb, el, bySetColor) {
                $(el).css("border-color", "#" + hex);
                if (!bySetColor) $(el).val("#" + hex);
            }
        })
        .keyup(function() {
            $(this).colpickSetColor(this.value);
        });

    $("#picker_color_" + i)
        .colpick({
            layout: "hex",
            submit: 1,
            color: "#112049",
            onSubmit: function(hsb, hex, rgb, el) {
                $(el).colpickHide();
            },
            onChange: function(hsb, hex, rgb, el, bySetColor, i) {
                $(el).css("border-color", "#" + hex);
                if (!bySetColor) $(el).val("#" + hex);
            }
        })
        .keyup(function() {
            $(this).colpickSetColor(this.value);
        });
}

class Category {
    constructor(name, id, background_color, text_color) {
        this.name = name;
        this.id = id;
        this.background_color = background_color;
        this.text_color = text_color;
    }

    get css() {
        return this.generate_css();
    }

    generate_css() {
        var custom_css;
        return custom_css =
            ".custom-grid-homepage .vc_grid .vc_grid-item.vc_grid-term-" + this.id + " .vc_grid-item-mini .post-blog-custom-patienthm {background-color: " + this.background_color + "!important;}.custom-grid-homepage .vc_grid .vc_grid-item.vc_grid-term-" + this.id + " .vc_grid-item-mini .post-blog-custom-patienthm .title-post-blog-custom-patienthm h4,.custom-grid-homepage .vc_grid .vc_grid-item.vc_grid-term-" + this.id + " .vc_grid-item-mini .post-blog-custom-patienthm .paragraph-post-blog-custom-patienthm > p,.custom-grid-homepage .vc_grid .vc_grid-item.vc_grid-term-" + this.id + " .vc_grid-item-mini .post-blog-custom-patienthm .btn-post-blog-custom-patienthm>a, .custom-grid-homepage .vc_grid .vc_grid-item.vc_grid-term-" + this.id + " .vc_grid-item-mini .post-blog-custom-patienthm .categories-post-blog-custom-patienthm > .vc_grid-filter-item > span {color: " + this.text_color + "!important; }";
    }
}

function create_css_tbo(picker_bckgrd_tbo, picker_color_tbo) {
    var bg_color = this.picker_bckgrd_tbo.value;
    var txt_color = this.picker_color_tbo.value;
    const tbo = new Category("tbo", 106, bg_color, txt_color);
    return tbo.css;
};

function create_css_media(picker_bckgrd_media, picker_color_media) {
    var bg_color = this.picker_bckgrd_media.value;
    var txt_color = this.picker_color_media.value;
    const media = new Category("media", 1, bg_color, txt_color);
    console.log(media.css);
    return media.css;
};

function create_css_science(picker_bckgrd_science, picker_color_science) {
    var bg_color = this.picker_bckgrd_science.value;
    var txt_color = this.picker_color_science.value;
    const science = new Category("science", 103, bg_color, txt_color);
    console.log(science.css);
    return science.css;
};

function create_css_ftr(picker_bckgrd_record, picker_color_record) {
    var bg_color = this.picker_bckgrd_record.value;
    var txt_color = this.picker_color_record.value;
    const ftr = new Category("ftr", 108, bg_color, txt_color);
    console.log(ftr.css);
    return ftr.css;
};

function create_css_quick(picker_bckgrd_quick, picker_color_quick) {
    var bg_color = this.picker_bckgrd_quick.value;
    var txt_color = this.picker_color_quick.value;
    const quick = new Category("quick", 117, bg_color, txt_color);
    console.log(quick.css);
    return quick.css;
};

function create_css_history(picker_bckgrd_history, picker_color_history) {
    var bg_color = this.picker_bckgrd_history.value;
    var txt_color = this.picker_color_history.value;
    const history = new Category("history", 118, bg_color, txt_color);
    console.log(history.css);
    return history.css;
};

function print_css() {
    var tbo = create_css_tbo(picker_bckgrd_tbo, picker_color_tbo);
    var media = create_css_media(picker_bckgrd_media, picker_color_media);
    var science = create_css_science(picker_bckgrd_science, picker_color_science);
    var ftr = create_css_ftr(picker_bckgrd_record, picker_color_record);
    var quick = create_css_quick(picker_bckgrd_quick, picker_color_quick);
    var history = create_css_history(picker_bckgrd_history, picker_color_history);

    document.getElementById('main_css').value = tbo + media + science + ftr + quick + history;
}

function copy() {
    /* Get the text field */
    var copyText = document.getElementById("main_css");

    /* Select the text field */
    copyText.select();

    /* Copy the text inside the text field */
    document.execCommand("Copy");
}