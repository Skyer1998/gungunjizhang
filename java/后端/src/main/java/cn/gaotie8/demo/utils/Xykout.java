package cn.gaotie8.demo.utils;


import lombok.Data;

import lombok.EqualsAndHashCode;

import java.math.BigDecimal;
@Data

public class Xykout {
    private int card_number;
    private String bill_day;
    private String payment_day;
    private BigDecimal bill_credit;
    private BigDecimal now_payment_bill;
    private BigDecimal credit_limit;
    private BigDecimal now_limit;

}
