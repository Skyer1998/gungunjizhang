package cn.gaotie8.demo.Dao;

import cn.gaotie8.demo.utils.JdbcUtils;
import cn.gaotie8.demo.utils.Xyklist;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import redis.clients.jedis.Jedis;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class XykListDao {
    private JdbcTemplate jdbcTemplate = new JdbcTemplate(JdbcUtils.getDataSource());
    public List<Xyklist> getsALLList(){
        String sql="select * from list;";
        List<Xyklist> query = jdbcTemplate.query(sql, new BeanPropertyRowMapper<Xyklist>(Xyklist.class));
        return query;
    }
    public Set<String> getxyklist(){
        Jedis jedis = new Jedis("123.56.45.218",6379);
        Set<String> xyklist = jedis.smembers("xyklist");
        jedis.close();
        return xyklist;

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
    public ArrayList getxyk_list(){
        ArrayList arrayList = new ArrayList();
        List<Map<String, Object>> select_card_number_from_list = jdbcTemplate.queryForList("select card_number from list");
        for (Map<String, Object> stringObjectMap : select_card_number_from_list) {
            int card_number =  (int)stringObjectMap.get("card_number");
            arrayList.add(card_number);
        }
        return arrayList;

    }





}
