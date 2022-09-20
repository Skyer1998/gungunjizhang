package cn.gaotie8.demo.Dao;

import cn.gaotie8.demo.utils.Xykshouyi;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

public class XykShouyiDao {

       public  List<Xykshouyi> shouyi(){
           try {
               InputStream is = Resources.getResourceAsStream("MyBatisConfig.xml");
               SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(is);
               SqlSession sqlSession = sqlSessionFactory.openSession();
               List<Xykshouyi> list = sqlSession.selectList("ShouyiMapper.selectAll");

               sqlSession.close();
               is.close();
               return list;
           } catch (IOException e) {
               e.printStackTrace();
               return null;
           }
       }






}
