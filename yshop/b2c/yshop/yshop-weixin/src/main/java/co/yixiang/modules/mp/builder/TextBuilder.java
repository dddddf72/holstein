/**
 * Copyright (C) 2018-2021
 * All rights reserved, Designed By www.yixiang.co

 */
package co.yixiang.modules.mp.builder;

import me.chanjar.weixin.mp.api.WxMpService;
import me.chanjar.weixin.mp.bean.message.WxMpXmlMessage;
import me.chanjar.weixin.mp.bean.message.WxMpXmlOutMessage;
import me.chanjar.weixin.mp.bean.message.WxMpXmlOutTextMessage;

/**
 * @author Binary Wang(https://github.com/binarywang)
 */
public class TextBuilder extends AbstractBuilder {

    @Override
    public WxMpXmlOutMessage build(String content, WxMpXmlMessage wxMessage,
                                   WxMpService service) {
        WxMpXmlOutTextMessage m = WxMpXmlOutMessage.TEXT().content(content)
            .fromUser(wxMessage.getToUser()).toUser(wxMessage.getFromUser())
            .build();
        return m;
    }

}
