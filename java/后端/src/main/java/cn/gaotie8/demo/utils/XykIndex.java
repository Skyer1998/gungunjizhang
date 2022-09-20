package cn.gaotie8.demo.utils;

import lombok.Data;

import java.math.BigDecimal;
@Data
public class XykIndex {
    private int card_number;
    private  String bank;
    private BigDecimal credit_limit;
    private BigDecimal bill_credit;
    private String payment_day;
    private BigDecimal now_payment_bill;
    private String picture;


}
