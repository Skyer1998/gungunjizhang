package cn.gaotie8.demo.Dao;

import cn.gaotie8.demo.utils.JdbcUtils;
import cn.gaotie8.demo.utils.XykListsum;
import org.springframework.jdbc.core.JdbcTemplate;

import java.time.LocalDate;
import java.time.Period;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class Test {
    public static void main(String[] args) {
        XykZhengxinDao xykZhengxinDao=new XykZhengxinDao();
        System.out.println(xykZhengxinDao.getfuzhaimonth()
        );



    }
}
