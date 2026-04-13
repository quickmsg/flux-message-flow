import { FLUXMQ_DOC_ORIGIN } from "@/lib/constants";

export type DemoVideoItem = {
  id: string;
  titleKey: string;
  src: string;
};

/** 与 fluxmq-doc static/video 及《演示视频》文档一致 */
export const FLUXMQ_DEMO_VIDEOS: DemoVideoItem[] = [
  {
    id: "overview",
    titleKey: "demos.items.overview",
    src: `${FLUXMQ_DOC_ORIGIN}/video/overview.webm`,
  },
  {
    id: "rule-engine-datasource",
    titleKey: "demos.items.datasource",
    src: `${FLUXMQ_DOC_ORIGIN}/video/rule-engine-datasource.webm`,
  },
  {
    id: "instruct",
    titleKey: "demos.items.instruct",
    src: `${FLUXMQ_DOC_ORIGIN}/video/instruct.webm`,
  },
];
