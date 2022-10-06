import http from "@/http-common";

/* eslint-disable */
class GraphDataService {
  getGraphData(): Promise<any> {
    return http.get("https://gw.alipayobjects.com/os/antvdemo/assets/data/relations.json");
  }
}

export default new GraphDataService();