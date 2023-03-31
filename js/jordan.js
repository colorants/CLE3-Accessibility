let JSONItems = [];
let $;

$.toJSON("js/jordan.json", function (data) {
    JSONItems = data;
    console.log(JSONItems)
})