package cn.gaotie8.demo.Dao;

import cn.gaotie8.demo.utils.JdbcUtils;
import cn.gaotie8.demo.utils.XykBill;
import cn.gaotie8.demo.utils.XykLiushui;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.data.redis.RedisProperties;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class XykBillDao {
    private JdbcTemplate jdbcTemplate = new JdbcTemplate(JdbcUtils.getDataSource());
    public List<XykBill> getAllBill(){
        String sql="select * from bill_new";
        return jdbcTemplate.query(sql,new BeanPropertyRowMapper<XykBill>(XykBill.class));
    }
    public int updateXykbill(int card_number, BigDecimal bill_credit){
        String sql="select bill_day,payment_day from bill_new where card_number= ? order by bill_day desc limit 1";
        Map<String, Object> stringObjectMap = jdbcTemplate.queryForMap(sql, card_number);
        LocalDate bill_day = LocalDate.parse(stringObjectMap.get("bill_day").toString());
        LocalDate payment_day = LocalDate.parse(stringObjectMap.get("payment_day").toString());
        bill_day=bill_day.minusMonths(-1);
        payment_day=getpaymentday(card_number,bill_day,payment_day);
        BigDecimal now_payment_bill=bill_credit;
        String sql_set="update bill_new set state= ? where card_number= ?";
        int aNew = jdbcTemplate.update(sql_set, "old", card_number);
        String sql_add="INSERT INTO `xyk_list`.`bill_new` (`bill_day`, `bill_credit`, `payment_day`, `now_payment_bill`, `card_number`,`state`) VALUES ( ?,? ,? ,? ,? ,?);";
        int update = jdbcTemplate.update(sql_add, bill_day, bill_credit, payment_day, now_payment_bill, card_number,"new");
        return update;
    }
    /**
     * 根据分期利息进行判断是刷卡还是分期
     * 需要参数 账单金额 手续费 期数
     * 在空卡的情况下，去判断是刷卡便宜还是分期 实际支出手续费
     */
    public void feesum(){
        int qishu=6;
        Double money=8910.24;
        Double e_money=1485.04;
        Double e_fee=43.66;
        Double all_money=money*qishu*2;
        Double pos_all_money=all_money*0.0055;
        Double fee=0.00;
        System.out.println("以卡养卡所需金额"+pos_all_money);
        for (int i = 1; i <= 3; i++) {
            Double f_e_money=e_money*i;
            Double f_e_fee=e_fee*i;
            Double all_f=f_e_money+f_e_fee;
            Double pos_all_f=all_f*0.0055*2;
            System.out.println("第"+i+"个月pos手续费为"+pos_all_f);
            fee=fee+pos_all_f;
            System.out.println("目前手续费为"+fee);
        }
        fee=e_fee*qishu+fee;
        System.out.println(fee);

    }
    public LocalDate getpaymentday(int card_number,LocalDate bill_day, LocalDate payment_day){
        String sql = "select mianxiqi from list where card_number=?;";
        int mianxiqi=(int)jdbcTemplate.queryForMap(sql, card_number).get("mianxiqi");
        if (mianxiqi==-1){
            LocalDate s = payment_day.plusMonths(1);
            return s;
        }else {
            LocalDate s = bill_day.plusDays(mianxiqi);
            return s;
        }
    }


    public List  getnow_payment_bill(){
        List map =new ArrayList();
        String sql="select card_number,payment_day,now_payment_bill from bill_new where state=\"new\" and now_payment_bill>0";
        for (Map<String, Object> stringObjectMap : jdbcTemplate.queryForList(sql)) {
            Map map1=new HashMap();
            int card_number = (int) stringObjectMap.get("card_number");
            LocalDate payment_day=LocalDate.parse(stringObjectMap.get("payment_day").toString());
            BigDecimal now_payment_bill=(BigDecimal) stringObjectMap.get("now_payment_bill");
            map1.put("card_number",card_number);
            map1.put("payment_day",payment_day);
            map1.put("now_payment_bill",now_payment_bill);
            map.add(map1);
        }
        return map;

    }









}
