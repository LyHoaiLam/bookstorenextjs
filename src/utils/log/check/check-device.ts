/**
 * Detects if user agent string belongs to a mobile device (Android or iOS)
 * @param {string} userAgent - Browser's user agent string
 * @returns {boolean} True if device is mobile, false otherwise
 * @example
 * // Android mobile
 * deviceDetect("Mozilla/5.0 (Linux; Android 12; SM-G998B)")
 * // Returns: true
 *
 * // iPhone
 * deviceDetect("Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X)")
 * // Returns: true
 *
 * // iPad
 * deviceDetect("Mozilla/5.0 (iPad; CPU OS 16_0 like Mac OS X)")
 * // Returns: true
 *
 * // Desktop Chrome
 * deviceDetect("Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/117.0.0.0")
 * // Returns: false
 */
export const deviceDetect = (userAgent: string): boolean => {
	return /android.+mobile|ip(hone|[oa]d)|android.+tablet|kindle|playbook|silk/i.test(userAgent);
};
