export interface IAppConfig {
  url : string;
}

export default(): IAppConfig => ({
  url: process.env.APP_API_URL || `http://localhost:9000`
})