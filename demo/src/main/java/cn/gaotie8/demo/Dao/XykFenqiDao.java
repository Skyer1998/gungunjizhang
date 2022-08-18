package cn.gaotie8.demo.Dao;

import cn.gaotie8.demo.utils.JdbcUtils;
import cn.gaotie8.demo.utils.XykFenqi;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class XykFenqiDao {
    private JdbcTemplate jdbcTemplate = new JdbcTemplate(JdbcUtils.getDataSource());
    public List<XykFenqi> getAllfenqi(){
        String sql="select * from fenqi;";
        List<XykFenqi> query = jdbcTemplate.query(sql, new BeanPropertyRowMapper<XykFenqi>(XykFenqi.class));
        return  query;
    }
    public int insertFenqi(XykFenqi xykFenqi){
        String sql="INSERT INTO `xyk_list`.`fenqi` (`card_number`, `qishu`, `money`, `e_money`, `fee`, `e_fee`, `fenqi_date`,`state`) VALUES (?, ?, ?, ?, ?, ?, ?, ?);";
        int card_number= xykFenqi.getCard_number();
        int qishu= xykFenqi.getQishu();
        BigDecimal money=xykFenqi.getMoney();
        BigDecimal e_money=xykFenqi.getE_money();
        BigDecimal fee=xykFenqi.getFee();
        BigDecimal e_fee=xykFenqi.getE_fee();
        String fenqi_date= xykFenqi.getFenqi_date();
        int state= xykFenqi.getState();
        System.out.println(xykFenqi);

        int update = jdbcTemplate.update(sql, card_number, qishu, money, e_money, fee, e_fee, fenqi_date, state);
        System.out.println(update);
        return update;
    }
    public List<XykFenqi> getAllfenqibyid(int person_id){
        String sql="select * from fenqi where person_id =? AND state=0;";
        List<XykFenqi> query = jdbcTemplate.query(sql, new BeanPropertyRowMapper<XykFenqi>(XykFenqi.class),person_id);
        for (XykFenqi xykFenqi : query) {
            BigDecimal add = xykFenqi.getE_fee().add(xykFenqi.getE_money());
            xykFenqi.setE_money(add);
        }
        return query;
    }
    public List<List<XykFenqi>> getALlfenqigroudbypersonid(){
        List<List<XykFenqi>> lists =new ArrayList<>();
        for (int i = 1; i <=3 ; i++) {
            lists.add(getAllfenqibyid(i));
        }
        return  lists;
    }
    public List<Map<String, Object>>  getsume_moneybypersonid(int person_id){
        String sql="SELECT SUM(e_fee) efee,SUM(e_money)  emoney FROM fenqi WHERE person_id=? AND state=0;";
        List<Map<String, Object>> maps = jdbcTemplate.queryForList(sql, person_id);
        return maps;
    }
    public List<List<Map<String, Object>>> getsummoney(){
        List<List<Map<String, Object>>> lists=new ArrayList<>();
        for (int i = 1; i <=3 ; i++) {
            lists.add(getsume_moneybypersonid(i));
        }
        return lists;
    }
    public Map getfenqi(){
        Map map=new HashMap();
        List<List<XykFenqi>> aLlfenqigroudbypersonid = getALlfenqigroudbypersonid();
        map.put("list",aLlfenqigroudbypersonid);
        map.put("sum",getsummoney());
        return map;

    }

    /**
     * 目前功能需要完善，还没有写完，需要根据还款日比较，然后判断分期是否结束
     */
    public void updatefenqistates(){
        String sql="select qishu,fenqi_date,list.day_bill from list,fenqi where state=0 AND list.card_number=fenqi.card_number;";
        List<Map<String, Object>> maps = jdbcTemplate.queryForList(sql);
        for (Map<String, Object> map : maps) {
            LocalDate fenqi_date = LocalDate.parse(map.get("fenqi_date").toString());
            int dayOfMonth = fenqi_date.getDayOfMonth();
            int day_bill = (int) map.get("day_bill");
            int qishu = (int) map.get("qishu");
            if (dayOfMonth<day_bill){
                System.out.println(dayOfMonth+"-----"+day_bill+"第一期账单在本月");
            }else {
                System.out.println(dayOfMonth+"-----"+day_bill+"第一期账单在下个月");
            }
            System.out.println(fenqi_date.minusMonths(-qishu));
            System.out.println(qishu);

        }
    }





}
