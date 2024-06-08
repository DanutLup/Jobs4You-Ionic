import { Job } from "./job";

export interface Apiresponse {
    apiVersion: string;
    documentationUrl: string;
    friendlyNotice: string;
    jobCount: number;
    xRayHash: string;
    clientKey: string;
    lastUpdate: string;
    jobs: Job[];
}
