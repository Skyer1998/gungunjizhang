package cn.gaotie8.demo.Dao;

import cn.gaotie8.demo.utils.JdbcUtils;
import cn.gaotie8.demo.utils.XykZhengxin;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class XykZhengxinDao {
    private JdbcTemplate jdbcTemplate = new JdbcTemplate(JdbcUtils.getDataSource());
    private LocalDate localDate =LocalDate.now();
    
    public List<XykZhengxin> getAllZhengxin(){
        String sql="select * from zhengxin;";
        List<XykZhengxin> query = jdbcTemplate.query(sql, new BeanPropertyRowMapper<XykZhengxin>(XykZhengxin.class));
        return  query;
    }
    public  int getThreetimes(){
        return  getTimes(3);
    }
    public  int getSixtimes(){
        return  getTimes(6);
    }
    public  int getTimes(int month){
        String sql="SELECT count(id) times FROM zhengxin WHERE DATE BETWEEN ? AND ? AND reason=\"信用卡审批\";";
        LocalDate date_start = localDate.minusMonths(month);
        Map<String, Object> stringObjectMap = jdbcTemplate.queryForMap(sql, date_start, localDate);
        int times= Integer.parseInt(stringObjectMap.get("times").toString());
        return times;
    }
    public List<Map<String, Object>> getxykapproval(){
        String sql="select bank,date,approve from zhengxin where reason=\"信用卡审批\" order by date desc ;";
        List<Map<String, Object>> maps = jdbcTemplate.queryForList(sql);
        return maps;
    }
    public Map gettimes(){
        int threetimes=getThreetimes();
        int sixtimes=getSixtimes();
        Map map=new HashMap();
        map.put("threetimes",threetimes);
        map.put("sixtimes",sixtimes);
        map.put("zhengxin",getxykapproval());
        return map;

    }





}
