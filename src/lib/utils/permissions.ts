// Centralização das permissões de acesso por módulo

// UIDs permitidos para Gestão de Motos
export const ALLOWED_MOTORCYCLE_USER_IDS = [
  "edsTZ2zG54Ph2ZoNSyFZXoJj74s2",
  "FOHbVCbMyhadO3tm1rVdknwLVPr1",
  "870qQuK1lrcuOnWf1kUDOJOF8cv2", // Novo UID autorizado
  "r9ZPLbtU91QplA5v1PeATPzD1ml2", // Novo UID autorizado
  "D4pBSwBrxhOXK5EMxgxtTJbaoQA2", // Novo UID autorizado
  // Adicione aqui outros UIDs permitidos
];

// UIDs permitidos para Venda de Motos
export const ALLOWED_VENDA_MOTOS_USER_IDS = [
  "edsTZ2zG54Ph2ZoNSyFZXoJj74s2",
  "FOHbVCbMyhadO3tm1rVdknwLVPr1",
  "870qQuK1lrcuOnWf1kUDOJOF8cv2", // Novo UID autorizado
  "r9ZPLbtU91QplA5v1PeATPzD1ml2", // Novo UID autorizado
  "D4pBSwBrxhOXK5EMxgxtTJbaoQA2", // Novo UID autorizado
  // Adicione aqui outros UIDs permitidos
];

export function hasMotorcycleAccess(uid?: string) {
  return !!uid && ALLOWED_MOTORCYCLE_USER_IDS.includes(uid);
}

export function hasVendaMotosAccess(uid?: string) {
  return !!uid && ALLOWED_VENDA_MOTOS_USER_IDS.includes(uid);
} 