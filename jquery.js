$(document).ready(function(){

    // Payment list
    $("#upiqr").click(function(){
        $("#modal").css({"transform":"translateY(0px)"});
        $("#modalbg").css({"display":"block"});
        $(".qrps1").css({"display":"none"});
        $(".obts1").css({"display":"none"});
        $(".upiqr1").css({"display":"block"});
        $(".upiapp1").css({"display":"none"});
        $(".obts1").css({"display":"none"});
        $("#cbtn").css({"display":"none"});
        $("#amt").css({"border-top": "0.75px solid #e4e4e4"});
        $("#amt").removeClass("shad-t");
    });

    $("#qrp").click(function(){
        $("#modal").css({"transform":"translateY(0px)"});
        $("#modalbg").css({"display":"block"});
        $(".qrps1").css({"display":"block"});
        $(".obts1").css({"display":"none"});
        $(".upiqr1").css({"display":"none"});
        $(".upiapp1").css({"display":"none"});
        $("#cbtn").css({"display":"none"});
        $("#amt").css({"border-top": "0.75px solid #e4e4e4"});
        $("#amt").removeClass("shad-t");
    });

    $("#upiapp").click(function(){
        $("#modal").css({"transform":"translateY(0px)"});
        $("#modalbg").css({"display":"block"});
        $(".qrps1").css({"display":"none"});
        $(".obts1").css({"display":"none"});
        $(".upiqr1").css({"display":"none"});
        $(".upiapp1").css({"display":"block"});
        $("#cbtn").css({"display":"none"});
        $("#amt").css({"border-top": "0.75px solid #e4e4e4"});
        $("#amt").removeClass("shad-t");
    });

    $("#cncl").click(function() {
        $("#modalbg").css({"display":"block"});
        $("#modalcancel").css({"display":"block"});
    });

    $("#modalbg").click(function() {
        $("#modalbg").css({ "display":"none"});
        $("#modalcancel").css({"display":"none"});
    })

});

$(function(){

    var selectedBank = null;

    $(".bitem").click(function(){
      
        $(".bitem").css({
            "font-weight":"400",
            "border-color":"#e4e4e4",
            "border-width":"0.75px",
        });
        $(this).css({
            "font-weight":"700",
            "border-color":"#DF7301",
            "border-width":"0.75px",
        });
        selectedBank = $(this).find("a[href]").attr('href').replace('#', '');
        $("#sbmt").prop("disabled", false);

    });

    $("#fsbmt1").submit(function() {
        $("#qrpinfo").removeClass("disabled");
        $(".bnkselected").html(selectedBank);
        $("#fsbmt1").attr("id", "fsbmt2");
        $("#sbmt").removeClass("enabled");
        $("#sbmt").addClass("disabled");

        var bSel = $("#selbank").text();
        console.log(bSel);

        if ($("#selbank").text() == "GCash") {
            $("#gcsbmt").addClass("enabled"); 
            $("#gcsbmt").removeClass("disabled");
        } else if ($("#selbank").text() == "Maya") {
            $("#mysbmt").addClass("enabled");
            $("#mysbmt").removeClass("disabled");
        } 

        event.preventDefault();
    });



    $("#btnchange").click(function() {
        var sb1 = null;
        $("#qrpinfo").addClass("disabled");
        $("#sbmt").removeClass("disabled");
        $("#sbmt").addClass("enabled");
        $("#absbmt").removeClass("enabled");
        $("#absbmt").addClass("disabled");
        $("#kmsbmt").removeClass("enabled");
        $("#kmsbmt").addClass("disabled");  
        $("#sbsbmt").removeClass("enabled");
        $("#sbsbmt").addClass("disabled");
        $("#idsbmt").removeClass("enabled");
        $("#idsbmt").addClass("disabled"); 
        $("#hdsbmt").removeClass("enabled");
        $("#hdsbmt").addClass("disabled");  
        $("#pnsbmt").removeClass("enabled");
        $("#pnsbmt").addClass("disabled");    
        $("#icsbmt").removeClass("enabled");
        $("#icsbmt").addClass("disabled");
        $("#gcsbmt").removeClass("enabled");
        $("#gcsbmt").addClass("disabled");
        $("#mysbmt").removeClass("enabled");
        $("#mysbmt").addClass("disabled");   
    });


});







