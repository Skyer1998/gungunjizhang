package cn.gaotie8.demo.Controller;

import cn.gaotie8.demo.Dao.XykBillDao;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.math.BigDecimal;
import java.util.List;

@Controller
public class XykBillController {
    private XykBillDao xykBillDao =new XykBillDao();
    @RequestMapping("/upadatexykbill")
    @ResponseBody
    public int updatebill(int card_number, BigDecimal bill_credit,BigDecimal now_payment_bill){
       return xykBillDao.updateXykbill(card_number,bill_credit);
    }
    @RequestMapping("/getnowpaymentbill")
    @ResponseBody
    public List getnowpaymentbill(){
        return xykBillDao.getnow_payment_bill();
    }
}
