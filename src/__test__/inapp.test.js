import _ from 'lodash';
import InApp from '../inapp';

// check user agents from https://developers.whatismybrowser.com/

const DESKTOP = {
  MACOS: {
    CHROME: [
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
    ],
  },
  WINDOWS: {
    CHROME: [
      'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
    ],
    FIREFOX: [
      'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:53.0) Gecko/20100101 Firefox/53.0',
    ],
    IE11: [
      'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko',
    ],
  },
  UBUNTU: {
    CHROME: [
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3100.0 Safari/537.36',
    ],
    FIREFOX: [
      'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:53.0) Gecko/20100101 Firefox/53.0',
    ],
    VIVALDI: [
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.114 Safari/537.36 Vivaldi/1.9.818.50',
    ],
  },
};

const MOBILE = {
  IPHONE: {
    MESSENGER: [
      'Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 [FBAN/MessengerForiOS;FBAV/117.0.0.36.70;FBBV/57539258;FBDV/iPhone7,2;FBMD/iPhone;FBSN/iOS;FBSV/10.2.1;FBSS/2;FBCR/&#20013-&#33775-&#38651-&#20449-;FBID/phone;FBLC/zh_TW;FBOP/5;FBRV/0]',
    ],
    FACEBOOK: [
      'Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 [FBAN/FBIOS;FBAV/93.0.0.49.65;FBBV/58440824;FBDV/iPhone7,2;FBMD/iPhone;FBSN/iOS;FBSV/10.2.1;FBSS/2;FBCR/&#20013-&#33775-&#38651-&#20449-;FBID/phone;FBLC/zh_TW;FBOP/5;FBRV/0]',
    ],
    TWITTER: [
      'Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14D27 Twitter for iPhone',
    ],
    LINE: [
      'Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 Safari Line/7.3.2',
    ],
    INSTAGRAM: [
      'Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 Instagram 10.21.0 (iPhone7,2; iOS 10_2_1; zh-Hant_JP; zh-Hant-JP; scale=2.00; gamut=normal; 750x1334)',
    ],
    WECHAT: [
      'Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 MicroMessenger/6.5.8 NetType/WIFI Language/zh_CN',
    ],
    CHROME: [
      'Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/58.0.3029.113 Mobile/14D27 Safari/602.1',
    ],
    SAFARI: [
      'Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Version/10.0 Mobile/14D27 Safari/602.1',
    ],
  },
  SONY: {
    MESSENGER: [
      'Mozilla/5.0 (Linux; Android 6.0.1; D6653 Build/23.5.A.0.575; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/58.0.3029.83 Mobile Safari/537.36 [FB_IAB/MESSENGER;FBAV/118.0.0.19.82;]',
    ],
    FACEBOOK: [
      'Mozilla/5.0 (Linux; Android 6.0.1; D6653 Build/23.5.A.0.575; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/58.0.3029.83 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/124.0.0.22.66;]',
    ],
    LINE: [
      'Mozilla/5.0 (Linux; Android 6.0.1; D6653 Build/23.5.A.0.575; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/58.0.3029.83 Mobile Safari/537.36 Line/7.4.0/IAB',
    ],
    INSTAGRAM: [
      'Mozilla/5.0 (Linux; Android 6.0.1; D6653 Build/23.5.A.0.575; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/58.0.3029.83 Mobile Safari/537.36 Instagram 10.21.0 Android (23/6.0.1; 480dpi; 1080x1776; Sony; D6653; D6653; qcom; zh_TW)',
    ],
    WECHAT: [
      'Mozilla/5.0 (Linux; Android 6.0.1; D6653 Build/23.5.A.0.575; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/58.0.3029.83 Mobile Safari/537.36 MicroMessenger/6.5.7.1041 NetType/WIFI Language/zh_TW',
    ],
    CHROME: [
      'Mozilla/5.0 (Linux; Android 6.0.1; D6653 Build/23.5.A.0.575) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.83 Mobile Safari/537.36',
    ],
  },
  PIXEL: {
    PUFFIN: [
      'Mozilla/5.0 (Linux; Android 7.1.2; Pixel Build/N2G47E; zh-tw) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Mobile Safari/537.36 Puffin/6.0.9.15863AP',
    ],
    CHROME: [
      "Mozilla/5.0 (Linux; Android 12; Pixel 4 XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Mobile Safari/537.36",
    ],
  },
  HTC: {
    FACEBOOK: [],
    LINE: [],
    WECHAT: [],
    CHROME: [],
  },
  SAMSUNG: {
    MESSENGER: [
      'Mozilla/5.0 (Linux; Android 6.0.1; SM-N9208 Build/MMB29K; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/58.0.3029.83 Mobile Safari/537.36 [FB_IAB/MESSENGER;FBAV/118.0.0.19.82;]',
    ],
    FACEBOOK: [
      'Mozilla/5.0 (Linux; Android 6.0.1; SM-N9208 Build/MMB29K; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/58.0.3029.83 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/125.0.0.16.80;]',
    ],
    LINE: [
      'Mozilla/5.0 (Linux; Android 6.0.1; SM-N9208 Build/MMB29K; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/58.0.3029.83 Mobile Safari/537.36 Line/7.4.0/IAB',
    ],
    WECHAT: [
      'Mozilla/5.0 (Linux; Android 6.0.1; SM-N9208 Build/MMB29K; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/58.0.3029.83 Mobile Safari/537.36 MicroMessenger/6.5.7.1041 NetType/WIFI Language/zh_TW',
    ],
    INSTAGRAM: [
      'Mozilla/5.0 (Linux; Android 6.0.1; SM-N9208 Build/MMB29K; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/58.0.3029.83 Mobile Safari/537.36 Instagram 10.22.0 Android (23/6.0.1; 560dpi; 1440x2560; samsung; SM-N9208; noblelte; samsungexynos7420; zh_TW)',
    ],
    CHROME: [
      'Mozilla/5.0 (Linux; Android 6.0.1; SM-N9208 Build/MMB29K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.83 Mobile Safari/537.36',
    ],
  },
  ASUS: {
    MESSENGER: [
      'Mozilla/5.0 (Linux; Android 4.4.2; ASUS_T00F Build/KVT49L) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36 [FB_IAB/MESSENGER;FBAV/118.0.0.19.82;]',
    ],
    FACEBOOK: [
      'Mozilla/5.0 (Linux; Android 4.4.2; ASUS_T00F Build/KVT49L) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36[FBAN/EMA;FBLC/zh_TW;FBAV/42.0.0.3.64;]',
    ],
    CHROME: [
      'Mozilla/5.0 (Linux; Android 4.4.2; ASUS_T00F Build/KVT49L) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.83 Mobile Safari/537.36',
    ],
    FIREFOX: [
      'Mozilla/5.0 (Android 4.4.2; Mobile; rv:53.0) Gecko/53.0 Firefox/53.0',
    ],
  },
  REDMI: {
    MESSENGER: [
      'Mozilla/5.0 (Linux; Android 6.0.1; Redmi Note 3 Build/MMB29M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/58.0.3029.83 Mobile Safari/537.36 [FB_IAB/MESSENGER;FBAV/118.0.0.19.82;]',
    ],
    FACEBOOK: [
      'Mozilla/5.0 (Linux; Android 6.0.1; Redmi Note 3 Build/MMB29M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/58.0.3029.83 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/124.0.0.22.66;]',
    ],
    LINE: [
      'Mozilla/5.0 (Linux; Android 6.0.1; Redmi Note 3 Build/MMB29M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/58.0.3029.83 Mobile Safari/537.36 Line/7.4.0/IAB',
    ],
    INSTAGRAM: [
      'Mozilla/5.0 (Linux; Android 6.0.1; Redmi Note 3 Build/MMB29M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/58.0.3029.83 Mobile Safari/537.36 Instagram 10.21.0 Android (23/6.0.1; 480dpi; 1080x1920; Xiaomi; Redmi Note 3; kate; qcom; zh_TW)',
    ],
    MIUI: [
      'Mozilla/5.0 (Linux; U; Android 6.0.1; zh-tw; Redmi Note 3 Build/MMB29M) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.146 Mobile Safari/537.36 XiaoMi/MiuiBrowser/8.5.8',
    ],
    CHROME: [
      'Mozilla/5.0 (Linux; Android 6.0.1; Redmi Note 3 Build/MMB29M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.83 Mobile Safari/537.36',
    ],
  },
  WINDOWS: {
    FACEBOOK: [],
    LINE: [],
    WECHAT: [],
  },
};

const TABLET = {
  IPAD: {
    MESSENGER: [
      'Mozilla/5.0 (iPad; CPU OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E304 [FBAN/MessengerForiOS;FBAV/117.0.0.36.70;FBBV/57539258;FBDV/iPad4,4;FBMD/iPad;FBSN/iOS;FBSV/10.3.1;FBSS/2;FBCR/;FBID/tablet;FBLC/zh_TW;FBOP/5;FBRV/0]',
    ],
    FACEBOOK: [
      'Mozilla/5.0 (iPad; CPU OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E304 [FBAN/FBIOS;FBAV/92.0.0.46.70;FBBV/57733420;FBDV/iPad4,4;FBMD/iPad;FBSN/iOS;FBSV/10.3.1;FBSS/2;FBCR/;FBID/tablet;FBLC/zh_TW;FBOP/5;FBRV/0]',
    ],
    TWITTER: [
      'Mozilla/5.0 (iPad; CPU OS 10_3_1 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14E304 Twitter for iPhone',
    ],
    LINE: [
      'Mozilla/5.0 (iPad; CPU OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E304 Safari Line/7.3.0',
    ],
    INSTAGRAM: [
      'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E304 Instagram 10.20.0 (iPad4,4; iOS 10_3_1; zh_TW; zh-TW; scale=2.00; gamut=normal; 640x960)',
    ],
    WECHAT: [
      'Mozilla/5.0 (iPad; CPU OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E304 MicroMessenger/6.5.8 NetType/WIFI Language/zh_TW',
    ],
    CHROME: [
      'Mozilla/5.0 (iPad; CPU OS 10_3_1 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/58.0.3029.83 Mobile/14E304 Safari/602.1',
    ],
    SAFARI: [
      'Mozilla/5.0 (iPad; CPU OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
    ],
  },
};

describe('InApp', () => {
  describe('browser', () => {
    it('browser', () => {
      _.forEach(MOBILE, device => _.forEach(device, (useragents, name) =>
        _.forEach(useragents, (useragent) => {
          const inapp = new InApp(useragent);
          expect(inapp.browser).toBe(name.toLocaleLowerCase());
        }),
      ));
    });
  });

  describe('isMobile', () => {
    it('is mobile', () => {
      _.forEach(Object.assign({}, MOBILE, TABLET), device => _.forEach(device, useragents =>
        _.forEach(useragents, (useragent) => {
          const inapp = new InApp(useragent);
          expect(inapp.isMobile).toBe(true);
        }),
      ));
    });

    it('is not mobile', () => {
      _.forEach(DESKTOP, device => _.forEach(device, useragents =>
        _.forEach(useragents, (useragent) => {
          const inapp = new InApp(useragent);
          expect(inapp.isMobile).toBe(false);
        }),
      ));
    });
  });

  describe('isDesktop', () => {
    it('is desktop', () => {
      _.forEach(DESKTOP, device => _.forEach(device, useragents =>
        _.forEach(useragents, (useragent) => {
          const inapp = new InApp(useragent);
          expect(inapp.isDesktop).toBe(true);
        }),
      ));
    });

    it('is not desktop', () => {
      _.forEach(Object.assign({}, MOBILE, TABLET), device => _.forEach(device, useragents =>
        _.forEach(useragents, (useragent) => {
          const inapp = new InApp(useragent);
          expect(inapp.isDesktop).toBe(false);
        }),
      ));
    });
  });

  describe('inBot', () => {
  });

  describe('isInApp', () => {
    it('is in app', () => {
      _.forEach(Object.assign({}, MOBILE, TABLET), device => _.forEach(device, (useragents, name) =>
        _.forEach(useragents, (useragent) => {
          const inapp = new InApp(useragent);
          expect(inapp.isInApp).toBe(['CHROME', 'SAFARI', 'FIREFOX', 'MIUI', 'PUFFIN'].indexOf(name) < 0);
        }),
      ));
    });

    it('is not in app', () => {
      _.forEach(DESKTOP, device => _.forEach(device, useragents =>
        _.forEach(useragents, (useragent) => {
          const inapp = new InApp(useragent);
          expect(inapp.isInApp).toBe(false);
        }),
      ));
    });
  });
});
