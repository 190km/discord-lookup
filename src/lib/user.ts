export function getUserAvatarUrl(
  id: string,
  avatar: string | null,
  animted: boolean
): string {
  const index = Number((BigInt(id) >> BigInt(22)) % BigInt(6));
  return avatar
    ? `https://cdn.discordapp.com/avatars/${id}/${avatar}${
        animted ? ".gif" : ".webp?size=512"
      }`
    : `https://cdn.discordapp.com/embed/avatars/${index}.png`;
}

export function getUserDecorationUrl(id: string): string {
  return `https://cdn.discordapp.com/avatar-decoration-presets/${id}?size=512`;
}

export function getUserGuildTagUrl(guildId: string, badgeId: string): string {
  return `https://cdn.discordapp.com/clan-badges/${guildId}/${badgeId}.png`;
}

export function getUserNameplateUrl(name: string): string {
  return `https://cdn.discordapp.com/assets/collectibles/${name}asset.webm`;
}
