/**
 * Created by lmy on 17-8-10.
 */
var express = require('express');
var app = express();

app.use(express.static('./')); //访问当前目录下的静态文件。默认访问index.html

