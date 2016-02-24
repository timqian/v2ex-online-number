## 起因

偶尔会看下 v2ex 底部的在线人数统计，感觉工作时间 v2ex 上人比较多。。。我有点好奇人们什么时候上v站，于是花了几个钟头做了这个东西。

## Thanks

- [jquery](https://github.com/jquery/jquery) [jquery-csv](https://github.com/evanplaice/jquery-csv) for fetching and dealing with csv
- [plotly](https://plot.ly/javascript/time-series/) for drawing graph;
- [pm2](https://github.com/Unitech/pm2) for keeping scripts running forever

## Files descriptions

`index.js`: request v2ex.com, get online people number and then save to file('./numbers.csv')

`numbers.csv`: csv file storing data

`index.html`: web page

## License
MIT
