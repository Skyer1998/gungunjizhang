package cn.gaotie8.demo.utils;

import lombok.Data;

import java.math.BigDecimal;
@Data
public class Xyklist {
    private int id;
    private String bank;
    private  int card_number;
    private  int person_id;
    private BigDecimal credit_limit;
    private int day_bill;
    private int day_payment;
    private  String picture;

}
