package cn.gaotie8.demo.Controller;

import cn.gaotie8.demo.Dao.XykLiushuiDao;
import cn.gaotie8.demo.utils.XykLiushui;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

@Controller
public class XykLiushuiController {
    private XykLiushuiDao xykLiushuiDao=new XykLiushuiDao();
    @RequestMapping("/getxykliushui")
    @ResponseBody
    public List<XykLiushui> getxykLiushui(){
      return  xykLiushuiDao.getAllLiushui();
    }
    @RequestMapping("/addxykliushui")
    @ResponseBody
    public  int addLiushui(XykLiushui xykLiushui){
        int addliushui = xykLiushuiDao.addliushui(xykLiushui);
        return addliushui;
    }
    @RequestMapping("/getxykliushuibykahao")
    @ResponseBody
    public List<XykLiushui> getxykLiushuibykhap(int card_number){
        return  xykLiushuiDao.getoneLiushuiBykahao(card_number);
    }
    @RequestMapping("/getsumliushui")
    @ResponseBody
    public Map<String, Object> getsumliushui(int card_number){
        return  xykLiushuiDao.getsumbycard_number(card_number);
    }
    @RequestMapping("/getnowpaymentbillbycardnumber")
    @ResponseBody
    public  Map<String, Object> getnowpaymentbillbycardnumber(int card_number){
        return  xykLiushuiDao.getpayment(card_number);
    }
    @RequestMapping("/getsumfee")
    @ResponseBody
    public Map getsumfee(){
        return xykLiushuiDao.getthreefee();
    }
    @RequestMapping("/getliushuifee")
    @ResponseBody
    public List getliushuifee(){
        return xykLiushuiDao.getfee();
    }



}
