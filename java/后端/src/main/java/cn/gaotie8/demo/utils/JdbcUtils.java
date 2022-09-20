package cn.gaotie8.demo.utils;


import com.alibaba.druid.pool.DruidDataSourceFactory;

import javax.sql.DataSource;
import java.io.IOException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Properties;

/**
 * Druid；连接池的工具类
 */

public class JdbcUtils {
     private static DataSource ds;
     static {
         Properties pro = new Properties();
         try {
             pro.load(JdbcUtils.class.getClassLoader().getResourceAsStream("druid.properties"));
             ds= DruidDataSourceFactory.createDataSource(pro);
         } catch (IOException e) {
             e.printStackTrace();
         } catch (Exception e) {
             e.printStackTrace();
         }
     }

    /**
     * 获取连接
     */
    public  static Connection getConnections(){
        try {
            return ds.getConnection();
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }
    }
    public  static  void close(Statement statement,Connection connection){
        close(null,statement,connection );


    }
    public  static  void close(ResultSet resultSet, Statement statement, Connection connection){
       if(resultSet!=null){
           try {
               resultSet.close();
           } catch (SQLException e) {
               e.printStackTrace();
           }
       }
        if (statement!=null){
            try {
                statement.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        if (connection!=null){
            try {
                connection.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }

    }
    /**
     * 获取连接池
     */
    public  static DataSource getDataSource(){
        return  ds;
    }







}
