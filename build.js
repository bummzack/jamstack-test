var Metalsmith  = require('metalsmith'),
    markdown    = require('metalsmith-markdown'),
    templates   = require('metalsmith-templates'),
    partials    = require('metalsmith-discover-partials'),
    collections = require('metalsmith-collections'),
    permalinks  = require('metalsmith-permalinks');

Metalsmith(__dirname)
    .source('./src')
    .destination('./build')
    .clean(true)
    .use(collections({
      articles: '**/*.md'
    }))
    .use(markdown())
    .use(permalinks({
      relative: false
    }))
    .use(partials({
      directory: 'templates/partials',
      pattern: /\.hbs$/
    }))
    .use(templates('handlebars'))
    .build(function (err) { if(err) console.log(err) })
