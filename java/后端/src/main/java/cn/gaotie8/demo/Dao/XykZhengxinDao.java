package cn.gaotie8.demo.Dao;

import cn.gaotie8.demo.utils.JdbcUtils;
import cn.gaotie8.demo.utils.XykZhengxin;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.math.BigDecimal;
import java.text.NumberFormat;
import java.time.LocalDate;
import java.time.temporal.TemporalAdjusters;
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
    public List getxiangxifuzhai(){
        String sql="SELECT card_number,credit_limit FROM list WHERE person_id=2; ";
        String sql_card="SELECT bill_credit,bill_day FROM bill_new WHERE card_number=?;";
        List list=new ArrayList() ;

        for (Map<String, Object> stringObjectMap : jdbcTemplate.queryForList(sql)) {
            List list1=new ArrayList() ;
            Map map1=new HashMap();
            int card_number = (int) stringObjectMap.get("card_number");
            BigDecimal bigDecimal=(BigDecimal) stringObjectMap.get("credit_limit");
            for (Map<String, Object> objectMap : jdbcTemplate.queryForList(sql_card,card_number)) {
                Map map2=new HashMap();
                BigDecimal bill_credit= (BigDecimal) objectMap.get("bill_credit");
                String bill_day=objectMap.get("bill_day").toString();
                BigDecimal divide = bill_credit.divide(bigDecimal,2,BigDecimal.ROUND_CEILING);
                NumberFormat numberFormat = NumberFormat.getPercentInstance();
                numberFormat.setMaximumFractionDigits(2);
                divide.doubleValue();
                String format = numberFormat.format(divide.doubleValue());
                LocalDate localDate=LocalDate.parse(bill_day);
                int month=localDate.getMonthValue();
                map2.put("month",month);
                map2.put("percent",format);
                list1.add(map2);
            }
            map1.put("fuzhai",list1);
            map1.put("card_number",card_number);
            list.add(map1);

        }
        return list;
    }
    public Map<String, Object> getfuzhaibymonth(LocalDate firstDay,LocalDate lastDay){
        Map<String, Object> stringObjectMap = jdbcTemplate.queryForMap("select sum(bill_credit)/sum(credit_limit) fuzhai from list,bill_new where list.card_number=bill_new.card_number and list.person_id=2 and bill_new.bill_day between ? and ?;", firstDay, lastDay);
        return stringObjectMap;
    }
    public Map getfuzhaimonth(){
        Map map=new HashMap();
        LocalDate date =LocalDate.now();
        LocalDate firstDay = date.with(TemporalAdjusters.firstDayOfMonth()); // 获取当前月的第一天
        LocalDate lastDay = date.with(TemporalAdjusters.lastDayOfMonth()); // 获取当前月的最后一天
        for (int i = 0; i < 5; i++) {
            Map<String, Object> getfuzhaibymonth = getfuzhaibymonth(firstDay, lastDay);
            int monthValue = firstDay.getMonthValue();
            Map map1=new HashMap();
            BigDecimal bigDecimal = (BigDecimal) getfuzhaibymonth.get("fuzhai");
            NumberFormat numberFormat = NumberFormat.getPercentInstance();
            numberFormat.setMaximumFractionDigits(2);
            bigDecimal.doubleValue();
            String format = numberFormat.format(bigDecimal.doubleValue());
            map1.put("percent",format);
            map1.put("month",monthValue);
            map.put(i,map1);
            firstDay=firstDay.minusMonths(1);
            lastDay=lastDay.minusMonths(1);
        }
        return  map;
    }








}
