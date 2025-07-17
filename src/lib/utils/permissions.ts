// Centralização das permissões de acesso por módulo

// UIDs permitidos para Gestão de Motos
export const ALLOWED_MOTORCYCLE_USER_IDS = [
  "edsTZ2zG54Ph2ZoNSyFZXoJj74s2",
  "FOHbVCbMyhadO3tm1rVdknwLVPr1",
  // Adicione aqui outros UIDs permitidos
];

// UIDs permitidos para Venda de Motos
export const ALLOWED_VENDA_MOTOS_USER_IDS = [
  "edsTZ2zG54Ph2ZoNSyFZXoJj74s2",
  "FOHbVCbMyhadO3tm1rVdknwLVPr1",
  // Adicione aqui outros UIDs permitidos
];

export function hasMotorcycleAccess(uid?: string) {
  return !!uid && ALLOWED_MOTORCYCLE_USER_IDS.includes(uid);
}

export function hasVendaMotosAccess(uid?: string) {
  return !!uid && ALLOWED_VENDA_MOTOS_USER_IDS.includes(uid);
} 