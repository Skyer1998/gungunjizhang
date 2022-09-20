package cn.gaotie8.demo.Controller;

import cn.gaotie8.demo.Dao.XykShouyiDao;
import cn.gaotie8.demo.utils.Xykshouyi;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/shouyi")
public class XykshouyiController {
    @RequestMapping("/getall")
    @ResponseBody
    public List<Xykshouyi> shouyi(){
        XykShouyiDao xykShouyiDao=new XykShouyiDao();
        List<Xykshouyi> shouyi = xykShouyiDao.shouyi();
        return shouyi;

    }

}
