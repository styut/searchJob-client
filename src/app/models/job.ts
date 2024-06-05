import { jobField } from "./jobField";
export interface Job {
    id: number;
    jobField: jobField;
    jojbTitle: string;
    scopeOfHours: string;
    area: string;
    requirements: string[];
    workFromHome: boolean;
  }
