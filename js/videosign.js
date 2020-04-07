$(document).ready(function () {
    $('#tooltip-message').on('show.bs.modal', function (e) {
    })

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
})