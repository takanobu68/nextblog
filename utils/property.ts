import { RichTextType } from '@/types/types';

export const getText = (richTextArr: RichTextType[]) => {
  try {
    const textArr = richTextArr.map((richtext) => richtext.plain_text);
    return textArr.join('');
  } catch (err) {
    console.log(err);
  }
  return '';
};
