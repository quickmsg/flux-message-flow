import { useEffect } from "react";
import { FLUXMQ_DOC_INSTALL_CATEGORY_URL } from "@/lib/constants";

/**
 * 路径 `/download` 直接重定向到文档「安装部署」（与 hash `#/download` 行为一致）。
 */
const DownloadRedirect = () => {
  useEffect(() => {
    window.location.replace(FLUXMQ_DOC_INSTALL_CATEGORY_URL);
  }, []);
  return null;
};

export default DownloadRedirect;
