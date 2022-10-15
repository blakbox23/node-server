const fs = require('fs');
const http = require('http');
const path = require('path')

const server = http.createServer((req, res)=>{
  if(req.url==="/"){
    fs.readFile( path.join(__dirname, 'public', 'index.html'), (err, data)=>{
        if(err) throw err
        res.writeHead(200, {'content-Type': 'text/html'});
        res.end(data)
    })
  }else if(req.url==="/about"){
    fs.readFile( path.join(__dirname, 'public', 'about.html'), (err, data)=>{
        if(err) throw err
        res.writeHead(200, {'content-Type':'text/html'})
        res.end(data)

    })
  }else if(req.url==="/contact-me"){
    fs.readFile(path.join(__dirname, 'public', 'contact-me.html'), (err, data)=>{
        if(err) throw err
        res.writeHead(200,{'content-Type':'text/html'})
        res.end(data)
    })
  }else{
    fs.readFile(path.join(__dirname, "public", "404.html"), (err, data)=>{
        if(err) throw err
        res.writeHead(404, {'content-Type': 'text/html'})
        res.end(data)
    })
  }
})

const PORT = process.env.PORT || 5000

server.listen(5000, ()=>console.log(`server running on port ${PORT}...`))


