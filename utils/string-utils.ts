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
  // 空文字列の場合はそのまま返す
  if (!text) {
    return '';
  }
  
  // 最大長が0以下の場合は空文字列+サフィックスを返す
  if (maxLength <= 0) {
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
  
  // 正規表現で使用するパターン
  const tagPattern = /<[^>]*>/g;
  const urlPattern = /(https?:\/\/[^\s<>"]+)/g;
  
  // HTMLテキストを分割するための準備
  const segments: Array<{isTag: boolean, content: string}> = [];
  let lastIndex = 0;
  let match;
  
  // タグと非タグ部分を分割して配列に保存
  while ((match = tagPattern.exec(text)) !== null) {
    // タグの前のテキスト部分を追加
    if (match.index > lastIndex) {
      segments.push({
        isTag: false,
        content: text.substring(lastIndex, match.index)
      });
    }
    
    // タグ部分を追加
    segments.push({
      isTag: true,
      content: match[0]
    });
    
    lastIndex = match.index + match[0].length;
  }
  
  // 最後の部分を追加
  if (lastIndex < text.length) {
    segments.push({
      isTag: false,
      content: text.substring(lastIndex)
    });
  }
  
  // 各セグメントを処理
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    // タグ部分はそのまま保持
    if (segment.isTag) continue;
    
    // 非タグ部分のURLをリンクに変換
    segment.content = segment.content.replace(urlPattern, url => 
      `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`
    );
  }
  
  // 処理後のセグメントを結合して返す
  return segments.map(segment => segment.content).join('');
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
    .replace(/&/g, '&amp;')
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