AOS.init({
    duration: 3000,
});
let a = $(".popup").css("display", "block").slideUp(5000);
let autoplay = new Typed(".autoplay", {
    strings: ["Welcome to my Portfolio...."],
    typeSpeed: 50,
    backSpeed: 50,
});

let typed = new Typed(".auto-play", {
    strings: ["Frontend Developere", "Web Designer", "Shopify Developer"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
});

// bottom to top

let demo = () => {
    let progress = $(".progress");
    let header = $(".position-fixed");
    let pos = document.documentElement.scrollTop;
    console.log(pos);
    if (pos > 100) {
        progress.css("display", "grid");
        header.css({
            position: "fixed",
            "margin-top": -50,
            "z-index": 999,
            padding: "30px 0",
        });
    } else {
        progress.css("display", "none");
        header.css({ position: "static", "margin-top": 30 });
    }
    $(".progress").click(function () {
        document.documentElement.scrollTop = 0;
    });
};
window.onscroll = demo;
window.onload = demo;

$(".theme").mouseover(() => {
    $("*").css({
        backgroundColor: "white",
        color: "black",
    });
    $(".theme").css("backgroundColor", "black");
    $(".theme-value h4").css("display", "none");
    $(".theme-value").addClass("refresh-page");
    $(".refresh-page span").text("Refresh Page -->");
    $(".detailes_about span").css("opacity", 1);
    $(".c_33 h2").css("color", "black");
    $(".c_33").mouseenter(() => {
        $("h2").css("color", "#c20550");
    });
    $(".c_33").mouseleave(() => {
        $("h2").css("color", "black");
    });
    $(".detailes_about h5 a").css({
        color: "white",
        backgroundColor: "black",
    });
    $(".detailes_about h5 a").mouseenter(() => {
        $(".detailes_about h5 a").css(
            "color",
            "#c20550",
            "backgroundColor",
            "white",
            "border",
            "1px solid black"
        );
    });
    $(".detailes_about h5 a").mouseleave(() => {
        $(".detailes_about h5 a").css({
            color: "white",
            backgroundColor: "black",
        });
    });
    $(".skill_rang .html").css("backgroundColor", "#787878");
    $(".skill_rang .css").css("backgroundColor", "#787878");
    $(".skill_rang .js").css("backgroundColor", "#787878");
    $(".skill_rang .clanguage").css("backgroundColor", "#787878");
    $(".skill_rang .jquery").css("backgroundColor", "#787878");
    $(".skill_rang .cplus").css("backgroundColor", "#787878");
    $(".skill_rang .bootstrap").css("backgroundColor", "#787878");
    $(".p_33 h2 a ").css("color", "#c20550");
    $("h3").css("color", "black");
    $(".d_33").mouseenter(() => {
        $("h3").css("color", "#c20550");
    });
    $(".d_33").mouseleave(() => {
        $("h3").css("color", "black");
    });
    $(".progress-value").css("color", "black");
    $(".progress-value i").css("color", "black");
    $(".progress-value").mouseenter(() => {
        $(".progress-value").css("color", "#c20550");
        $(".progress-value i").css("color", "#c20550");
    });
    $(".progress-value").mouseleave(() => {
        $(".progress-value").css("color", "black");
        $(".progress-value i").css("color", "black");
    });
});
