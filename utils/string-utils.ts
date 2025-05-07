/**
 * 文字列を指定された長さに切り詰める関数
 * Unicode文字（絵文字含む）を正しく処理する
 * 
 * @param text 切り詰めるテキスト
 * @param maxLength 最大文字数
 * @param suffix 末尾に追加する文字列（例: "..."）
 * @returns 切り詰められたテキスト
 */
export function truncateText(text: string, maxLength: number, suffix: string = '...'): string {
  if (!text || maxLength <= 0) {
    return suffix;
  }
  
  if (text.length <= maxLength) {
    return text;
  }
  
  // スプレッド構文を使用して文字列をコードポイントの配列に変換
  // これにより絵文字などのサロゲートペアも1文字として扱われる
  const chars = [...text];
  
  if (chars.length <= maxLength) {
    return text;
  }
  
  return chars.slice(0, maxLength).join('') + suffix;
}

/**
 * 文字列の最初の文字を大文字にする関数
 * 
 * @param text 変換するテキスト
 * @returns 最初の文字が大文字のテキスト
 */
export function capitalizeFirstLetter(text: string | null | undefined): string | null | undefined {
  if (text === null || text === undefined) return text;
  if (text.length === 0) return text;
  
  const firstChar = text.charAt(0);
  // 既に大文字、数字、特殊文字の場合は変更しない
  if (!/[a-z]/.test(firstChar)) return text;
  
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * 文字列内のURLをリンクに変換する関数
 * HTMLタグを含む場合も正しく処理する
 * 
 * @param text 変換するテキスト
 * @returns URLがリンクに変換されたHTML文字列
 */
export function linkifyUrls(text: string): string {
  if (!text) return '';
  
  // HTMLタグを一時的に置き換え
  const placeholders: {[key: string]: string} = {};
  let counter = 0;
  
  // HTMLタグを検出して一時プレースホルダーに置き換える
  let processedText = text.replace(/<[^>]+>/g, (match) => {
    const placeholder = `__HTML_TAG_${counter++}__`;
    placeholders[placeholder] = match;
    return placeholder;
  });
  
  // URLをリンクに変換
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  processedText = processedText.replace(
    urlRegex,
    url => `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`
  );
  
  // プレースホルダーを元のHTMLタグに戻す
  Object.keys(placeholders).forEach(placeholder => {
    processedText = processedText.replace(placeholder, placeholders[placeholder]);
  });
  
  return processedText;
}

/**
 * 入力値をサニタイズしてXSS攻撃を防止する関数
 * 
 * @param input サニタイズする入力値
 * @returns サニタイズされた文字列
 */
export function sanitizeInput(input: string): string {
  if (!input) return '';
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * 国際化ドメインを含むメールアドレスを検証する関数
 * シンプルな正規表現による検証では対応できないケースをカバー
 * 
 * @param email 検証するメールアドレス
 * @returns 検証結果（有効な場合はtrue）
 */
export function validateEmail(email: string): boolean {
  if (!email || email.trim() === '') return false;
  
  // 基本的なメールアドレス形式チェック
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  
  // Punycodeドメインをチェック（国際化ドメイン）
  if (email.includes('xn--')) {
    // ユーザー名部分と@以降を分離
    const [username, domain] = email.split('@');
    if (!username || !domain) return false;
    
    // ドメイン部分にピリオドが含まれ、末尾に2文字以上の文字があるか確認
    const domainParts = domain.split('.');
    if (domainParts.length < 2) return false;
    if (domainParts[domainParts.length - 1].length < 2) return false;
    
    return true;
  }
  
  return emailRegex.test(email);
}