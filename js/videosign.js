$(document).ready(function () {
    $('#tooltip-message').on('show.bs.modal', function (e) {
    })

    // Tooltips for Meeting Controls
    $(".meeting-button").mouseenter((e) => {
        const myEl = e.currentTarget
        const title = myEl.dataset.toolTitle
        const message = myEl.dataset.toolMessage

        $('.modal-title').html(title)
        $('.modal-body').html(message)
        $("#tooltip-message").modal('show')
    })

    $(".meeting-button").mouseleave((e) => {
        $("#tooltip-message").modal('hide')
    })

    // Tooltips for Document Controls
    $(".doc-tooltip").mouseenter((e) => {
        const myEl = e.currentTarget
        const title = myEl.dataset.toolTitle
        const message = myEl.dataset.toolMessage

        $('.modal-title').html(title)
        $('.modal-body').html(message)
        $("#tooltip-message").modal('show')
    })

    $(".doc-tooltip").mouseleave((e) => {
        $("#tooltip-message").modal('hide')
    })

    // Controls for opening and closing document
    $("#open-document").click(() => {
        $(".logo-image, .menu-heading, .left-links, .center-panel").addClass("hide-element")
        $(".meeting-button").css("text-align", "right")
        $(".doc-view, .tool-menu").removeClass("hide-element")
        $(".meeting-grid").addClass("doc-view-enabled")
    })

    $("#close-document").click(() => {
        $(".logo-image, .menu-heading, .left-links, .center-panel").removeClass("hide-element")
        $(".meeting-button").css("text-align", "left")
        $(".doc-view, .tool-menu").addClass("hide-element")
        $(".meeting-grid").removeClass("doc-view-enabled")
    })
})