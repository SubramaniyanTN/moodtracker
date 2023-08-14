import { BrandType } from "./BrandtType";

export type MoodOptionsType={
    emoji:BrandType<"\u{1F9D1}\u200D\u{1F4BB}"|"\u{1F914}"|"\u{1F60A}"|"\u{1F973}"|"\u{1F624}","emoji">;
    description:BrandType<"studious"|"pensive"|"happy"|"celebratory"|"frustrated","description">
}


export const moodOptions:MoodOptionsType[] = [
    { emoji: "\u{1F9D1}\u200D\u{1F4BB}", description: 'studious' },
    { emoji: "\u{1F914}", description: 'pensive' },
    { emoji: "\u{1F60A}", description: 'happy' },
    { emoji: "\u{1F973}", description: 'celebratory' },
    { emoji: "\u{1F624}", description: 'frustrated' },
  ] as MoodOptionsType[];