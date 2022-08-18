package cn.gaotie8.demo.Controller;

import cn.gaotie8.demo.Dao.XykFenqiDao;
import cn.gaotie8.demo.utils.XykFenqi;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

@Controller
public class XykFenqiController {
    private XykFenqiDao xykFenqiDao=new XykFenqiDao();
    @RequestMapping("/addxykfenqi")
    @ResponseBody
    public int addxykfenqi(XykFenqi xykFenqi){
        System.out.println(xykFenqi.toString());
        int i = xykFenqiDao.insertFenqi(xykFenqi);
        return i;
    }
    @RequestMapping("/getxykfenqibypersonid")
    @ResponseBody
    public  List<List<XykFenqi>> xykfenqibypersonid(){
        return  xykFenqiDao.getALlfenqigroudbypersonid();
    }
    @RequestMapping("/getsummoney")
    @ResponseBody
    public List<List<Map<String, Object>>> getsummoney(){
        return  xykFenqiDao.getsummoney();
    }
    @RequestMapping("/getfenqi")
    @ResponseBody
    public Map getfenqi(){
        return xykFenqiDao.getfenqi();
    }
}
