import _ from 'lodash';
import InApp from '../index';

const DESKTOP = {
  MACOS: {
    CHROME: ['Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'],
  },
  WINDOWS: {
  },
  UBUNTU: {
  },
};

const MOBILE = {
  IPHONE: {
    FACEBOOK: ['Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 [FBAN/MessengerForiOS;FBAV/117.0.0.36.70;FBBV/57539258;FBDV/iPhone7,2;FBMD/iPhone;FBSN/iOS;FBSV/10.2.1;FBSS/2;FBCR/&#20013-&#33775-&#38651-&#20449-;FBID/phone;FBLC/zh_TW;FBOP/5;FBRV/0]'],
    LINE: ['Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 Safari Line/7.3.2'],
    WECHAT: ['Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 MicroMessenger/6.5.8 NetType/WIFI Language/zh_CN'],
    CHROME: [],
    SAFARTI: [],
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
  WINDOWS: {
    FACEBOOK: [],
    LINE: [],
    WECHAT: [],
  },
};

describe('InApp', () => {
  describe('os', () => {
  });

  describe('device', () => {
  });

  describe('browser', () => {
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
