import { text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const keyVisualFragment = {
  keyVisualLandscape: text('KeyVisualLandscape'),
  keyVisualPortrait: text('KeyVisualPortrait'),
};
export const titleFragment = {
  titleEn: varchar('TitleEn'),
  titleZh: varchar('TitleZh'),
};
export const subtitleFragment = {
  titleEn: varchar('TitleEn'),
  titleZh: varchar('TitleZh'),
};
export const descriptionShortFragment = {
  descriptionShortEn: varchar('DescriptionShortEn'),
  descriptionShortZh: varchar('DescriptionShortZh'),
};
export const descriptionFragment = {
  descriptionEn: varchar('DescriptionEn'),
  descriptionZh: varchar('DescriptionZh'),
};
export const aboutFragment = {
  aboutEn: varchar('AboutEn'),
  aboutZh: varchar('AboutZh'),
};
export const createdUpdatedFragment = {
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
};
