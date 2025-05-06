/**
 * 文字列を指定された長さに切り詰める関数
 * 
 * @param text 切り詰めるテキスト
 * @param maxLength 最大文字数
 * @param suffix 末尾に追加する文字列（例: "..."）
 * @returns 切り詰められたテキスト
 */
export function truncateText(text: string, maxLength: number, suffix: string = '...'): string {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + suffix;
}

/**
 * 文字列の最初の文字を大文字にする関数
 * 
 * @param text 変換するテキスト
 * @returns 最初の文字が大文字のテキスト
 */
export function capitalizeFirstLetter(text: string): string {
  if (!text || text.length === 0) return text;
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * 文字列内のURLをリンクに変換する関数
 * 
 * @param text 変換するテキスト
 * @returns URLがリンクに変換されたHTML文字列
 */
export function linkifyUrls(text: string): string {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(
    urlRegex,
    url => `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`
  );
}