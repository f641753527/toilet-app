CREATE TABLE `users` (   
  `id` 
  -- 约束条件
    int(11)   -- 类型 整型
    NOT NULL  -- 非空
    AUTO_INCREMENT, -- 自增长
  `user_name` varchar(60) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
 ) ENGINE=InnoDB  -- 这个约束条件我也不知道
    AUTO_INCREMENT=8  -- 自增长默认值从8开始
    DEFAULT CHARSET=utf8;    -- 默认字符集为utf-8

--  查询
select * from users;
-- 从users 表查询所有数据

-- 查询指定记录
-- select * from users where user_name = 'feng';

-- 更新 update
update table set column_name = value where condition;


-- 删除 delete
delete from users where condition;

create database PJ;
use PJ;

CREATE TABLE `fanlaoshi` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `username` varchar(60) NOT NULL,
  `password` varchar(70) NOT NULL,
  PRIMARY KEY(`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8;


CREATE TABLE `books` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `book_name` varchar(60) NOT NULL,
  `owner_id` int(10) NOT NULL,
  PRIMARY KEY(`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8;


create dababase orders;
use orders;

CREATE TABLE `Customers` (
  `CustomerID` int(100) NOT NULL AUTO_INCREMENT,
  `CustomerName` varchar(60) NOT NULL,
  `ContactName` varchar(60) NOT NULL,
  `Address` varchar(60) NOT NULL,
  `City` varchar(60) NOT NULL,
  `PostalCode` int(1000000) NOT NULL,
  `Country` varchar(60) NOT NULL,
  PRIMARY KEY(`CustomerID`)
) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8;

insert into Customers(CustomerName,ContactName,Address,City,PostalCode,Country) 
            values(Alfreds Futterkiste,Maria Anders,Obere Str.57,Berlin,12209,Germany);

insert into Customers(CustomerName,ContactName,Address,City,PostalCode,Country) 
            values(Ana Trujillo Emparedados y helado,Ana Trujillo,Avda.de la Consititucion2222,Mexico D.F.,05021,Mexico);

