import _ from 'lodash';
import InApp from '../index';

const DESKTOP = {
  MACOS: {
    CHROME: ['Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'],
  },
  WINDOWS: {
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
    MESSENGER: ['Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 [FBAN/MessengerForiOS;FBAV/117.0.0.36.70;FBBV/57539258;FBDV/iPhone7,2;FBMD/iPhone;FBSN/iOS;FBSV/10.2.1;FBSS/2;FBCR/&#20013-&#33775-&#38651-&#20449-;FBID/phone;FBLC/zh_TW;FBOP/5;FBRV/0]'],
    FACEBOOK: ['Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 [FBAN/FBIOS;FBAV/93.0.0.49.65;FBBV/58440824;FBDV/iPhone7,2;FBMD/iPhone;FBSN/iOS;FBSV/10.2.1;FBSS/2;FBCR/&#20013-&#33775-&#38651-&#20449-;FBID/phone;FBLC/zh_TW;FBOP/5;FBRV/0]'],
    LINE: ['Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 Safari Line/7.3.2'],
    INSTAGRAM: ['Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 Instagram 10.21.0 (iPhone7,2; iOS 10_2_1; zh-Hant_JP; zh-Hant-JP; scale=2.00; gamut=normal; 750x1334)'],
    WECHAT: ['Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 MicroMessenger/6.5.8 NetType/WIFI Language/zh_CN'],
    CHROME: ['Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/58.0.3029.113 Mobile/14D27 Safari/602.1'],
    SAFARI: ['Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Version/10.0 Mobile/14D27 Safari/602.1'],
  },
  IPAD: {
  },
  SONY: {
    FACEBOOK: [],
    LINE: [],
    WECHAT: [],
    CHROME: [],
  },
  HTC: {
    FACEBOOK: [],
    LINE: [],
    WECHAT: [],
    CHROME: [],
  },
  SAMSUND: {
  },
  ASUS: {
    MESSENGER: [
      'Mozilla/5.0 (Linux; Android 4.4.2; ASUS_T00F Build/KVT49L) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36 [FB_IAB/MESSENGER;FBAV/118.0.0.19.82;]'
    ],
    'FACEBOOK LITE': [
      'Mozilla/5.0 (Linux; Android 4.4.2; ASUS_T00F Build/KVT49L) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36[FBAN/EMA;FBLC/zh_TW;FBAV/42.0.0.3.64;]'
    ],
    CHROME: [
      'Mozilla/5.0 (Linux; Android 4.4.2; ASUS_T00F Build/KVT49L) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.83 Mobile Safari/537.36'
    ],
    FIREFOX: [
      'Mozilla/5.0 (Android 4.4.2; Mobile; rv:53.0) Gecko/53.0 Firefox/53.0'
    ],
  },
  WINDOWS: {
    FACEBOOK: [],
    LINE: [],
    WECHAT: [],
  },
};

describe('InApp', () => {
  describe('os', () => {
    it('iphone', () => {
      _.forEach(MOBILE.IPHONE, useragents => _.forEach(useragents, (useragent) => {
        const inapp = new InApp(useragent);
        expect(inapp.os).toBe('ios');
      }));
    });
  });

  describe('device', () => {
  });

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
      _.forEach(MOBILE, device => _.forEach(device, useragents =>
        _.forEach(useragents, (useragent) => {
          const inapp = new InApp(useragent);
          expect(inapp.isMobile()).toBe(true);
        }),
      ));
    });

    it('is not mobile', () => {
      _.forEach(DESKTOP, device => _.forEach(device, useragents =>
        _.forEach(useragents, (useragent) => {
          const inapp = new InApp(useragent);
          expect(inapp.isMobile()).toBe(false);
        }),
      ));
    });
  });

  describe('isTablet', () => {
  });

  describe('isDesktop', () => {
  });

  describe('inBot', () => {
  });

  describe('isInApp', () => {
  });

  describe('isApplePay', () => {
  });

  describe('isInstalled', () => {
  });

  describe('addMatch', () => {
  });
});
