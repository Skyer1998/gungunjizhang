package cn.gaotie8.demo.utils;

import lombok.Data;

import java.math.BigDecimal;
@Data
public class XykBill {
    private int id;
    private int card_number;
    private String bill_day;
    private String payment_day;
    private BigDecimal bill_credit;
    private BigDecimal now_payment_bill;

}
