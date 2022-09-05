package cn.gaotie8.demo.utils;

import lombok.Data;

import java.math.BigDecimal;
@Data
public class XykFenqi {
    //private int id;
    private int card_number;
    private int qishu;
    private BigDecimal money;
    private BigDecimal e_money;
    private BigDecimal fee;
    private BigDecimal e_fee;
    private String fenqi_date;
    private int state;
    private int person_id;


}
