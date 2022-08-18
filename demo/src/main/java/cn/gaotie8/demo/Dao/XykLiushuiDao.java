package cn.gaotie8.demo.Dao;

import cn.gaotie8.demo.utils.JdbcUtils;
import cn.gaotie8.demo.utils.XykLiushui;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.temporal.TemporalAdjusters;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class XykLiushuiDao {
     private JdbcTemplate jdbcTemplate = new JdbcTemplate(JdbcUtils.getDataSource());
     public List<XykLiushui> getAllLiushui(){
         String sql="select * from liushui;";
         List<XykLiushui> query = jdbcTemplate.query(sql, new BeanPropertyRowMapper<XykLiushui>(XykLiushui.class));
         return query;
     }
     public  int addliushui(XykLiushui xykLiushui){
         String date = xykLiushui.getDate();
         int card_number=xykLiushui.getCard_number();
         BigDecimal money=xykLiushui.getMoney();
         BigDecimal fee=xykLiushui.getFee();
         int type= xykLiushui.getType();
         String sql=" INSERT INTO `xyk_list`.`liushui` ( `date`, `card_number`, `money`, `fee`, `type` ) VALUES (?,?,?,?,? );";
         if (type==1){
             addpayment(card_number,money);
         }
         int update = jdbcTemplate.update(sql, date, card_number, money, fee,type);
         return update;
     }
     public List<XykLiushui> getoneLiushuiBykahao(int card_number){
         String sql=" SELECT `date`, `card_number`, `money`, `fee` FROM `xyk_list`.`liushui` WHERE card_number=? LIMIT 0, 1000;";
         List<XykLiushui> query = jdbcTemplate.query(sql, new BeanPropertyRowMapper<XykLiushui>(XykLiushui.class),
                 card_number);
         return  query;
     }
     public Map<String, Object> getsumbycard_number(int card_number){
         String sql="SELECT SUM(money) money,SUM(fee) fee FROM `xyk_list`.`liushui` WHERE card_number=? LIMIT 0, 1000;";
         Map<String, Object> stringObjectMap = jdbcTemplate.queryForMap(sql, card_number);
         stringObjectMap.put("liushui",getoneLiushuiBykahao(card_number));
         return  stringObjectMap;
     }
     public Map<String, Object> getpayment(int card_number){
         String sql="SELECT now_payment_bill FROM  bill_new WHERE state=\"new\" and card_number=?;";
         Map<String, Object> stringObjectMap = jdbcTemplate.queryForMap(sql, card_number);
         return stringObjectMap;
     }
     public void addpayment(int card_number,BigDecimal money) {
         BigDecimal now_payment_bill = (BigDecimal) getpayment(card_number).get("now_payment_bill");
         now_payment_bill = now_payment_bill.subtract(money);
         String sql = "update bill_new set now_payment_bill=? where card_number=? and state=\"new\";";
         int update = jdbcTemplate.update(sql, now_payment_bill, card_number);
     }
     public Map<String, Object> getsum(LocalDate firstDay,LocalDate lastDay){
         String sql="select sum(fee)  fee from liushui where date between ? and ?;";
         Map<String, Object> stringObjectMap = jdbcTemplate.queryForMap(sql, firstDay, lastDay);
         return stringObjectMap;
     }
     public  List<Map<String, Object>> getbig(LocalDate firstDay,LocalDate lastDay){
         String sql="select * from liushui where date between ? and ? order by fee desc limit 10";
         List<Map<String, Object>> maps = jdbcTemplate.queryForList(sql, firstDay, lastDay);
         return maps;


     }
     public Map getthreefee(){
         Map map=new HashMap();
         LocalDate date =LocalDate.now();
         LocalDate firstDay = date.with(TemporalAdjusters.firstDayOfMonth()); // 获取当前月的第一天
         LocalDate lastDay = date.with(TemporalAdjusters.lastDayOfMonth()); // 获取当前月的最后一天
         for (int i = 0; i < 4; i++) {
             Map map1=new HashMap();
             int monthValue = firstDay.getMonthValue();
             Map<String, Object> getsum = getsum(firstDay, lastDay);
             List<Map<String, Object>> getbig = getbig(firstDay, lastDay);
             map1.put("fee",getsum.get("fee"));
             map1.put("month",monthValue);
             map1.put("liushui",getbig);
             map.put(i,map1);
             firstDay=firstDay.minusMonths(1);
             lastDay=lastDay.minusMonths(1);
         }

         return map;
     }





}
