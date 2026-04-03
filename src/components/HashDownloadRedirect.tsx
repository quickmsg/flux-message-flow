import { useEffect } from "react";
import { FLUXMQ_DOC_INSTALL_CATEGORY_URL } from "@/lib/constants";

/**
 * 兼容历史/书签链接 `https://www.fluxmq.com/#/download`：进入站点后重定向到文档「安装部署」。
 */
export function HashDownloadRedirect() {
  useEffect(() => {
    const redirectIfDownloadHash = () => {
      const h = window.location.hash.replace(/\/$/, "");
      if (h === "#/download") {
        window.location.replace(FLUXMQ_DOC_INSTALL_CATEGORY_URL);
      }
    };
    redirectIfDownloadHash();
    window.addEventListener("hashchange", redirectIfDownloadHash);
    return () => window.removeEventListener("hashchange", redirectIfDownloadHash);
  }, []);
  return null;
}
