package cn.gaotie8.demo.Controller;

import cn.gaotie8.demo.Dao.XykListDao;
import cn.gaotie8.demo.utils.Xyklist;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

@Controller
public class XykListController {
    private XykListDao xykListDao=new XykListDao();
    @RequestMapping("/getXyklist")
    @ResponseBody
    public  List<Xyklist> getXyklist(){
        return xykListDao.getALLList();
    }
    @RequestMapping("/getXyklistByPerson_id")
    @ResponseBody
    public  List<List<Map<String, Object>>> getXyklistByPerson_id(){
        return xykListDao.getxykalllist();
    }




}
