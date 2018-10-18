<?php 
	$dbms='mysql';     //数据库类型
	$host='112.74.25.189'; //数据库主机名
	$dbName='midian';    //使用的数据库
	$user='midian';      //数据库连接用户名
	$pass='Hzhoujt2015';          //对应的密码
	$dsn="$dbms:host=$host;dbname=$dbName";


	$con = new PDO($dsn, $user, $pass); //初始化一个PDO对象
	//默认这个不是长连接，如果需要数据库长连接，需要最后加一个参数：array(PDO::ATTR_PERSISTENT => true) 变成这样：
	/*$dbh = new PDO($dsn, $user, $pass,array(PDO::ATTR_PERSISTENT => true)); //初始化一个PDO对象*/

	// 设置 PDO 错误模式，用于抛出异常
	$con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

	$stmt = $con->prepare("SELECT title,keywords,description FROM `hy_seo` WHERE `id`='1' LIMIT 1");
	$stmt->execute();  //执行一条预处理语句 .成功时返回 TRUE, 失败时返回 FALSE 
    $res = $stmt->fetch(PDO::FETCH_ASSOC);


    $con = null;

 ?>
<!DOCTYPE html><html><head><meta charset=utf-8><meta name="keywords" content="<?php echo $res['keywords']?>"><meta name="description" content="<?php echo $res['description']?>"><meta name=viewport content="width=device-width,initial-scale=1"><title>寰逸官网</title><link href=/static/css/app.93be6513e445dc5911f39c8005b9c069.css rel=stylesheet></head><body><div id=app></div><script type=text/javascript src=/static/js/manifest.2ae2e69a05c33dfc65f8.js></script><script type=text/javascript src=/static/js/vendor.865cb9985180678f8fef.js></script><script type=text/javascript src=/static/js/app.7eaa85be680ac4f5830e.js></script></body></html>