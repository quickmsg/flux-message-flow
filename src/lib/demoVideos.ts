import { FLUXMQ_DOC_ORIGIN } from "@/lib/constants";

export type DemoVideoItem = {
  id: string;
  titleKey: string;
  src: string;
  poster: string;
};

/** 与 fluxmq-doc static/video 及《演示视频》文档一致 */
export const FLUXMQ_DEMO_VIDEOS: DemoVideoItem[] = [
  {
    id: "overview",
    titleKey: "demos.items.overview",
    src: `${FLUXMQ_DOC_ORIGIN}/video/overview.webm`,
    poster: "/demo-posters/overview.svg",
  },
  {
    id: "rule-engine-datasource",
    titleKey: "demos.items.datasource",
    src: `${FLUXMQ_DOC_ORIGIN}/video/rule-engine-datasource.webm`,
    poster: "/demo-posters/rule-engine-datasource.svg",
  },
  {
    id: "instruct",
    titleKey: "demos.items.instruct",
    src: `${FLUXMQ_DOC_ORIGIN}/video/instruct.webm`,
    poster: "/demo-posters/instruct.svg",
  },
];
