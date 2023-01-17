import cheerio from 'cheerio';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import axios from 'axios';
import { query } from 'express';

@Controller('eleven-st')
export class ElevenStController {
  @Post('/test')
  async test(@Body('url') url) {
    console.log(url);
    const { data } = await axios.get(url);

    const $ = cheerio.load(data);
    const price_img = $(
      '#buyList > li:nth-child(1) > div > div:nth-child(2) > ul',
    );
    price_img.find('li').each((idx, el) => {
      console.log(idx);
      console.log($(el).data('dtloptnm'));
      console.log($(el).data('price'));
    });
    //console.log(price_img.html());

    return '123';
  }
}
