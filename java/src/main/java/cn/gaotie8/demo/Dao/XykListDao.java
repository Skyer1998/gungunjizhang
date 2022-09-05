package cn.gaotie8.demo.Dao;

import cn.gaotie8.demo.utils.JdbcUtils;
import cn.gaotie8.demo.utils.Xyklist;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class XykListDao {
    private JdbcTemplate jdbcTemplate = new JdbcTemplate(JdbcUtils.getDataSource());
    public List<Xyklist> getALLList(){
        String sql="select * from list;";
        List<Xyklist> query = jdbcTemplate.query(sql, new BeanPropertyRowMapper<Xyklist>(Xyklist.class));
        return query;
    }
    public List<Map<String, Object>> getXyklistbypersonid(int person_id){
        String sql="SELECT card_number,bank,credit_limit FROM list WHERE person_id=?;";
        List<Map<String, Object>> maps = jdbcTemplate.queryForList(sql, person_id);
        return maps;
    }
    public List<List<Map<String, Object>>> getxykalllist(){
        List<List<Map<String, Object>>> list =new ArrayList<>();
        for (int i = 1; i <=3 ; i++) {
            List<Map<String, Object>> xyklistbypersonid = getXyklistbypersonid(i);
            list.add(xyklistbypersonid);
        }
        return  list;
    }
    /**
     * 使用redis进行查询
     */
    public void getxyklistbyredis(){}





}
