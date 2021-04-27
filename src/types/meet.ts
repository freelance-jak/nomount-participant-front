import type { Member } from "src/types/member";

export type Meets = {
  meets: Meet[];
};

export type Meet = {
  member: Member;
  message: string;
  status: string;
};
