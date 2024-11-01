import type { Application, Agent } from 'egg';
import WechatService from '@xw-tech/wechat-sdk';
function createOneClient(
  config: Record<string, any>,
  app: Application | Agent
) {
  /**
   * prefix: '',
      appKey: '',
      secret: '',
      client: '',
      apiUrl: '',
      partnerId: '',
      domain: '',
   */
  app.coreLogger.info('[egg-wechat] 开始初始化', config);
  const client = new WechatService(
    config.prefix,
    config.appKey,
    config.secret,
    config.client,
    config.apiUrl,
    config.partnerId,
    config.domain
  );
  return client;
}

export function initPlugin(app: Application | Agent) {
  app.addSingleton('wechat', createOneClient);
}
