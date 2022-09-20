package cn.gaotie8.demo.utils;

import lombok.Data;

import java.math.BigDecimal;
@Data
public class XykLiushui {
    private int id;
    private String date;
    private int card_number;
    private BigDecimal money;
    private BigDecimal fee;
    private int type;

}
