// Usamos la librería nativa 'crypto' de Node.js
import crypto from 'node:crypto';

/**
 * Genera un token CSRF criptográficamente seguro.
 * @returns Token CSRF como string hexadecimal.
 */
export function generateCSRFToken(): string {
  // CRUCIAL: Usar 'export' nombrado.
  // Genera 16 bytes (32 caracteres hexadecimales)
  return crypto.randomBytes(16).toString('hex');
}
