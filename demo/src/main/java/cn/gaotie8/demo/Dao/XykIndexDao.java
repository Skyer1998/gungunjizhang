package cn.gaotie8.demo.Dao;

import cn.gaotie8.demo.utils.JdbcUtils;
import cn.gaotie8.demo.utils.XykIndex;

import cn.gaotie8.demo.utils.XykListsum;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.math.BigDecimal;
import java.time.LocalDate;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;


public class XykIndexDao {
    private JdbcTemplate jdbcTemplate = new JdbcTemplate(JdbcUtils.getDataSource());

    public List<XykIndex> getXykIndex() {
        String sql = "SELECT list.picture,list.credit_limit,list.bank,list.card_number,bill_new.bill_credit,bill_new " +
                ".payment_day,bill_new.now_payment_bill FROM list,bill_new WHERE list.card_number=bill_new " +
                ".card_number AND bill_new.state=\"new\" ORDER BY payment_day ; ";
        List<XykIndex> list = jdbcTemplate.query(sql, new BeanPropertyRowMapper<XykIndex>(XykIndex.class));
        return list;
    }

    public  ArrayList<Integer> getUpateXyklist(){
        ArrayList<Integer> integers = new ArrayList<>();
        LocalDate date = LocalDate.now();
        LocalDate date_old = date.minusMonths(1);
        String sql="SELECT list.card_number,bill_new.bill_day FROM list,bill_new WHERE list.card_number=bill_new " +
                ".card_number AND bill_new.state=\"new\" ORDER BY bill_day ; ";
        List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
        for (Map<String, Object> stringObjectMap : list) {
            int card_number = Integer.parseInt(stringObjectMap.get("card_number").toString());
            LocalDate bill_day = LocalDate.parse(stringObjectMap.get("bill_day").toString());
            if (date_old.isBefore(bill_day)==false) {
                integers.add(card_number);
            }
        }
        return  integers;
    }
    public ArrayList<XykListsum> getsumlistall(){
        ArrayList<XykListsum> xykListsums=new ArrayList<>();
        String sql="SELECT SUM(credit_limit) creditlimitsum ,SUM(bill_credit) billcreditsum, SUM(now_payment_bill) nowpaymentbillsum FROM list,bill_new WHERE person_id=? AND list.card_number=bill_new.card_number AND  state=\"new\";";
        for (int i = 1; i <=3 ; i++) {
            Map<String, Object> stringObjectMap = jdbcTemplate.queryForMap(sql,i);
            XykListsum xykListsum=new XykListsum();
            xykListsum.setNowpaymentbillsum((BigDecimal) stringObjectMap.get("nowpaymentbillsum"));
            xykListsum.setBillcreditsum((BigDecimal) stringObjectMap.get("billcreditsum"));
            xykListsum.setCreditlimitsum((BigDecimal) stringObjectMap.get("creditlimitsum"));
            xykListsums.add(xykListsum);
        }
        return  xykListsums;

    }
    public void  Updatebill() {
        String sql = "select mianxiqi,day_bill,card_number from list;";
        List<Map<String, Object>> maps = jdbcTemplate.queryForList(sql);
        for (Map<String, Object> map : maps) {
            int day_bill=(int)map.get("day_bill");
            int mianxiqi=(int)map.get("mianxiqi");
            int card_number=(int)map.get("card_number");
            LocalDate localDate =LocalDate.now();
            LocalDate localDate_bill=localDate.withDayOfMonth(day_bill);
            /**
             * 固定还款日的处理
             */
            if (mianxiqi==-1){
                System.out.println("local"+localDate);
                System.out.println("bill"+localDate_bill);
                if (localDate.isBefore(localDate_bill)==false){
                    System.out.println("账单已到");
                }


            }
        }
    }











}
