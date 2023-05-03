import { PageType, RichTextType } from '@/types/types';

export const getText = (richTextArr: RichTextType[]) => {
  try {
    const textArr = richTextArr.map((richtext) => richtext.plain_text);
    return textArr.join('');
  } catch (err) {
    console.log(err);
  }
  return '';
};

// カバー画像を取得する関数
export const getCover = (cover: PageType['cover']) => {
  if (cover && cover.file) return cover.file.url;
  if (cover && cover.external) return cover.external.url;
  return '/noimage.png';
};

// 日付の取得
export const getDate = (date: { start: string }) => {
  try {
    return date.start;
  } catch (err) {
    console.log(err);
  }
  return '-';
};
