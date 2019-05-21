const express = require('express')

// Get the Vue instance
const createApp = require('./dist/server-bundle')

// Create a renderer
const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync('./index.template.html', 'utf-8')
})

const server = express()

// serving static resources (not as vue routes!)
server.use('/dist', express.static(__dirname + '/dist'));

server.get('*', (req, res) => {
	const context = { url: req.url }
	console.log('**incoming request: ' + req.url);

  const promise = createApp.default(context)
  
  promise.then(app => {
	  // Render the Vue instance to HTML
	  renderer.renderToString(app, (err, html) => {
		if (err) throw err
		console.log(html)
		res.end(html)
	  })
  }).catch(val => {
	  console.log(JSON.stringify(val))
	  res.status(500).end(JSON.stringify(val))
  });
  
})

server.listen(3000, function () {
  console.log('SSR app listening on port 3000')
})