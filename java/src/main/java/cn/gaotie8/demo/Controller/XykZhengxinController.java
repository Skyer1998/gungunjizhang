package cn.gaotie8.demo.Controller;

import cn.gaotie8.demo.Dao.XykZhengxinDao;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

@Controller
public class XykZhengxinController {
    private XykZhengxinDao xykZhengxinDao=new XykZhengxinDao();
    @RequestMapping("/getxykapply")
    @ResponseBody
    public List<Map<String, Object>> getzhengxin(){
        return  xykZhengxinDao.getxykapproval();
    }
    @RequestMapping("/getzhengxin")
    @ResponseBody
    public Map gettimes(){
        return xykZhengxinDao.gettimes();
    }
    @RequestMapping("/getfuzhai")
    @ResponseBody
    public List getfuzhai(){
        return xykZhengxinDao.getxiangxifuzhai();
    }
    @RequestMapping("/getfuzhaimonth")
    @ResponseBody
    public Map getfuzhaimonth(){
        return xykZhengxinDao.getfuzhaimonth();
    }
    @RequestMapping("/gettest")
    @ResponseBody
    public String gettest(){
        String test ="{ genre: 'Sports', sold: 275 }," +
                "  { genre: 'Strategy', sold: 115 }," +
                "  { genre: 'Action', sold: 120 }," +
                "  { genre: 'Shooter', sold: 350 }," +
                "  { genre: 'Other', sold: 150 }";
        return test;
        
    }



}
