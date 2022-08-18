package cn.gaotie8.demo.Dao;

import cn.gaotie8.demo.utils.XykListsum;
import redis.clients.jedis.Jedis;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class Test {
    public static void main(String[] args) {
        XykLiushuiDao xykLiushuiDao=new XykLiushuiDao();
        Map getthreefee = xykLiushuiDao.getthreefee();
        System.out.println(getthreefee);
    }
}
