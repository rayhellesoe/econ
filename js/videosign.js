$(document).ready(function () {
    $('#tooltip-message').on('show.bs.modal', function (e) {
    })

    // Tooltips for Meeting Controls
    $(".meeting-button").mouseenter((e) => {
        const myEl = e.currentTarget
        const title = myEl.dataset.toolTitle
        const message = myEl.dataset.toolMessage

        $(myEl).css("font-weight", "700")

        $('.modal-title').html(title)
        $('.modal-body').html(message)
        $("#tooltip-message").modal('show')
    })

    $(".meeting-button").mouseleave((e) => {
        $(e.currentTarget).css("font-weight", "400")
        $("#tooltip-message").modal('hide')
    })

    // Tooltips for Document and Media Controls
    $(".doc-tooltip, .stream-control-option").mouseenter((e) => {
        const myEl = e.currentTarget
        const title = myEl.dataset.toolTitle
        const message = myEl.dataset.toolMessage

        $('.modal-title').html(title)
        $('.modal-body').html(message)
        $("#tooltip-message").modal('show')
    })

    $(".doc-tooltip, .stream-control-option").mouseleave((e) => {
        $("#tooltip-message").modal('hide')
    })

    // Controls for opening and closing document
    $("#open-document").click(() => {
        $(".logo-image, .menu-heading, .left-links, .center-panel").addClass("hide-element")
        $(".meeting-button").css("text-align", "right")
        $(".doc-view, .tool-menu").removeClass("hide-element")
        $(".meeting-grid").addClass("doc-view-enabled")
        $("hr").addClass("half-hr")
        $(".btn-close-doc").removeClass("hide-element")
        $(".btn-control").addClass("btn-control-doc-open")
    })

    $(".close-document").click(() => {
        $(".logo-image, .menu-heading, .left-links, .center-panel").removeClass("hide-element")
        $(".meeting-button").css("text-align", "left")
        $(".doc-view, .tool-menu").addClass("hide-element")
        $(".meeting-grid").removeClass("doc-view-enabled")
        $("hr").removeClass("half-hr")
        $(".btn-close-doc").addClass("hide-element")
        $(".btn-control").removeClass("btn-control-doc-open")
    })

    // Toggle media controls
    $("#toggle-media-controls").click(function(){
        $(".stream-control-menu").toggleClass("hide-menu-controls");
    })

    $(".btn-control").click(function(){
        console.log(document.getElementsByClassName("btn-control")[0].innerText)
        if (document.getElementsByClassName("btn-control")[0].innerText === "Take Control") {
            document.getElementsByClassName("btn-control")[0].innerText= "Give Control"
        } else {
            document.getElementsByClassName("btn-control")[0].innerText= "Take Control"
        }
    })

    $(".btn-control").mouseenter(function(){
        $('.modal-title').html("Give and Take Control")
        $('.modal-body').html("This feature controls your Virtual Office you need to remember that you have to give control or take control to access any of the features in your room. Even when you join the room you have to take control before preforming features like upload document.")
        $("#tooltip-message").modal('show')
    })

    $(".btn-control").mouseleave(function(){
        $("#tooltip-message").modal('hide')
    })

    $(".cam").mouseenter(function(){
        $('.modal-title').html("Upto 5 Live Cameras")
        $('.modal-body').html("VideoSign accommodates for up to 5 people within your Virtual Office. You will always appear small to yourself and big to others in your room. You can always turn off you video if it is not appropriate or you have a poor internet connection. Once you have created a VideoSign workspace you can use it anytime you like. The host does not need to be present and in this case other invitees can meet each other at anytime. When documents are uploaded everyone in your room will be notified by email.")
        $("#tooltip-message").modal('show')
    })

    $(".cam").mouseleave(function(){
        $("#tooltip-message").modal('hide')
    })
})