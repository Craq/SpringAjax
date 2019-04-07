package javapck.Controller;
import javapck.DataDir.Data;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value = "/Data")
public class AjaxController {

    @RequestMapping(value="/{time}", method = RequestMethod.GET)
    public @ResponseBody Data getMyData(
            @PathVariable long time) {

        return new Data(time, "REST GET Call !!!");
    }

    @RequestMapping(method = RequestMethod.PUT)
    public @ResponseBody Data putMyData(
            @RequestBody Data md) {

        return md;
    }

    @RequestMapping(method = RequestMethod.POST)
    public @ResponseBody Data postMyData() {
        return new Data(
                System.currentTimeMillis(), "REST POST Call !!!");
    }

    @RequestMapping(value="/{time}", method = RequestMethod.DELETE)
    public @ResponseBody Data deleteMyData(
            @PathVariable long time) {

        return new Data(time, "REST DELETE Call !!!");
    }

}