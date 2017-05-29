exp-replace
===

Expansive plugin for the post process files by replacing patterns.

Provides the 'replace' service to minify HTML files.

### To install:

    pak install exp-replace

### To configure in expansive.json:

* replace.enable &mdash; Enable the replace service to post-process files. Defaults to true.
* replace.patterns &mdash; File extensions to process. Defaults to [ 'replace' ].

```
{
    services: {
        'replace': {
            enable: true,
            patterns: {
                'pattern': /re/,
            }
        }
    }
}
```

### Get Pak from

[https://embedthis.com/pak/](https://embedthis.com/pak/)
