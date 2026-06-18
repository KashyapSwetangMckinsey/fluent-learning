api.controller = function () {
    var c = this

    c.loading = false
    c.data = c.data || {}

    c.refresh = function () {
        c.loading = true
        c.server.refresh().then(function () {
            c.loading = false
        })
    }
}
