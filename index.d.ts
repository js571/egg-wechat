interface EggWechatClientOption {
  prefix: string;
  appKey: string;
  secret: string;
  client: string;
  apiUrl: string;
  partnerId: string;
  domain: string;
}

interface EggWechatSDkClientsOption {
  [clientName: string]: EggWechatClientOption;
}

interface EggWechatConfig {
  default?: object;
  app?: boolean;
  agent?: boolean;
  client?: EggWechatClientOption;
  clients?: EggWechatClientOption;
}

declare module 'egg' {
  interface Application {
    wechat: any;
  }
  interface EggAppConfig {
    wechat: EggWechatConfig;
  }
}
