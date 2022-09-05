package cn.gaotie8.demo.Controller;

import cn.gaotie8.demo.Dao.XykIndexDao;
import cn.gaotie8.demo.utils.XykIndex;
import cn.gaotie8.demo.utils.XykListsum;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Controller
public class XykIndexController {
    private XykIndexDao xykIndexDao =new XykIndexDao();
    @RequestMapping("/getxykindex")
    @ResponseBody
    public List<XykIndex> getindex(){
        return  xykIndexDao.getXykIndex();
    }

    @RequestMapping("/getupdatexyklist")
    @ResponseBody
    public ArrayList<Integer> getupdatexyklist(){
        return   xykIndexDao.getUpateXyklist(LocalDate.now());
    }
    @RequestMapping("/getXykALLsum")
    @ResponseBody
    public ArrayList<XykListsum>  getXykALLsum(){
        return  xykIndexDao.getsumlistall();
    }

}
