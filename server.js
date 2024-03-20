const http =require('http');
const controller = require ('./controller');
const { findUser } = require('./filter')

const PORT = 3333;

function getBody(req) {
    return new Promise((resolve, reject) => {
      const data = [];
      req.on("data", (chunk) => {
        data.push(chunk);
      });
      req.on("end", () => {
        const body = Buffer.concat(data).toString();
        if (body) {
          resolve(JSON.parse(body));
          return;
        }
        resolve({});
      });
  
      req.on("error", (err) => {
        reject(err);
      });
    });
  }
  
  function authenticate(req, res, next) {
    const { username, password } = req.headers;
   // console.log("authenticate", req.body);
    const user = findUser(username);
    if (!user) {
      res.statusCode = 401;
      res.end('add a username');
      return;
    }
    if (user.username !== username || user.password !== password) {
      res.statusCode = 401;
      res.end('incorrect username or password');
      return;
    }
    next(req, res);
  }

const requestHandler = async(req,res) => {
    try {
     const body = await getBody(req);
     req.body = body;
      if(req.url === '/books' && req.method === 'GET'){
         authenticate(req,res,controller.getBook)
      };
      if(req.url === '/books' && req.method === 'POST'){
         authenticate(req,res,controller.postBook)
      };
      if(req.url === '/books' && req.method === 'PATCH'){
         authenticate(req,res,controller.patchBook)
      };
      if(req.url === '/books' && req.method === 'PUT'){
         authenticate(req,res,controller.putAuthors)
      };
      if(req.url === '/books' && req.method === 'DELETE'){
         authenticate(req,res,controller.deleteBook)
      };
      if(req.url === '/authors' && req.method === 'GET'){
         authenticate(req,res,controller.getAuthors)
      };
      if(req.url === '/authors' && req.method === 'POST'){
         authenticate(req,res,controller.postAuthors)
      };
      if(req.url === '/authors' && req.method === 'PUT'){
         authenticate(req,res,controller.putAuthors)
      };
      if(req.url === '/authors' && req.method === 'PATCH'){
         authenticate(req,res,controller.patchAuthors)
      };
      if(req.url === '/authors' && req.method === 'DELETE'){
         authenticate(req,res,controller.deleteAuthors)
      };
 
 
    } catch (error) {
     res.statusCode = 500;
     res.end(error.message);
 
    }
 }




  const server = http.createServer(requestHandler);

server.listen(PORT, () => {
    console.log(`sever successfully runing at http://localhost:${PORT}`)
});