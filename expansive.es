Expansive.load({

    services: {
        name:       'replace',

        transforms: {
            mappings:   {
                'replace': 'html'
            },

            init: function(transform) { },

            render: function(contents, meta, transform) {
                let service = transform.service
                for (re in service.patterns) {
                    let subst = service.patterns[re]
                    re = RegExp(re, 'g')
                    contents = contents.replace(re, subst)
                }
                return contents
            }
        }
    }
})
